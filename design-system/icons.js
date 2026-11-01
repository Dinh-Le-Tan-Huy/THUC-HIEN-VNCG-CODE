/**
 * ==========================================================================
 * DESIGN SYSTEM - ICONS
 * File: design-system/icons.js
 * Quản lý kho biểu tượng SVG dùng chung toàn dự án
 * ==========================================================================
 */

const VNCG_ICONS = {
    // 1. Icon Cúp vàng / đỏ (Tổng điểm đạt được)
    trophy: `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v2a4 4 0 0 0 3.5 3.96A6.51 6.51 0 0 0 10.5 17.5v2.5H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-2.5v-2.5a6.51 6.51 0 0 0 5-3.54A4 4 0 0 0 22 9V7a3 3 0 0 0-3-3zM5 10a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h1v3.88c0 .04 0 .08.02.12H5zm14-2a2 2 0 0 1-2 2h-.02V6H19a1 1 0 0 1 1 1v1z"/>
        </svg>
    `,

    // 2. Icon Bia ngắm / Bullseye (Tỷ lệ đạt điểm)
    target: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"/>
            <circle cx="12" cy="12" r="5"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
    `,

    // 3. Icon Các tầng xếp chồng (Level 1, Level 2)
    level: `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2.5 7.5L12 13L21.5 7.5L12 2Z"/>
            <path d="M2.5 11.5L12 17L21.5 11.5L20 10.6L12 15.2L4 10.6L2.5 11.5Z"/>
            <path d="M2.5 15.5L12 21L21.5 15.5L20 14.6L12 19.2L4 14.6L2.5 15.5Z"/>
        </svg>
    `,

    // 4. Icon Dấu tích xanh (Đáp ứng toàn bộ)
    check: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    `,

    // 5. Icon Đồng hồ cát / Đang chờ (Chưa đáp ứng)
    clock: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"/>
            <polyline points="12 7 12 12 15 15"/>
        </svg>
    `,

    // 6. Icon Dấu chấm than (Chưa tuân thủ)
    alert: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="6.5" x2="12" y2="13.5"></line>
            <line x1="12" y1="17.5" x2="12.01" y2="17.5"></line>
        </svg>
    `,

    // 7. Icon Dấu gạch ngang (Không áp dụng)
    minus: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="12" x2="17" y2="12"></line>
        </svg>
    `,

    // 8. Icon Tìm kiếm
    search: `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    `,

    // 9. Icon Mũi tên chỉ xuống (Accordion / Dropdown)
    chevronDown: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    `,

    // 10. Icon Home (Breadcrumb)
    home: `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
    `,

    // 11. Icon Biểu đồ cột (ACGS Card)
    chart: `
        <svg viewBox="0 0 32 32" fill="currentColor">
            <rect x="4" y="18" width="5.5" height="10" rx="1.5" />
            <rect x="13.2" y="11" width="5.5" height="17" rx="1.5" />
            <rect x="22.5" y="4" width="5.5" height="24" rx="1.5" />
        </svg>
    `,

    // 12. Icon Cuốn sách / Quy chuẩn (VNCG Code Card)
    book: `
        <svg viewBox="0 0 28 28" fill="currentColor">
            <path d="M4 6.5C4 5.12 5.12 4 6.5 4H12c.55 0 1 .45 1 1v15.2c0 .35-.18.67-.48.85-.3.18-.68.19-.99.03-1.4-.73-3.12-.9-4.82-.48-.68.17-1.34.45-1.93.84-.48.32-.78.85-.78 1.42V6.5z"/>
            <path d="M15 5c0-.55.45-1 1-1h5.5c1.38 0 2.5 1.12 2.5 2.5v16.36c0-.57-.3-1.1-.78-1.42-.59-.39-1.25-.67-1.93-.84-1.7-.42-3.42-.25-4.82.48-.31.16-.69.15-.99-.03-.3-.18-.48-.5-.48-.85V5z"/>
            <line x1="17" y1="9" x2="21" y2="9" stroke="#eaf4ff" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="17" y1="13" x2="21" y2="13" stroke="#eaf4ff" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    `,

    /**
     * Helper lấy mã SVG kèm class tùy biến
     * @param {string} name - Tên icon ('trophy', 'target', 'chevronDown'...)
     * @param {string} [customClass] - Tên class CSS thêm vào thẻ svg
     * @returns {string}
     */
    get(name, customClass = "") {
        const svg = this[name];
        if (!svg || typeof svg !== "string") return "";
        if (!customClass) return svg.trim();
        return svg.trim().replace("<svg", `<svg class="${customClass}"`);
    }
};

// Gán toàn cục cho browser
if (typeof window !== "undefined") {
    window.VNCG_ICONS = VNCG_ICONS;
}
