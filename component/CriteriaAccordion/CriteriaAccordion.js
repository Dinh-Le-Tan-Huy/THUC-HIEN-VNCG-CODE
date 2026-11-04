/**
 * ==========================================================================
 * COMPONENT LOGIC: CRITERIA ACCORDION (BẢNG TIÊU CHÍ 3 CẤP TÁI SỬ DỤNG)
 * File: component/CriteriaAccordion/CriteriaAccordion.js
 * ==========================================================================
 *
 * Cấu trúc 3 cấp linh hoạt:
 * - Cấp 1: Group Header (A, B, C... hoặc PHẦN 1, PHẦN 2...)
 * - Cấp 1.5 (Tùy chọn): Principle Header (NGUYÊN TẮC 1, 2...) nếu dùng cho HĐQT
 * - Cấp 2: SubGroup Header (A.1, A.2... hoặc 1.1, 1.2...)
 * - Cấp 3: CriteriaTable (Bảng chi tiết tiêu chí)
 *
 * Hỗ trợ 2 chế độ cột chính:
 * 1. columnMode: 'acgs' (7 cột: STT, Nội dung, Điểm tối đa, YES/NO, Điểm tự chấm, Thuyết minh, Bằng chứng)
 * 2. columnMode: 'hdqt' (5 cột: STT, Nội dung, Trạng thái, Giải thích, Bằng chứng)
 */

/**
 * Hàm render chính cho toàn bộ CriteriaAccordion
 * @param {string|HTMLElement} target - Selector hoặc HTMLElement container
 * @param {Object} props - Dữ liệu truyền từ screen
 * @param {string} [props.columnMode='acgs'] - 'acgs' | 'hdqt'
 * @param {Array<Object>} props.data - Cây dữ liệu 3 cấp
 * @param {boolean} [props.defaultExpandFirst=true] - Tự động mở nhóm đầu tiên
 * @param {Function} [props.onEvidenceClick] - Callback khi click vào link bằng chứng
 * @returns {Object} Đối tượng điều khiển (controller) với các phương thức filter, expandAll, collapseAll
 */
async function renderCriteriaAccordion(target, props = {}) {
    const container = typeof target === "string" ? document.querySelector(target) : target;
    if (!container) {
        console.error(`[renderCriteriaAccordion] Không tìm thấy phần tử container: "${target}"`);
        return null;
    }

    const {
        columnMode = "acgs",
        data = [],
        defaultExpandFirst = true,
        onEvidenceClick = null
    } = props;

    // Tạo phần tử wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "criteria-accordion-wrapper";

    if (!data || data.length === 0) {
        wrapper.innerHTML = `<div class="criteria-empty">Không có dữ liệu tiêu chí để hiển thị.</div>`;
        container.innerHTML = "";
        container.appendChild(wrapper);
        return null;
    }

    // Render từng group cấp 1
    data.forEach((groupData, index) => {
        const isInitiallyOpen = groupData.isOpen !== undefined ? groupData.isOpen : (defaultExpandFirst && index === 0);
        const groupEl = createGroupElement(groupData, columnMode, {
            isOpen: isInitiallyOpen,
            onEvidenceClick
        });
        wrapper.appendChild(groupEl);
    });

    container.innerHTML = "";
    container.appendChild(wrapper);

    // Controller trả về để trang bên ngoài có thể gọi tìm kiếm, mở/đóng
    const controller = {
        element: wrapper,
        filter: (keyword) => filterCriteria(wrapper, keyword),
        expandAll: () => setAllGroupsState(wrapper, true),
        collapseAll: () => setAllGroupsState(wrapper, false),
        setData: (newData) => {
            renderCriteriaAccordion(container, { ...props, data: newData });
        }
    };

    return controller;
}

/**
 * ==========================================================================
 * CẤP 1: TẠO GROUP ACCORDION (A, B, C hoặc PHẦN 1...)
 * ==========================================================================
 */
