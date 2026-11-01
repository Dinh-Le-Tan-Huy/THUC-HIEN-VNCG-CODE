/**
 * ==========================================================================
 * COMPONENT LOGIC: STAT CARD
 * File: component/stat-card/StatCard.js
 * ==========================================================================
 *
 * Hàm renderStatCard:
 * Nạp template StatCard.html và gán props từ màn hình (screen)
 *
 * @param {string|HTMLElement} target - Selector hoặc element container (ví dụ: '#overview-stat-cards')
 * @param {Object} props - Dữ liệu truyền từ screen
 * @param {string} props.title - Tiêu đề card (ví dụ: 'TỔNG ĐIỂM ĐẠT ĐƯỢC', 'Đáp ứng toàn bộ')
 * @param {string|number} props.value - Giá trị số liệu chính (ví dụ: '143', '68%', '146')
 * @param {string} [props.suffix] - Hậu tố/đơn vị đằng sau giá trị (ví dụ: '/ 209 điểm', 'câu hỏi')
 * @param {string} [props.subValue] - Chỉ số phụ bên dưới value (ví dụ: '76%', '24%')
 * @param {string} [props.description] - Ghi chú phụ bên dưới (ví dụ: 'Điểm đạt được trên tổng điểm tối đa')
 * @param {string} [props.note] - Alias cho description
 * @param {number} [props.progress] - Giá trị thanh tiến độ từ 0 đến 100 (ví dụ: 68, 73, 40)
 * @param {string} [props.progressLabel] - Chữ hiển thị phía trên thanh tiến độ (ví dụ: 'Đạt 73%')
 * @param {string} [props.progressColor] - Màu thanh tiến độ (mã hex/rgb)
 * @param {string} [props.iconType] - Icon có sẵn: 'trophy' | 'target' | 'level' | 'check' | 'clock'
 * @param {string} [props.iconSvg] - Mã SVG tùy biến nếu không dùng iconType
 * @param {string} [props.iconBg] - Màu nền khung icon tròn
 * @param {string} [props.iconColor] - Màu icon
 * @param {string} [props.theme] - Theme màu có sẵn: 'red' | 'green' | 'purple' | 'orange'
 * @param {string} [props.variant] - Kiểu card: 'default' | 'soft-green' | 'soft-orange'
 * @param {string} [props.cardBg] - Màu nền tùy biến của card
 * @param {string} [props.borderColor] - Màu viền tùy biến
 * @param {string} [props.customClass] - Class CSS tùy biến thêm từ màn hình
 * @param {Object} [props.customStyle] - Inline styles tùy biến
 */

// Các icon SVG được quản lý tập trung tại design-system/icons.js (VNCG_ICONS)


const STAT_CARD_FALLBACK_TEMPLATE = `
<div class="stat-card">
    <div class="stat-card-header">
        <div class="stat-card-icon-wrapper">
            <span class="stat-card-icon"></span>
        </div>
        <div class="stat-card-title-wrap">
            <h4 class="stat-card-title"></h4>
        </div>
    </div>
    <div class="stat-card-body">
        <div class="stat-card-value-wrap">
            <span class="stat-card-value"></span>
            <span class="stat-card-suffix"></span>
        </div>
        <div class="stat-card-subvalue"></div>
    </div>
    <div class="stat-card-footer">
        <div class="stat-card-progress-label"></div>
        <div class="stat-card-progress-bar">
            <div class="stat-card-progress-fill"></div>
        </div>
        <p class="stat-card-desc"></p>
    </div>
</div>
`;

let statCardTemplateCache = null;

/**
 * Nạp template HTML StatCard (có cache và fallback khi mở file trực tiếp)
 */
async function loadStatCardTemplate() {
    if (statCardTemplateCache) return statCardTemplateCache;

    const possiblePaths = [
        "../../component/StatCard/StatCard.html",
        "../component/StatCard/StatCard.html",
        "./component/StatCard/StatCard.html",
        "../../component/stat-card/StatCard.html",
        "../component/stat-card/StatCard.html",
        "./component/stat-card/StatCard.html",
        "./StatCard.html"
    ];

    for (const path of possiblePaths) {
        try {
            const res = await fetch(path);
            if (res.ok) {
                statCardTemplateCache = await res.text();
                return statCardTemplateCache;
            }
        } catch (e) {
            // Thử tiếp
        }
    }

    // Fallback nếu chạy file:// (trình duyệt chặn CORS)
    statCardTemplateCache = STAT_CARD_FALLBACK_TEMPLATE.trim();
    return statCardTemplateCache;
}

/**
 * Render 1 StatCard vào container
 */
async function renderStatCard(target, props = {}) {
    const container = typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!container) {
        console.error(`[renderStatCard] Không tìm thấy container: "${target}"`);
        return null;
    }

    try {
        const template = await loadStatCardTemplate();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = template.trim();
        const cardElement = tempDiv.firstElementChild;

        // Áp dụng dữ liệu props
        applyStatCardProps(cardElement, props);

        // Chèn vào container
        container.appendChild(cardElement);
        return cardElement;
    } catch (error) {
        console.error("[renderStatCard] Lỗi khi nạp StatCard:", error);
        return null;
    }
}

/**
 * Render một mảng nhiều StatCard cùng lúc
 */
