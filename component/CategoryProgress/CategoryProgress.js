/**
 * ==========================================================================
 * COMPONENT LOGIC: CATEGORY PROGRESS (ĐIỂM THEO NHÓM TIÊU CHÍ)
 * File: component/category-progress/CategoryProgress.js
 * ==========================================================================
 *
 * Hàm renderCategoryProgress:
 * Nạp template CategoryProgress.html và gán props từ màn hình (screen)
 *
 * @param {string|HTMLElement} target - Selector hoặc element container
 * @param {Object} props - Dữ liệu truyền từ screen
 * @param {string} [props.title] - Tiêu đề card (mặc định: 'ĐIỂM THEO NHÓM TIÊU CHÍ')
 * @param {Array<Object>} props.items - Danh sách các nhóm tiêu chí
 *   @param {string} items[].badge - Ký tự chữ cái đại diện nhóm ('A', 'B', 'C', 'D'...)
 *   @param {string} items[].name - Tên nhóm tiêu chí
 *   @param {number} items[].score - Điểm số đạt được
 *   @param {number} items[].maxScore - Điểm số tối đa của nhóm
 *   @param {number} [items[].percent] - Tỷ lệ phần trăm (nếu không truyền sẽ tự tính từ score/maxScore)
 *   @param {string} [items[].badgeBg] - Màu nền tùy biến của huy hiệu tròn
 *   @param {string} [items[].badgeColor] - Màu chữ tùy biến của huy hiệu tròn
 *   @param {string} [items[].barColor] - Màu thanh tiến độ
 * @param {string} [props.customClass] - Class CSS bổ sung
 * @param {Object} [props.customStyle] - Inline styles bổ sung
 */

const CATEGORY_PROGRESS_FALLBACK_TEMPLATE = `
<div class="category-progress-card">
    <div class="category-progress-header">
        <h3 class="category-progress-title"></h3>
    </div>
    <div class="category-progress-list"></div>
</div>
`;

let categoryProgressTemplateCache = null;

async function loadCategoryProgressTemplate() {
    if (categoryProgressTemplateCache) return categoryProgressTemplateCache;

    const possiblePaths = [
        "../../component/CategoryProgress/CategoryProgress.html",
        "../component/CategoryProgress/CategoryProgress.html",
        "./component/CategoryProgress/CategoryProgress.html",
        "../../component/category-progress/CategoryProgress.html",
        "../component/category-progress/CategoryProgress.html",
        "./component/category-progress/CategoryProgress.html",
        "./CategoryProgress.html"
    ];

    for (const path of possiblePaths) {
        try {
            const res = await fetch(path);
            if (res.ok) {
                categoryProgressTemplateCache = await res.text();
                return categoryProgressTemplateCache;
            }
        } catch (e) {
            // Thử tiếp
        }
    }

    categoryProgressTemplateCache = CATEGORY_PROGRESS_FALLBACK_TEMPLATE.trim();
    return categoryProgressTemplateCache;
}

/**
 * Render CategoryProgress component
 */
async function renderCategoryProgress(target, props = {}) {
    const container = typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!container) {
        console.error(`[renderCategoryProgress] Không tìm thấy container: "${target}"`);
        return null;
    }

    try {
        const template = await loadCategoryProgressTemplate();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = template.trim();
        const cardElement = tempDiv.firstElementChild;

        // Áp dụng props
        applyCategoryProgressProps(cardElement, props);

        container.appendChild(cardElement);
        return cardElement;
    } catch (error) {
        console.error("[renderCategoryProgress] Lỗi khi nạp component:", error);
        return null;
    }
}

/**
 * Gán dữ liệu props vào DOM
 */
function applyCategoryProgressProps(card, props = {}) {
    const {
        title = "ĐIỂM THEO NHÓM TIÊU CHÍ",
        items = [],
        customClass = "",
        customStyle = {}
    } = props;

    // 1. Tiêu đề
    const titleEl = card.querySelector(".category-progress-title");
    if (titleEl) {
        titleEl.textContent = title;
    }

    // 2. Danh sách items
    const listEl = card.querySelector(".category-progress-list");
    if (listEl && Array.isArray(items)) {
        listEl.innerHTML = "";

        items.forEach(item => {
            const {
                badge = "A",
                name = "",
                score = 0,
                maxScore = 0,
                percent: explicitPercent,
                badgeBg,
                badgeColor,
                barColor
            } = item;

            const percent = explicitPercent !== undefined && explicitPercent !== null
                ? explicitPercent
                : (maxScore > 0 ? Math.round((score / maxScore) * 100) : 0);

            const itemEl = document.createElement("div");
            itemEl.className = "category-item";

            // Tạo huy hiệu với class theo chữ cái
            const badgeClass = `category-item-badge category-item-badge--${badge}`;

            itemEl.innerHTML = `
                <div class="category-item-top">
                    <div class="category-item-left">
                        <span class="${badgeClass}">${badge}</span>
                        <span class="category-item-name">${name}</span>
                    </div>
                    <div class="category-item-stats">
                        <span class="category-item-score"><b>${score}</b> / ${maxScore}</span>
                        <span class="category-item-percent">${percent}%</span>
                    </div>
                </div>
                <div class="category-item-bar">
                    <div class="category-item-fill" style="width: 0%;"></div>
                </div>
            `;

            // Áp dụng màu tùy biến nếu có
            const badgeEl = itemEl.querySelector(".category-item-badge");
            if (badgeEl) {
                if (badgeBg) badgeEl.style.backgroundColor = badgeBg;
                if (badgeColor) badgeEl.style.color = badgeColor;
            }

            const fillEl = itemEl.querySelector(".category-item-fill");
            if (fillEl && barColor) {
                fillEl.style.backgroundColor = barColor;
            }

            // Kích hoạt animation chạy width
            requestAnimationFrame(() => {
                if (fillEl) fillEl.style.width = `${Math.min(100, Math.max(0, percent))}%`;
            });

            listEl.appendChild(itemEl);
        });
    }

    // 3. Class & inline style tùy biến
    if (customClass) {
        card.classList.add(...customClass.split(" ").filter(Boolean));
    }
    if (customStyle && typeof customStyle === "object") {
        Object.assign(card.style, customStyle);
    }
}