function createGroupElement(groupData, columnMode, options = {}) {
    const groupEl = document.createElement("div");
    groupEl.className = `criteria-group ${options.isOpen ? "is-open" : ""}`;
    groupEl.setAttribute("data-group-id", groupData.id || "");

    const badgeText = groupData.badge || `${calculateTotalCriteria(groupData)} tiêu chí`;

    const groupChevronSvg = (typeof VNCG_ICONS !== "undefined" && VNCG_ICONS.get)
        ? VNCG_ICONS.get("chevronDown", "criteria-group-icon")
        : (window.VNCG_ICONS?.get ? window.VNCG_ICONS.get("chevronDown", "criteria-group-icon") : "");

    // Group Header
    const header = document.createElement("div");
    header.className = "criteria-group-header";
    header.innerHTML = `
        <div class="criteria-group-title-wrap">
            ${groupChevronSvg}
            <h3 class="criteria-group-title">${escapeHtml(groupData.title || "")}</h3>
        </div>
        <span class="criteria-group-badge">${escapeHtml(badgeText)}</span>
    `;

    // Content container
    const content = document.createElement("div");
    content.className = "criteria-group-content";

    // Toggle sự kiện
    header.addEventListener("click", () => {
        groupEl.classList.toggle("is-open");
    });

    // Nếu có principles (cấp 1.5 - Dành cho HĐQT)
    if (groupData.principles && groupData.principles.length > 0) {
        groupData.principles.forEach((principleData, pIdx) => {
            const isPrincipleOpen = principleData.isOpen !== undefined ? principleData.isOpen : (pIdx === 0);
            const principleEl = createPrincipleElement(principleData, columnMode, {
                isOpen: isPrincipleOpen,
                onEvidenceClick: options.onEvidenceClick
            });
            content.appendChild(principleEl);
        });
    }
    // Nếu trực tiếp có subGroups (Cấp 2 - Dành cho ACGS chuẩn)
    else if (groupData.subGroups && groupData.subGroups.length > 0) {
        groupData.subGroups.forEach((subGroupData, sIdx) => {
            const isSubOpen = subGroupData.isOpen !== undefined ? subGroupData.isOpen : (sIdx === 0);
            const subGroupEl = createSubGroupElement(subGroupData, columnMode, {
                isOpen: isSubOpen,
                onEvidenceClick: options.onEvidenceClick
            });
            content.appendChild(subGroupEl);
        });
    }

    groupEl.appendChild(header);
    groupEl.appendChild(content);
    return groupEl;
}

/**
 * ==========================================================================
 * CẤP 1.5: PRINCIPLE (NGUYÊN TẮC 1, 2... DÀNH CHO HĐQT)
 * ==========================================================================
 */
function createPrincipleElement(principleData, columnMode, options = {}) {
    const principleEl = document.createElement("div");
    principleEl.className = `criteria-principle ${options.isOpen ? "is-open" : ""}`;

    const badgeText = principleData.badge || `${calculateTotalCriteria(principleData)} tiêu chí`;

    const header = document.createElement("div");
    header.className = "criteria-principle-header";
    header.innerHTML = `
        <span class="criteria-principle-title">${escapeHtml(principleData.title || "")}</span>
        <span class="criteria-principle-badge">${escapeHtml(badgeText)}</span>
    `;

    const content = document.createElement("div");
    content.className = "criteria-principle-content";

    header.addEventListener("click", () => {
        principleEl.classList.toggle("is-open");
    });

    if (principleData.subGroups && principleData.subGroups.length > 0) {
        principleData.subGroups.forEach((subGroupData, sIdx) => {
            const isSubOpen = subGroupData.isOpen !== undefined ? subGroupData.isOpen : (sIdx === 0);
            const subGroupEl = createSubGroupElement(subGroupData, columnMode, {
                isOpen: isSubOpen,
                onEvidenceClick: options.onEvidenceClick
            });
            content.appendChild(subGroupEl);
        });
    }

    principleEl.appendChild(header);
    principleEl.appendChild(content);
    return principleEl;
}

/**
 * ==========================================================================
 * CẤP 2: SUBGROUP (A.1, A.2 hoặc 1.1, 1.2...)
 * ==========================================================================
 */
