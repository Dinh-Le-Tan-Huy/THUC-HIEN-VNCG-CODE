/**
 * ==========================================================================
 * COMPONENT LOGIC: ACGS CARD
 * File: component/ACGSCard/ACGS.js
 * ==========================================================================
 *
 * Hàm renderACGSCard:
 * Nạp template ACGSCard.html và gán props từ màn hình
 *
 * @param {string|HTMLElement} target - Selector hoặc element container (ví dụ: '#acgs-cards')
 * @param {Object} props - Dữ liệu truyền từ screen
 * @param {string} [props.bgImage] - Đường dẫn ảnh nền (ví dụ: '../../public/Image/ACGS_Card1.png')
 * @param {string} [props.bgAlt] - Thuộc tính alt cho ảnh
 * @param {string} props.title - Tiêu đề card (ví dụ: 'Thực hiện ACGS')
 * @param {string} [props.description] - Mô tả card (ví dụ: 'Đánh giá và thực hiện các tiêu chí')
 * @param {string} [props.iconSvg] - Mã SVG tùy biến cho icon (nếu không truyền sẽ dùng icon biểu đồ mặc định)
 * @param {string} [props.link] - Đường dẫn chuyển hướng khi click (mặc định '#')
 * @param {string} [props.customClass] - Class CSS tùy biến thêm từ screen
 * @param {Object} [props.customStyle] - Inline styles tùy biến thêm từ screen
 */

async function renderACGSCard(target, props = {}) {
    const container = typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!container) {
        console.error(`[renderACGSCard] Không tìm thấy phần tử container: "${target}"`);
        return;
    }

    try {
        // Tải template HTML của ACGSCard
        const response = await fetch("../../component/ACGSCard/ACGSCard.html");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const template = await response.text();
        
        // Tạo DOM element từ template
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = template.trim();
        const cardElement = tempDiv.firstElementChild;

        // Áp dụng props vào cardElement
        applyCardProps(cardElement, props);

        // Chèn vào container
        container.appendChild(cardElement);
    } catch (error) {
        console.error("[renderACGSCard] Lỗi khi nạp ACGSCard:", error);
    }
}

/**
 * Gán dữ liệu props vào phần tử Card
 */
function applyCardProps(card, props) {
    const {
        bgImage,
        bgAlt = "ACGS Card",
        title = "",
        description = "",
        iconSvg,
        link = "#",
        customClass = "",
        customStyle = {}
    } = props;

    // 1. Ảnh nền
    const img = card.querySelector(".acgs-card-bg");
    if (img) {
        if (bgImage) {
            img.src = bgImage;
            img.alt = bgAlt;
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    }

    // 2. Link điều hướng
    const linkEl = card.querySelector(".acgs-card-link");
    if (linkEl && link) {
        linkEl.href = link;
    }

    // 3. Icon
    const iconWrapper = card.querySelector(".acgs-card-icon-wrapper");
    if (iconWrapper) {
        if (iconSvg) iconWrapper.innerHTML = iconSvg;
        if (props.iconColor) iconWrapper.style.color = props.iconColor;
    }

    // 4. Tiêu đề
    const titleEl = card.querySelector(".acgs-card-title");
    if (titleEl) {
        titleEl.textContent = title;
        if (props.titleColor) titleEl.style.color = props.titleColor;
    }

    // 5. Mô tả
    const descEl = card.querySelector(".acgs-card-desc");
    if (descEl) {
        if (description) {
            descEl.textContent = description;
            descEl.style.display = "block";
            if (props.descColor) descEl.style.color = props.descColor;
        } else {
            descEl.style.display = "none";
        }
    }

    // 6. Tùy biến class & style từ screen
    if (customClass) {
        card.classList.add(...customClass.split(" ").filter(Boolean));
    }
    if (customStyle && typeof customStyle === "object") {
        Object.assign(card.style, customStyle);
    }
}
