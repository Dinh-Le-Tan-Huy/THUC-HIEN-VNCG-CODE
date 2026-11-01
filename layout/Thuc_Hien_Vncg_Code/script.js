
async function renderBanner(target, props = {}) {
    const container = document.querySelector(target);
    if (!container) return;

    try {
        const response = await fetch("../../component/Banner/Banner.html");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const template = await response.text();
        container.innerHTML = template;

        // Ảnh nền
        const img = container.querySelector(".banner-img");
        if (img) {
            if (props.bgImage) {
                img.src = props.bgImage;
                img.alt = props.bgAlt || "Banner";
            } else {
                img.style.display = "none";
            }
        }

        // Breadcrumbs
        const breadcrumb = container.querySelector(".banner-breadcrumb");
        if (breadcrumb && Array.isArray(props.breadcrumbs) && props.breadcrumbs.length > 0) {
            const homeIcon = breadcrumb.querySelector(".breadcrumb-home");
            breadcrumb.innerHTML = "";
            if (homeIcon) breadcrumb.appendChild(homeIcon);

            props.breadcrumbs.forEach((item, index) => {
                const isLast = index === props.breadcrumbs.length - 1;
                const sep = document.createElement("span");
                sep.className = "breadcrumb-separator";
                sep.textContent = "›";
                breadcrumb.appendChild(sep);

                if (isLast || !item.url) {
                    const current = document.createElement("span");
                    current.className = "breadcrumb-current";
                    current.textContent = item.label;
                    breadcrumb.appendChild(current);
                } else {
                    const link = document.createElement("a");
                    link.className = "breadcrumb-link";
                    link.href = item.url;
                    link.textContent = item.label;
                    breadcrumb.appendChild(link);
                }
            });
        }

        // Badge / Tag
        const badge = container.querySelector(".banner-badge");
        const badgeText = container.querySelector(".badge-text");
        if (badge) {
            if (props.badgeText) {
                badge.style.display = "inline-flex";
                if (badgeText) badgeText.textContent = props.badgeText;
            } else {
                badge.style.display = "none";
            }
        }

        // Tiêu đề chính
        const title = container.querySelector(".banner-title");
        if (title && props.title) {
            title.textContent = props.title;
        }

        // Đoạn mô tả
        const desc = container.querySelector(".banner-description");
        if (desc && props.description) {
            desc.textContent = props.description;
            desc.style.display = "block";
        }

        // Tùy biến Style & Class
        const section = container.querySelector(".banner-section");
        if (section) {
            if (props.customClass) section.classList.add(...props.customClass.split(" ").filter(Boolean));
            if (props.customStyle && typeof props.customStyle === "object") {
                Object.assign(section.style, props.customStyle);
            }
        }
    } catch (error) {
        console.error("[renderBanner] Lỗi:", error);
    }
}

/**
 * 2. Hàm nạp component ACGS CARD nhận props từ màn hình
 */
async function renderACGSCard(target, props = {}) {
    const container = document.querySelector(target);
    if (!container) return;

    try {
        const response = await fetch("../../component/ACGSCard/ACGSCard.html");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const template = await response.text();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = template.trim();
        const cardElement = tempDiv.firstElementChild;

        // Gán ảnh nền
        const img = cardElement.querySelector(".acgs-card-bg");
        if (img && props.bgImage) {
            img.src = props.bgImage;
            img.alt = props.bgAlt || "ACGS Card";
        }

        // Gán link
        const link = cardElement.querySelector(".acgs-card-link");
        if (link && props.link) {
            link.href = props.link;
        }

        // Gán icon tùy biến (nếu có)
        const iconWrapper = cardElement.querySelector(".acgs-card-icon-wrapper");
        if (iconWrapper) {
            if (props.iconSvg) iconWrapper.innerHTML = props.iconSvg;
            if (props.iconColor) iconWrapper.style.color = props.iconColor;
        }

        // Gán tiêu đề
        const title = cardElement.querySelector(".acgs-card-title");
        if (title && props.title) {
            title.textContent = props.title;
            if (props.titleColor) title.style.color = props.titleColor;
        }

        // Gán mô tả
        const desc = cardElement.querySelector(".acgs-card-desc");
        if (desc && props.description) {
            desc.textContent = props.description;
            if (props.descColor) desc.style.color = props.descColor;
        }

        // Tùy biến class & style từ screen
        if (props.customClass) {
            cardElement.classList.add(...props.customClass.split(" ").filter(Boolean));
        }
        if (props.customStyle && typeof props.customStyle === "object") {
            Object.assign(cardElement.style, props.customStyle);
        }

        container.appendChild(cardElement);
    } catch (error) {
        console.error("[renderACGSCard] Lỗi:", error);
    }
}