function createSubGroupElement(subGroupData, columnMode, options = {}) {
    const subGroupEl = document.createElement("div");
    subGroupEl.className = `criteria-subgroup ${options.isOpen ? "is-open" : ""}`;
    subGroupEl.setAttribute("data-subgroup-id", subGroupData.id || subGroupData.code || "");

    const code = subGroupData.code || "";
    const title = subGroupData.title || "";

    const subGroupChevronSvg = (typeof VNCG_ICONS !== "undefined" && VNCG_ICONS.get)
        ? VNCG_ICONS.get("chevronDown", "criteria-subgroup-icon")
        : (window.VNCG_ICONS?.get ? window.VNCG_ICONS.get("chevronDown", "criteria-subgroup-icon") : "");

    const header = document.createElement("div");
    header.className = "criteria-subgroup-header";
    header.innerHTML = `
        <button type="button" class="criteria-subgroup-btn" aria-label="Toggle ${escapeHtml(code)}">
            <span>${escapeHtml(code)}</span>
            ${subGroupChevronSvg}
        </button>
        <span class="criteria-subgroup-title">${escapeHtml(title)}</span>
    `;

    const content = document.createElement("div");
    content.className = "criteria-subgroup-content";

    // Render bảng tiêu chí Cấp 3 bên trong
    const tableEl = createCriteriaTableElement(subGroupData.criteria || [], columnMode, options);
    content.appendChild(tableEl);

    header.addEventListener("click", () => {
        subGroupEl.classList.toggle("is-open");
    });

    subGroupEl.appendChild(header);
    subGroupEl.appendChild(content);
    return subGroupEl;
}

/**
 * ==========================================================================
 * CẤP 3: TABLE BẢNG TIÊU CHÍ (ACGS: 7 CỘT, HĐQT: 5 CỘT)
 * ==========================================================================
 */
function createCriteriaTableElement(criteriaList, columnMode, options = {}) {
    const table = document.createElement("table");
    table.className = "criteria-table";

    // 1. Render THEAD theo columnMode
    const thead = document.createElement("thead");
    if (columnMode === "hdqt") {
        thead.innerHTML = `
            <tr>
                <th style="width: 80px;">STT</th>
                <th>NỘI DUNG TIÊU CHÍ</th>
                <th style="width: 130px;">TRẠNG THÁI</th>
                <th>GIẢI THÍCH</th>
                <th style="width: 220px;">BẰNG CHỨNG</th>
            </tr>
        `;
    } else {
        // Mặc định: 'acgs' (7 cột theo hình)
        thead.innerHTML = `
            <tr>
                <th style="width: 75px;">STT</th>
                <th>NỘI DUNG TIÊU CHÍ</th>
                <th style="width: 100px;">ĐIỂM TỐI ĐA</th>
                <th style="width: 110px;">YES/NO</th>
                <th style="width: 100px;">ĐIỂM TỰ CHẤM</th>
                <th>THUYẾT MINH</th>
                <th style="width: 200px;">BẰNG CHỨNG</th>
            </tr>
        `;
    }
    table.appendChild(thead);

    // 2. Render TBODY
    const tbody = document.createElement("tbody");

    if (!criteriaList || criteriaList.length === 0) {
        const colSpan = columnMode === "hdqt" ? 5 : 7;
        tbody.innerHTML = `<tr><td colspan="${colSpan}" style="text-align: center; color: var(--color-text-placeholder); padding: 20px;">Không có tiêu chí chi tiết</td></tr>`;
        table.appendChild(tbody);
        return table;
    }

    criteriaList.forEach(item => {
        const tr = document.createElement("tr");
        tr.setAttribute("data-criteria-stt", item.stt || "");

        if (columnMode === "hdqt") {
            tr.innerHTML = renderHdqtRowHtml(item);
        } else {
            tr.innerHTML = renderAcgsRowHtml(item);
        }

        // Bắt sự kiện click link bằng chứng
        const evidenceLinks = tr.querySelectorAll(".criteria-evidence-link");
        evidenceLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const docName = link.getAttribute("data-doc") || link.textContent.trim();
                const docUrl = link.getAttribute("data-url") || "#";
                if (typeof options.onEvidenceClick === "function") {
                    options.onEvidenceClick({ title: docName, url: docUrl, item });
                } else {
                    console.log("[CriteriaAccordion] Xem bằng chứng:", docName, docUrl);
                }
            });
        });

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table;
}

/**
 * Render HTML cho một dòng bảng ACGS (7 cột)
 */