async function renderStatCards(target, cardsList = []) {
    const container = typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!container || !Array.isArray(cardsList)) return;

    for (const cardProps of cardsList) {
        await renderStatCard(container, cardProps);
    }
}

/**
 * Gán dữ liệu props vào phần tử DOM của card
 */
function applyStatCardProps(card, props = {}) {
    const {
        title = "",
        titleColor,
        value = "",
        valueColor,
        suffix = "",
        suffixColor,
        subValue = "",
        subValueColor,
        description = "",
        note = "",
        descColor,
        progress = null,
        progressLabel = "",
        progressColor,
        progressTrackColor,
        iconType,
        iconSvg,
        iconBg,
        iconColor,
        theme,
        variant,
        cardBg,
        borderColor,
        customClass = "",
        customStyle = {}
    } = props;

    // 1. Áp dụng Theme hoặc Variant vào class của card
    if (theme) {
        card.classList.add(`stat-card--${theme}`);
    }
    if (variant) {
        card.classList.add(`stat-card--${variant}`);
    }

    // 2. Tùy biến màu nền & viền của cả card
    if (cardBg) card.style.backgroundColor = cardBg;
    if (borderColor) card.style.borderColor = borderColor;

    // 3. Icon
    const iconWrapper = card.querySelector(".stat-card-icon-wrapper");
    if (iconWrapper) {
        let svgHtml = iconSvg;
        if (!svgHtml && iconType) {
            const iconsLib = typeof VNCG_ICONS !== "undefined" ? VNCG_ICONS : (window.VNCG_ICONS || {});
            svgHtml = iconsLib[iconType] || "";
        }

        if (svgHtml) {
            iconWrapper.innerHTML = svgHtml.trim();
            iconWrapper.style.display = "inline-flex";
        } else {
            iconWrapper.style.display = "none";
        }

        if (iconBg) iconWrapper.style.backgroundColor = iconBg;
        if (iconColor) iconWrapper.style.color = iconColor;
    }

    // 4. Tiêu đề
    const titleEl = card.querySelector(".stat-card-title");
    if (titleEl) {
        titleEl.textContent = title;
        if (titleColor) titleEl.style.color = titleColor;
    }

    // 5. Giá trị chính (Value)
    const valueEl = card.querySelector(".stat-card-value");
    if (valueEl) {
        valueEl.textContent = value;
        if (valueColor) valueEl.style.color = valueColor;
    }

    // 6. Hậu tố / Đơn vị (Suffix)
    const suffixEl = card.querySelector(".stat-card-suffix");
    if (suffixEl) {
        if (suffix) {
            suffixEl.textContent = suffix;
            suffixEl.style.display = "inline";
            if (suffixColor) suffixEl.style.color = suffixColor;
        } else {
            suffixEl.style.display = "none";
        }
    }

    // 7. Chỉ số phụ / Tỷ lệ % (Subvalue)
    const subValueEl = card.querySelector(".stat-card-subvalue");
    if (subValueEl) {
        if (subValue) {
            subValueEl.textContent = subValue;
            subValueEl.style.display = "block";
            if (subValueColor) subValueEl.style.color = subValueColor;
        } else if (!variant || (!variant.includes("soft"))) {
            subValueEl.style.display = "none";
        }
    }

    // 8. Mô tả phụ / Chú thích (Description / Note)
    const noteText = description || note;
    const descEl = card.querySelector(".stat-card-desc");
    if (descEl) {
        if (noteText) {
            descEl.textContent = noteText;
            descEl.style.display = "block";
            if (descColor) descEl.style.color = descColor;
        } else {
            descEl.style.display = "none";
        }
    }

    // 9. Thanh tiến độ (Progress bar) & nhãn tiến độ
    const progressLabelEl = card.querySelector(".stat-card-progress-label");
    const progressBarEl = card.querySelector(".stat-card-progress-bar");
    const progressFillEl = card.querySelector(".stat-card-progress-fill");

    if (progress !== null && progress !== undefined) {
        const percent = Math.min(100, Math.max(0, Number(progress) || 0));

        // Nhãn tiến độ (ví dụ: 'Đạt 73%')
        if (progressLabelEl) {
            if (progressLabel) {
                progressLabelEl.innerHTML = progressLabel;
                progressLabelEl.style.display = "block";
            } else {
                progressLabelEl.style.display = "none";
            }
        }

        // Thanh bar
        if (progressBarEl && progressFillEl) {
            progressBarEl.style.display = "block";
            // Kích hoạt animation fill mượt mà sau khi DOM render
            requestAnimationFrame(() => {
                progressFillEl.style.width = `${percent}%`;
            });

            if (progressColor) progressFillEl.style.backgroundColor = progressColor;
            if (progressTrackColor) progressBarEl.style.backgroundColor = progressTrackColor;
        }
    } else {
        if (progressLabelEl) progressLabelEl.style.display = "none";
        if (progressBarEl) progressBarEl.style.display = "none";
    }

    // 10. Class & Inline Styles tùy biến từ màn hình
    if (customClass) {
        card.classList.add(...customClass.split(" ").filter(Boolean));
    }
    if (customStyle && typeof customStyle === "object") {
        Object.assign(card.style, customStyle);
    }
}