/**
 * 3. Hàm nạp component SECTION TITLE nhận props từ màn hình
 */
async function renderSectionTitle(target, props = {}) {
    const container = document.querySelector(target);
    if (!container) return;

    try {
        const response = await fetch("../../component/SectionTitle/SectionTitle.html");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const template = await response.text();
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = template.trim();
        const element = tempDiv.firstElementChild;

        // Vạch xanh dọc
        const bar = element.querySelector(".section-title-bar");
        if (bar && props.barColor) bar.style.backgroundColor = props.barColor;

        // Tiêu đề chính
        const heading = element.querySelector(".section-title-heading");
        if (heading && props.title) {
            heading.textContent = props.title;
            if (props.titleColor) heading.style.color = props.titleColor;
        }

        // Mô tả phụ
        const descText = props.description || props.subtitle;
        const desc = element.querySelector(".section-title-desc");
        if (desc) {
            if (descText) {
                desc.textContent = descText;
                desc.style.display = "block";
                if (props.descColor) desc.style.color = props.descColor;
            } else {
                desc.style.display = "none";
            }
        }

        // Tùy biến class & style
        if (props.customClass) element.classList.add(...props.customClass.split(" ").filter(Boolean));
        if (props.customStyle && typeof props.customStyle === "object") {
            Object.assign(element.style, props.customStyle);
        }

        container.appendChild(element);
    } catch (error) {
        console.error("[renderSectionTitle] Lỗi:", error);
    }
}

/**
 * 4. Hàm nạp khối TỶ LỆ KẾT QUẢ ĐÁNH GIÁ (Tiến độ phân bố tiêu chí kiểm toán)
 */
async function renderQuestionStatus(target, props = {}) {
    const container = typeof target === 'string' ? document.querySelector(target) : target;
    if (!container) return;

    container.innerHTML = "";

    const {
        title = "TỶ LỆ KẾT QUẢ ĐÁNH GIÁ",
        subtitle = "Phân bố kết quả theo phân loại đánh giá trên toàn bộ 231 tiêu chí kiểm toán",
        progressLabel = "Tiến độ phân bố",
        total = 231,
        totalText,
        items = [],
        customClass = ""
    } = props;

    const card = document.createElement("div");
    card.className = `question-status-card ${customClass}`.trim();

    // 1. Header (Title + Subtitle)
    const header = document.createElement("div");
    header.className = "question-status-header";
    header.innerHTML = `
        <h3 class="question-status-title">${title}</h3>
        ${subtitle ? `<p class="question-status-subtitle">${subtitle}</p>` : ''}
    `;
    card.appendChild(header);

    // 2. Nếu có item chứa variant (hỗ trợ hiển thị stat card mềm nếu có cấu hình)
    const hasCardVariants = items.some(it => it.variant || it.value);
    if (hasCardVariants) {
        const grid = document.createElement("div");
        grid.className = "question-status-cards-grid";
        card.appendChild(grid);

        for (const item of items) {
            if (typeof renderStatCard === "function") {
                await renderStatCard(grid, item);
            }
        }
    }

    // 3. Khối tiến độ phân bố & Segmented Bar
    const progressWrap = document.createElement("div");
    progressWrap.className = "question-status-progress-wrap";

    const displayTotal = totalText || `Tổng cộng: <b>${total} (100%)</b>`;

    const labelsRow = document.createElement("div");
    labelsRow.className = "question-status-progress-labels";
    labelsRow.innerHTML = `
        <span class="progress-label-left">${progressLabel}</span>
        <span class="progress-label-right">${displayTotal}</span>
    `;
    progressWrap.appendChild(labelsRow);

    const bar = document.createElement("div");
    bar.className = "question-status-segmented-bar";

    const defaultColors = [
        "var(--color-success-accent)",
        "var(--color-warning-bright)",
        "var(--color-danger)",
        "var(--color-purple)"
    ];

    items.forEach((item, index) => {
        const seg = document.createElement("div");
        const color = item.color || defaultColors[index % defaultColors.length];
        seg.className = `segmented-bar-item segmented-bar-item--${index}`;
        seg.style.width = `${item.percent}%`;
        seg.style.backgroundColor = color;
        if (item.title) {
            const countInfo = item.count ? ` (${item.count} tiêu chí)` : '';
            seg.setAttribute("title", `${item.title}${countInfo}: ${item.percent}%`);
        }
        bar.appendChild(seg);
    });

    progressWrap.appendChild(bar);
    card.appendChild(progressWrap);

    container.appendChild(card);
}