function renderAcgsRowHtml(item) {
    const result = String(item.result || "").toUpperCase().trim();
    const isYes = result === "YES" || result === "Y";
    const isNo  = result === "NO"  || result === "N";

    // YES → pill xanh | NO → pill đỏ | Còn lại (trống, N/A...) → ô trống
    let badgeHtml = "";
    if (isYes) {
        badgeHtml = `<span class="criteria-badge-yn criteria-badge-yn--yes">YES</span>`;
    } else if (isNo) {
        badgeHtml = `<span class="criteria-badge-yn criteria-badge-yn--no">NO</span>`;
    }
    // else: để trống — không render gì
    // Thuyết minh
    let explanationHtml = "";
    if (item.explanation) {
        if (typeof item.explanation === "string") {
            explanationHtml = `<div class="criteria-explanation-item">${escapeHtml(item.explanation)}</div>`;
        } else {
            const { highlight, items = [] } = item.explanation;
            if (highlight) {
                explanationHtml += `<div class="criteria-highlight-result">${escapeHtml(highlight)}</div>`;
            }
            if (items && items.length > 0) {
                explanationHtml += `<ul class="criteria-explanation-list">`;
                items.forEach(exp => {
                    explanationHtml += `<li class="criteria-explanation-item">${escapeHtml(exp)}</li>`;
                });
                explanationHtml += `</ul>`;
            }
        }
    }

    // Bằng chứng
    let evidencesHtml = "";
    if (item.evidences && item.evidences.length > 0) {
        evidencesHtml = `<ul class="criteria-evidence-list">`;
        item.evidences.forEach(ev => {
            const title = typeof ev === "string" ? ev : (ev.title || "");
            const url = typeof ev === "string" ? "#" : (ev.url || "#");
            evidencesHtml += `
                <li class="criteria-evidence-item">
                    <span class="criteria-evidence-bullet">•</span>
                    <a href="${escapeHtml(url)}" class="criteria-evidence-link" data-doc="${escapeHtml(title)}" data-url="${escapeHtml(url)}">${escapeHtml(title)}</a>
                </li>
            `;
        });
        evidencesHtml += `</ul>`;
    }

    return `
        <td class="criteria-col-stt">${escapeHtml(item.stt || "")}</td>
        <td class="criteria-col-content">${escapeHtml(item.content || "")}</td>
        <td class="criteria-col-score">${item.maxScore !== undefined && item.maxScore !== 0 ? item.maxScore : (item.maxScore === 0 ? "0" : "")}</td>
        <td class="criteria-col-status">${badgeHtml}</td>
        <td class="criteria-col-score">${item.selfScore !== undefined ? item.selfScore : ""}</td>
        <td class="criteria-col-explanation">${explanationHtml}</td>
        <td class="criteria-col-evidence">${evidencesHtml}</td>
    `;
}

/**
 * Render HTML cho một dòng bảng HĐQT (5 cột)
 */
function renderHdqtRowHtml(item) {
    const rawStatus = item.status || (item.isCompliant ? "TUÂN THỦ" : "KHÔNG TUÂN THỦ");
    const statusText = String(rawStatus).trim();
    const normalized = statusText.toUpperCase();

    let badgeClass = "criteria-badge--compliant";

    if (normalized === "TUÂN THỦ 1 PHẦN" || normalized === "TUÂN THỦ MỘT PHẦN") {
        badgeClass = "criteria-badge--partial";
    } else if (normalized === "KHÔNG TUÂN THỦ" || normalized === "CHƯA TUÂN THỦ") {
        badgeClass = "criteria-badge--non-compliant";
    } else if (normalized === "KHÔNG ÁP DỤNG" || normalized === "N/A") {
        badgeClass = "criteria-badge--na";
    } else if (normalized === "TUÂN THỦ") {
        badgeClass = "criteria-badge--compliant";
    }

    // Giải thích
    let explanationHtml = "";
    if (item.explanation) {
        if (typeof item.explanation === "string") {
            explanationHtml = `<div class="criteria-explanation-item" style="padding-left: 0;">${escapeHtml(item.explanation)}</div>`;
        } else if (Array.isArray(item.explanation)) {
            explanationHtml = `<ul class="criteria-explanation-list">`;
            item.explanation.forEach(exp => {
                explanationHtml += `<li class="criteria-explanation-item">${escapeHtml(exp)}</li>`;
            });
            explanationHtml += `</ul>`;
        }
    }

    // Bằng chứng
    let evidencesHtml = "";
    if (item.evidences && item.evidences.length > 0) {
        evidencesHtml = `<ul class="criteria-evidence-list">`;
        item.evidences.forEach(ev => {
            const title = typeof ev === "string" ? ev : (ev.title || "");
            const url = typeof ev === "string" ? "#" : (ev.url || "#");
            evidencesHtml += `
                <li class="criteria-evidence-item">
                    <span class="criteria-evidence-bullet">•</span>
                    <a href="${escapeHtml(url)}" class="criteria-evidence-link" data-doc="${escapeHtml(title)}" data-url="${escapeHtml(url)}">${escapeHtml(title)}</a>
                </li>
            `;
        });
        evidencesHtml += `</ul>`;
    }

    return `
        <td class="criteria-col-stt">${escapeHtml(item.stt || "")}</td>
        <td class="criteria-col-content">${escapeHtml(item.content || "")}</td>
        <td class="criteria-col-status">
            <span class="criteria-badge-status ${badgeClass}">${statusText}</span>
        </td>
        <td class="criteria-col-explanation">${explanationHtml}</td>
        <td class="criteria-col-evidence">${evidencesHtml}</td>
    `;
}

