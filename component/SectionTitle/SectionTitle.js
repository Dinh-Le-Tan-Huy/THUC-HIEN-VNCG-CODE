/**
 * ==========================================================================
 * COMPONENT LOGIC: SECTION TITLE
 * File: component/SectionTitle/SectionTitle.js
 * ==========================================================================
 *
 * Hàm renderSectionTitle:
 * Nạp template SectionTitle.html và gán props từ màn hình (screen)
 *
 * @param {string|HTMLElement} target - Selector hoặc element container (ví dụ: '#section-title')
 * @param {Object} props - Dữ liệu truyền từ screen
 * @param {string} props.title - Tiêu đề đề mục (ví dụ: 'TỔNG QUAN THỰC HIỆN ACGS')
 * @param {string} [props.description] - Mô tả phụ bên dưới tiêu đề (ví dụ: 'Tổng quan kết quả đánh giá...')
 * @param {string} [props.subtitle] - Alias thay thế cho description
 * @param {string} [props.barColor] - Màu sắc tùy biến của vạch dọc (mặc định: #0947a5)
 * @param {string} [props.titleColor] - Màu sắc tùy biến của tiêu đề chính
 * @param {string} [props.descColor] - Màu sắc tùy biến của mô tả phụ
 * @param {string} [props.customClass] - Class CSS tùy biến thêm từ screen
 * @param {Object} [props.customStyle] - Inline style tùy biến thêm từ screen
 */

async function renderSectionTitle(target, props = {}) {
    const container = typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!container) {
        console.error(`[renderSectionTitle] Không tìm thấy phần tử container: "${target}"`);
        return;
    }

    try {
        // Tải template HTML của SectionTitle
        const response = await fetch("../../component/SectionTitle/SectionTitle.html");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const template = await response.text();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = template.trim();
        const element = tempDiv.firstElementChild;

        // Áp dụng props
        applySectionTitleProps(element, props);

        // Chèn vào container
        container.appendChild(element);
        return element;
    } catch (error) {
        console.error("[renderSectionTitle] Lỗi khi nạp SectionTitle:", error);
    }
}

/**
 * Gán dữ liệu props vào phần tử SectionTitle
 */
function applySectionTitleProps(element, props = {}) {
    const {
        title = "",
        description = "",
        subtitle = "",
        barColor,
        titleColor,
        descColor,
        customClass = "",
        customStyle = {}
    } = props;

    // 1. Vạch xanh dọc bên trái
    const bar = element.querySelector(".section-title-bar");
    if (bar && barColor) {
        bar.style.backgroundColor = barColor;
    }

    // 2. Tiêu đề chính
    const heading = element.querySelector(".section-title-heading");
    if (heading) {
        heading.textContent = title;
        if (titleColor) heading.style.color = titleColor;
    }

    // 3. Đoạn mô tả / phụ đề
    const descText = description || subtitle;
    const desc = element.querySelector(".section-title-desc");
    if (desc) {
        if (descText) {
            desc.textContent = descText;
            desc.style.display = "block";
            if (descColor) desc.style.color = descColor;
        } else {
            desc.style.display = "none";
        }
    }

    // 4. Tùy biến class & style từ screen
    if (customClass) {
        element.classList.add(...customClass.split(" ").filter(Boolean));
    }
    if (customStyle && typeof customStyle === "object") {
        Object.assign(element.style, customStyle);
    }
}