/**
 * 5. Khởi chạy toàn bộ khi DOM sẵn sàng
 */
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Nạp BANNER
    renderBanner("#banner", {
        bgImage: "../../assets/Image/Banner.png",
        bgAlt: "Thực hiện ACGS - PV Drilling",
        breadcrumbs: [
            { label: "Báo cáo Quản trị công ty", url: "#" },
            { label: "Thực hiện ACGS" }
        ],
        badgeText: "QUAN HỆ NHÀ ĐẦU TƯ",
        title: "THỰC HIỆN ACGS",
        description: "Công bố tình hình thực hiện Bộ nguyên tắc Quản trị công ty ASEAN (ACGS) của PV Drilling theo từng năm, hướng đến nâng cao tính minh bạch, trách nhiệm giải trình và chất lượng quản trị."
    });

    // 2. Card 1: Thực hiện ACGS
    renderACGSCard("#acgs-cards-container", {
        bgImage: "../../assets/Image/ACGS_Card1.png",
        bgAlt: "Thực hiện ACGS",
        title: "Thực hiện ACGS",
        description: "Đánh giá và thực hiện các tiêu chí",
        link: "#",
        customClass: "acgs-card-primary",
        iconColor: "#ffffff",
        iconSvg: `
            <svg class="acgs-card-icon" viewBox="0 0 28 28" fill="currentColor">
                <rect x="3" y="17" width="5" height="8" rx="1.2"/>
                <rect x="11.5" y="11" width="5" height="14" rx="1.2"/>
                <rect x="20" y="5" width="5" height="20" rx="1.2"/>
            </svg>
        `
    });

    // 3. Card 2: Thực hiện VNCG Code
    renderACGSCard("#acgs-cards-container", {
        bgImage: "../../assets/Image/ACGS_Card2.png",
        bgAlt: "Thực hiện VNCG Code",
        title: "Thực hiện VNCG Code",
        description: "Minh bạch - Bền vững - Giá trị dài hạn",
        link: "#",
        customClass: "acgs-card-light",
        titleColor: "#1565c0",
        descColor: "#4a6585",
        iconColor: "#1565c0",
        iconSvg: `
            <svg class="acgs-card-icon" viewBox="0 0 28 28" fill="currentColor">
                <path d="M4 6.5C4 5.12 5.12 4 6.5 4H12c.55 0 1 .45 1 1v15.2c0 .35-.18.67-.48.85-.3.18-.68.19-.99.03-1.4-.73-3.12-.9-4.82-.48-.68.17-1.34.45-1.93.84-.48.32-.78.85-.78 1.42V6.5z"/>
                <path d="M15 5c0-.55.45-1 1-1h5.5c1.38 0 2.5 1.12 2.5 2.5v16.36c0-.57-.3-1.1-.78-1.42-.59-.39-1.25-.67-1.93-.84-1.7-.42-3.42-.25-4.82.48-.31.16-.69.15-.99-.03-.3-.18-.48-.5-.48-.85V5z"/>
                <line x1="17" y1="9" x2="21" y2="9" stroke="#eaf4ff" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="17" y1="13" x2="21" y2="13" stroke="#eaf4ff" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        `
    });

    // 4. Tiêu đề đề mục: TỔNG QUAN
    renderSectionTitle("#overview-title", {
        title: "TỔNG QUAN",
        description: "Tổng quan kết quả tự đánh giá mức độ tuân thủ các nguyên tắc và thông lệ VNCG Code."
    });

    // 5. 4 Stat Cards: Tuân thủ, Tuân thủ một phần, Chưa tuân thủ, Không áp dụng (khớp theo hình 1)
    if (typeof renderStatCards === "function") {
        await renderStatCards("#stat-cards-overview", [
            {
                theme: "green",
                iconType: "check",
                title: "TUÂN THỦ",
                value: "217",
                suffix: "/231 chủ đề",
                progress: 93.9
            },
            {
                theme: "yellow",
                iconType: "clock",
                title: "TUÂN THỦ MỘT PHẦN",
                value: "10",
                suffix: "/231 chủ đề",
                progress: 4.3
            },
            {
                theme: "red",
                iconType: "alert",
                title: "CHƯA TUÂN THỦ",
                value: "2",
                suffix: "/231 chủ đề",
                progress: 0.9
            },
            {
                theme: "gray",
                iconType: "minus",
                title: "KHÔNG ÁP DỤNG",
                value: "2",
                suffix: "/231 chủ đề",
                progress: 0.9
            }
        ]);
    }

    // 6. Khối TỶ LỆ KẾT QUẢ ĐÁNH GIÁ (khớp chuẩn theo hình)
    await renderQuestionStatus("#question-status-container", {
        title: "TỶ LỆ KẾT QUẢ ĐÁNH GIÁ",
        subtitle: "Phân bố kết quả theo phân loại đánh giá trên toàn bộ 231 tiêu chí kiểm toán",
        progressLabel: "Tiến độ phân bố",
        total: 231,
        totalText: "Tổng cộng: <b>231 (100%)</b>",
        items: [
            {
                title: "Đáp ứng toàn bộ",
                count: 207,
                percent: 89.6,
                color: "var(--color-success-accent, #00b074)"
            },
            {
                title: "Chưa đáp ứng đầy đủ hoặc đáp ứng 1 phần",
                count: 16,
                percent: 6.9,
                color: "var(--color-warning-bright, #f97316)"
            },
            {
                title: "Không đáp ứng",
                count: 8,
                percent: 3.5,
                color: "var(--color-danger, #ef4444)"
            }
        ]
    });



    // 8. Tiêu đề đề mục: CHI TIẾT
    await renderSectionTitle("#detail-title", {
        title: "CHI TIẾT",
        description: "Bảng chi tiết kết quả tự đánh giá mức độ tuân thủ các nguyên tắc và thông lệ VNCG Code."
    });



    // 10. Render component CriteriaAccordion (Bảng 3 cấp)
    let criteriaController = null;
    if (typeof renderCriteriaAccordion === "function") {
        const vncgData = (typeof vncgCodeDetailData !== "undefined" ? vncgCodeDetailData : window.vncgCodeDetailData)
            || (typeof acgsDetailData !== "undefined" ? acgsDetailData : window.acgsDetailData)
            || [];

        criteriaController = await renderCriteriaAccordion("#criteria-accordion-container", {
            columnMode: "hdqt",
            data: vncgData,
            defaultExpandFirst: true,
            onEvidenceClick: (ev) => {
                console.log("[CriteriaAccordion] Xem tài liệu bằng chứng:", ev.title, ev.url);
            }
        });
    }

    // 11. Ô tìm kiếm chi tiết (SearchDetail component) kết nối trực tiếp với bảng
    if (typeof renderSearchDetail === "function") {
        await renderSearchDetail("#search-detail-container", {
            placeholder: "Tìm kiếm theo câu hỏi, trích dẫn, bằng chứng...",
            onSearch: (keyword) => {
                console.log("[SearchDetail] Tìm kiếm:", keyword);
                if (criteriaController) {
                    criteriaController.filter(keyword);
                }
            }
        });
    }

    // 12. Chuyển đổi Cấp độ 1 / Cấp độ 2
    const levelButtons = document.querySelectorAll(".level-filter-btn");
    levelButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            levelButtons.forEach(b => b.classList.remove("level-filter-btn--active"));
            btn.classList.add("level-filter-btn--active");
            const level = btn.getAttribute("data-level");
            console.log("[Filter] Chọn cấp độ:", level);
        });
    });

    // 13. Xử lý Dropdown năm báo cáo
    const yearDropdown = document.querySelector("#year-dropdown");
    const selectedYearEl = document.querySelector("#selected-year");
    if (yearDropdown && selectedYearEl) {
        yearDropdown.addEventListener("click", () => {
            const currentYear = selectedYearEl.textContent.trim();
            selectedYearEl.textContent = currentYear === "2026" ? "2025" : "2026";
        });
    }
});