/**
 * ==========================================================================
 * UTILITY & FILTER FUNCTIONS
 * ==========================================================================
 */

/**
 * Tính số lượng tiêu chí theo số lượng data ở Cấp 2 (ví dụ: A.1, A.2...)
 */
function calculateTotalCriteria(node) {
    if (node.totalCriteria !== undefined) return node.totalCriteria;
    let count = 0;
    if (node.principles && Array.isArray(node.principles)) {
        node.principles.forEach(p => {
            count += calculateTotalCriteria(p);
        });
    } else if (node.subGroups && Array.isArray(node.subGroups)) {
        // Tính theo số lượng data ở cấp 2 (ví dụ: A.1, A.2, ...)
        count += node.subGroups.length;
    }
    return count;
}

/**
 * Mở hoặc đóng tất cả nhóm
 */
function setAllGroupsState(wrapper, isOpen) {
    const groups = wrapper.querySelectorAll(".criteria-group, .criteria-principle, .criteria-subgroup");
    groups.forEach(el => {
        if (isOpen) {
            el.classList.add("is-open");
        } else {
            el.classList.remove("is-open");
        }
    });
}

/**
 * Tìm kiếm theo từ khóa trong toàn bộ accordion
 */
function filterCriteria(wrapper, keyword) {
    const term = (keyword || "").trim().toLowerCase();
    const rows = wrapper.querySelectorAll(".criteria-table tbody tr");
    const subGroups = wrapper.querySelectorAll(".criteria-subgroup");
    const groups = wrapper.querySelectorAll(".criteria-group");

    if (!term) {
        // Reset hiển thị tất cả
        rows.forEach(r => r.style.display = "");
        subGroups.forEach(s => s.style.display = "");
        groups.forEach(g => g.style.display = "");
        return;
    }

    // 1. Lọc từng dòng
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const isMatch = text.includes(term);
        row.style.display = isMatch ? "" : "none";
    });

    // 2. Ẩn subGroup nếu tất cả row bên trong đều bị ẩn
    subGroups.forEach(sub => {
        const visibleRows = sub.querySelectorAll(".criteria-table tbody tr:not([style*='display: none'])");
        if (visibleRows.length > 0) {
            sub.style.display = "";
            sub.classList.add("is-open"); // Tự động mở để thấy kết quả
        } else {
            sub.style.display = "none";
        }
    });

    // 3. Ẩn group nếu tất cả subgroup bên trong đều bị ẩn
    groups.forEach(grp => {
        const visibleSubs = grp.querySelectorAll(".criteria-subgroup:not([style*='display: none'])");
        if (visibleSubs.length > 0) {
            grp.style.display = "";
            grp.classList.add("is-open"); // Tự động mở group
        } else {
            grp.style.display = "none";
        }
    });
}

/**
 * Thoát các ký tự HTML đặc biệt để tránh XSS
 */
function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
