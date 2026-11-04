/**
 * ==========================================================================
 * SCREEN SCRIPT: THỰC HIỆN ACGS
 * File: layout/Thuc_hien_ACGS/script.js
 * ==========================================================================
 */

/**
 * 1. Hàm nạp component BANNER nhận props từ màn hình
 */
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
            if (homeIcon) {
                const iconsLib = typeof VNCG_ICONS !== "undefined" ? VNCG_ICONS : (window.VNCG_ICONS || {});
                homeIcon.innerHTML = iconsLib.home || "";
                breadcrumb.appendChild(homeIcon);
            }

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
            let svg = props.iconSvg;
            if (!svg && props.iconType) {
                const iconKey = props.iconType || "chart";
                const iconsLib = typeof VNCG_ICONS !== "undefined" ? VNCG_ICONS : (window.VNCG_ICONS || {});
                svg = (iconsLib.get ? iconsLib.get(iconKey, "acgs-card-icon") : iconsLib[iconKey]) || "";
            }
            if (svg) iconWrapper.innerHTML = svg;
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
 * 4. Hàm nạp khối TÌNH TRẠNG THỰC HIỆN CÂU HỎI (kết hợp 2 soft stat-card & stacked bar)
 */
async function renderQuestionStatus(target, props = {}) {
    const container = typeof target === 'string' ? document.querySelector(target) : target;
    if (!container) return;

    const {
        title = "TÌNH TRẠNG THỰC HIỆN CÂU HỎI",
        totalQuestions = 193,
        items = []
    } = props;

    const card = document.createElement("div");
    card.className = "question-status-card";

    // Header
    const header = document.createElement("div");
    header.className = "question-status-header";
    header.innerHTML = `
        <h3 class="question-status-title">${title}</h3>
        <p class="question-status-subtitle">Tổng số câu hỏi: <b>${totalQuestions}</b></p>
    `;
    card.appendChild(header);

    // Khung lưới 2 cột chứa 2 soft stat-cards
    const grid = document.createElement("div");
    grid.className = "question-status-cards-grid";
    card.appendChild(grid);

    for (const item of items) {
        if (typeof renderStatCard === "function") {
            await renderStatCard(grid, item);
        }
    }

    // Thanh phân bổ kép & chú thích (stacked progress bar)
    const progressWrap = document.createElement("div");
    progressWrap.className = "question-status-progress-wrap";

    const greenItem = items[0] || { percent: 76, title: "Đáp ứng toàn bộ" };
    const orangeItem = items[1] || { percent: 24, title: "Chưa đáp ứng đầy đủ hoặc đáp ứng 1 phần" };

    progressWrap.innerHTML = `
        <div class="question-status-stacked-bar">
            <div class="stacked-bar-segment stacked-bar-segment--green" style="width: ${greenItem.percent}%;"></div>
            <div class="stacked-bar-segment stacked-bar-segment--orange" style="width: ${orangeItem.percent}%;"></div>
        </div>
        <div class="question-status-legend">
            <div class="legend-item legend-item--left">
                <span class="legend-percent legend-percent--green">${greenItem.percent}%</span>
                <span class="legend-label">${greenItem.title}</span>
            </div>
            <div class="legend-item legend-item--right">
                <span class="legend-percent legend-percent--orange">${orangeItem.percent}%</span>
                <span class="legend-label">${orangeItem.title}</span>
            </div>
        </div>
    `;
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
    await renderACGSCard("#acgs-cards-container", {
        bgImage: "../../assets/Image/ACGS_Card1.png",
        bgAlt: "Thực hiện ACGS",
        title: "Thực hiện ACGS",
        description: "Đánh giá mức độ đáp ứng các tiêu chí quản trị công ty của ASEAN",
        link: "#",
        customClass: "acgs-card-primary",
        iconType: "chart",
        iconColor: "var(--color-white)"
    });

    // 3. Card 2: Thực hiện VNCG Code
    await renderACGSCard("#acgs-cards-container", {
        bgImage: "../../assets/Image/ACGS_Card2.png",
        bgAlt: "Thực hiện VNCG Code",
        title: "Thực hiện VNCG Code",
        description: "Đánh giá mức độ tuân thủ các thông lệ quản trị Việt Nam",
        link: "#",
        customClass: "acgs-card-light",
        iconType: "book",
        titleColor: "var(--color-primary)",
        descColor: "var(--color-text-secondary)",
        iconColor: "var(--color-primary)"
    });

    // 4. Tiêu đề đề mục: TỔNG QUAN
    renderSectionTitle("#overview-title", {
        title: "TỔNG QUAN",
        description: "Tổng quan kết quả tự đánh giá mức độ đáp ứng các tiêu chí ACGS."
    });

    // Lấy dữ liệu tổng hợp từ Mock_Data (SUMARY CARD.xlsx Sheet1)
    const summary = (typeof acgsSummaryData !== "undefined" ? acgsSummaryData : window.acgsSummaryData) || {};
    const overview = summary.overview || {};
    const qStatus = summary.questionStatus || {};
    const catScores = summary.categoryScores || [];

    // 5. 4 Stat Cards: Điểm & Level (Hình 1)
    if (typeof renderStatCards === "function") {
        await renderStatCards("#stat-cards-overview", [
            {
                theme: "red",
                iconType: "trophy",
                title: "TỔNG ĐIỂM ĐẠT ĐƯỢC",
                value: String(overview.totalScore || 143),
                suffix: `/ ${overview.maxScore || 209} điểm`,
                note: "Điểm đạt được trên tổng điểm tối đa"
            },
            {
                theme: "green",
                iconType: "target",
                title: "TỶ LỆ ĐẠT ĐIỂM",
                value: `${overview.percentScore || 68}%`,
                progress: overview.percentScore || 68
            },
            {
                theme: "purple",
                iconType: "level",
                title: "LEVEL 1",
                value: String(overview.level1?.score || 131),
                suffix: `/ ${overview.level1?.maxScore || 179} điểm`,
                progress: overview.level1?.percent || 73,
                progressLabel: `Đạt <b>${overview.level1?.percent || 73}%</b>`
            },
            {
                theme: "orange",
                iconType: "level",
                title: "LEVEL 2",
                value: String(overview.level2?.score || 12),
                suffix: `/ ${overview.level2?.maxScore || 30} điểm`,
                progress: overview.level2?.percent || 40,
                progressLabel: `Đạt <b>${overview.level2?.percent || 40}%</b>`
            }
        ]);
    }

    // 6. Cột trái: Tình trạng thực hiện câu hỏi
    await renderQuestionStatus("#question-status-container", {
        title: "TÌNH TRẠNG THỰC HIỆN CÂU HỎI",
        totalQuestions: qStatus.totalQuestions || 193,
        items: [
            {
                variant: "soft-green",
                iconType: "check",
                title: "Đáp ứng toàn bộ",
                value: String(qStatus.completed?.count || 146),
                suffix: "câu hỏi",
                subValue: `${qStatus.completed?.percent || 76}%`,
                percent: qStatus.completed?.percent || 76
            },
            {
                variant: "soft-orange",
                iconType: "clock",
                title: "Chưa đáp ứng đầy đủ hoặc đáp ứng 1 phần",
                value: String(qStatus.pending?.count || 47),
                suffix: "câu hỏi",
                subValue: `${qStatus.pending?.percent || 24}%`,
                percent: qStatus.pending?.percent || 24
            }
        ]
    });

    // 7. Cột phải: Điểm theo nhóm tiêu chí (Hình 2)
    if (typeof renderCategoryProgress === "function") {
        await renderCategoryProgress("#category-progress-container", {
            title: "ĐIỂM THEO NHÓM TIÊU CHÍ",
            items: catScores.length > 0 ? catScores : [
                {
                    badge: "A",
                    name: "Nhóm A - Quyền cổ đông",
                    score: 29,
                    maxScore: 38,
                    percent: 76
                },
                {
                    badge: "B",
                    name: "Nhóm B - Vai trò của các bên có quyền lợi liên quan",
                    score: 23,
                    maxScore: 25,
                    percent: 92
                },
                {
                    badge: "C",
                    name: "Nhóm C - Công bố thông tin và Minh bạch",
                    score: 27,
                    maxScore: 45,
                    percent: 60
                },
                {
                    badge: "D",
                    name: "Nhóm D - Trách nhiệm của HĐQT",
                    score: 52,
                    maxScore: 71,
                    percent: 73
                }
            ]
        });
    }

    // 8. Tiêu đề đề mục: CHI TIẾT
    await renderSectionTitle("#detail-title", {
        title: "CHI TIẾT",
        description: "Bảng chi tiết kết quả tự đánh giá mức độ đáp ứng các tiêu chí ACGS."
    });

    // 10. Render component CriteriaAccordion (Bảng 3 cấp)
    let criteriaController = null;
    const initialData = (typeof acgsLevel1Data !== "undefined" ? acgsLevel1Data : (window.acgsLevel1Data || window.acgsDetailData)) || [];
    if (typeof renderCriteriaAccordion === "function") {
        criteriaController = await renderCriteriaAccordion("#criteria-accordion-container", {
            columnMode: "acgs",
            data: initialData,
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

            const targetData = level === "2"
                ? ((typeof acgsLevel2Data !== "undefined" ? acgsLevel2Data : window.acgsLevel2Data) || [])
                : ((typeof acgsLevel1Data !== "undefined" ? acgsLevel1Data : window.acgsLevel1Data) || []);

            if (criteriaController && typeof criteriaController.setData === "function") {
                criteriaController.setData(targetData);
            }
        });
    });

    // 13. Xử lý Dropdown năm báo cáo
    const yearDropdown = document.querySelector("#year-dropdown");
    const selectedYearEl = document.querySelector("#selected-year");
    if (yearDropdown && selectedYearEl) {
        const arrowWrap = yearDropdown.querySelector(".detail-year-arrow-wrap");
        if (arrowWrap && !arrowWrap.querySelector("svg")) {
            arrowWrap.innerHTML = window.VNCG_ICONS?.get ? window.VNCG_ICONS.get("chevronDown", "detail-year-arrow") : (window.VNCG_ICONS?.chevronDown || "");
        }
        yearDropdown.addEventListener("click", () => {
            yearDropdown.classList.toggle("is-open");
            const currentYear = selectedYearEl.textContent.trim();
            selectedYearEl.textContent = currentYear === "2026" ? "2025" : "2026";
        });
    }
});