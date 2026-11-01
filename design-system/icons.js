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

    // 6. Icon Tìm kiếm
    search: `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    `,

    // 7. Icon Mũi tên chỉ xuống (Accordion / Dropdown)
    chevronDown: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    `,

    // 8. Icon Home (Breadcrumb)
    home: `
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
    `
};

// Gán toàn cục cho browser
if (typeof window !== "undefined") {
    window.VNCG_ICONS = VNCG_ICONS;
}
