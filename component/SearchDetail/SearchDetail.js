/**
 * ==========================================================================
 * COMPONENT LOGIC: SEARCH DETAIL
 * File: component/SearchDetail/SearchDetail.js
 * ==========================================================================
 *
 * Hàm renderSearchDetail:
 * Nạp template SearchDetail.html và gán props từ màn hình
 *
 * @param {string|HTMLElement} target - Selector hoặc element container
 * @param {Object} props - Dữ liệu truyền từ screen
 * @param {string} [props.placeholder] - Gợi ý tìm kiếm (mặc định: 'Tìm kiếm theo câu hỏi, trích dẫn, bằng chứng...')
 * @param {string} [props.value] - Giá trị khởi tạo của ô nhập
 * @param {Function} [props.onSearch] - Callback khi người dùng gõ tìm kiếm hoặc ấn Enter / click nút tìm
 * @param {string} [props.customClass] - Class CSS tùy biến bổ sung
 * @param {Object} [props.customStyle] - Inline styles tùy biến
 */

const SEARCH_DETAIL_FALLBACK_TEMPLATE = `
<div class="search-detail">
    <span class="search-detail-icon search-detail-icon--left"></span>
    <input type="text" class="search-detail-input" placeholder="Tìm kiếm theo câu hỏi, trích dẫn, bằng chứng..." />
    <button type="button" class="search-detail-btn" aria-label="Tìm kiếm"></button>
</div>
`;

let searchDetailTemplateCache = null;

async function loadSearchDetailTemplate() {
    if (searchDetailTemplateCache) return searchDetailTemplateCache;

    const possiblePaths = [
        "../../component/SearchDetail/SearchDetail.html",
        "../component/SearchDetail/SearchDetail.html",
        "./component/SearchDetail/SearchDetail.html",
        "./SearchDetail.html"
    ];

    for (const path of possiblePaths) {
        try {
            const res = await fetch(path);
            if (res.ok) {
                searchDetailTemplateCache = await res.text();
                return searchDetailTemplateCache;
            }
        } catch (e) {
            // Thử tiếp
        }
    }

    searchDetailTemplateCache = SEARCH_DETAIL_FALLBACK_TEMPLATE.trim();
    return searchDetailTemplateCache;
}

/**
 * Render SearchDetail component
 */
async function renderSearchDetail(target, props = {}) {
    const container = typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!container) {
        console.error(`[renderSearchDetail] Không tìm thấy container: "${target}"`);
        return null;
    }

    try {
        const template = await loadSearchDetailTemplate();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = template.trim();
        const element = tempDiv.firstElementChild;

        applySearchDetailProps(element, props);

        container.appendChild(element);
        return element;
    } catch (error) {
        console.error("[renderSearchDetail] Lỗi khi nạp component:", error);
        return null;
    }
}

/**
 * Gán dữ liệu props & sự kiện vào element
 */
function applySearchDetailProps(element, props = {}) {
    const {
        placeholder = "Tìm kiếm theo câu hỏi, trích dẫn, bằng chứng...",
        value = "",
        onSearch,
        customClass = "",
        customStyle = {}
    } = props;

    const input = element.querySelector(".search-detail-input");
    const btn = element.querySelector(".search-detail-btn");
    const iconLeft = element.querySelector(".search-detail-icon--left");

    // Điền icon tìm kiếm từ design-system/icons.js
    const searchSvg = (typeof VNCG_ICONS !== "undefined" ? VNCG_ICONS.search : window.VNCG_ICONS?.search) || "";
    if (iconLeft && !iconLeft.innerHTML.trim() && searchSvg) {
        iconLeft.innerHTML = searchSvg;
    }
    if (btn && !btn.innerHTML.trim() && searchSvg) {
        btn.innerHTML = searchSvg;
    }

    if (input) {
        if (placeholder) input.placeholder = placeholder;
        if (value) input.value = value;

        if (typeof onSearch === "function") {
            // Lắng nghe khi gõ input
            input.addEventListener("input", (e) => {
                onSearch(e.target.value);
            });

            // Lắng nghe phím Enter
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    onSearch(input.value);
                }
            });
        }
    }

    if (btn && typeof onSearch === "function" && input) {
        btn.addEventListener("click", () => {
            onSearch(input.value);
        });
    }

    if (customClass) {
        element.classList.add(...customClass.split(" ").filter(Boolean));
    }
    if (customStyle && typeof customStyle === "object") {
        Object.assign(element.style, customStyle);
    }
}
