/**
 * ==========================================================================
 * BANNER COMPONENT LOGIC
 * File: component/Banner/Banner.js
 * ==========================================================================
 * 
 * Hàm loadBannerComponent:
 * - Tải template component/Banner/Banner.html
 * - Nhận props từ màn hình (screen) và gán dữ liệu động
 * - Cho phép tùy biến style và class CSS từ screen
 *
 * @param {string|HTMLElement} target - Selector hoặc element container (ví dụ: '#banner')
 * @param {Object} props - Dữ liệu props truyền vào từ màn hình
 * @param {string} [props.bgImage] - Đường dẫn ảnh nền banner
 * @param {string} [props.bgAlt] - Thuộc tính alt cho ảnh
 * @param {Array<{label: string, url?: string}>} [props.breadcrumbs] - Danh sách breadcrumb
 * @param {string} [props.badgeText] - Nội dung badge tag (nếu có)
 * @param {string} props.title - Tiêu đề chính của banner
 * @param {string} [props.description] - Đoạn văn mô tả (nếu có)
 * @param {string} [props.customClass] - Class CSS tùy biến thêm từ screen
 * @param {Object} [props.customStyle] - Inline styles tùy biến thêm từ screen
 */

async function loadBannerComponent(target, props = {}) {
    const container = typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!container) {
        console.error(`[BannerComponent] Không tìm thấy phần tử container: "${target}"`);
        return;
    }

    try {
        // Tải template HTML của component Banner
        const response = await fetch("../../component/Banner/Banner.html");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const html = await response.text();
        container.innerHTML = html;

        // Áp dụng props và style động từ màn hình
        applyBannerProps(container, props);
    } catch (error) {
        console.error("[BannerComponent] Lỗi khi nạp banner component:", error);
    }
}

/**
 * Gán dữ liệu props vào DOM template của Banner
 */
function applyBannerProps(container, props) {
    const {
        bgImage,
        bgAlt = 'Banner background',
        breadcrumbs = [],
        badgeText,
        title = '',
        description = '',
        customClass = '',
        customStyle = {}
    } = props;

    const bannerSection = container.querySelector('.banner-section');
    const bannerImg = container.querySelector('.banner-img');
    const bannerBreadcrumb = container.querySelector('.banner-breadcrumb');
    const bannerBadge = container.querySelector('.banner-badge');
    const bannerBadgeText = container.querySelector('.badge-text');
    const bannerTitle = container.querySelector('.banner-title');
    const bannerDesc = container.querySelector('.banner-description');

    // 1. Tùy biến style & class từ screen
    if (bannerSection) {
        if (customClass) {
            bannerSection.classList.add(...customClass.split(' ').filter(Boolean));
        }
        if (customStyle && typeof customStyle === 'object') {
            Object.assign(bannerSection.style, customStyle);
        }
    }

    // 2. Ảnh nền
    if (bannerImg) {
        if (bgImage) {
            bannerImg.src = bgImage;
            bannerImg.alt = bgAlt;
            bannerImg.style.display = 'block';
        } else {
            bannerImg.style.display = 'none';
        }
    }

    // 3. Breadcrumbs
    if (bannerBreadcrumb && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
        const homeIcon = bannerBreadcrumb.querySelector('.breadcrumb-home');
        bannerBreadcrumb.innerHTML = '';
        if (homeIcon) {
            const iconsLib = typeof VNCG_ICONS !== "undefined" ? VNCG_ICONS : (window.VNCG_ICONS || {});
            homeIcon.innerHTML = iconsLib.home || "";
            bannerBreadcrumb.appendChild(homeIcon);
        }

        breadcrumbs.forEach((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            // Dấu phân cách ›
            const sep = document.createElement('span');
            sep.className = 'breadcrumb-separator';
            sep.textContent = '›';
            bannerBreadcrumb.appendChild(sep);

            if (isLast || !item.url) {
                const current = document.createElement('span');
                current.className = 'breadcrumb-current';
                current.textContent = item.label;
                bannerBreadcrumb.appendChild(current);
            } else {
                const link = document.createElement('a');
                link.className = 'breadcrumb-link';
                link.href = item.url;
                link.textContent = item.label;
                bannerBreadcrumb.appendChild(link);
            }
        });
    }

    // 4. Tag / Badge
    if (bannerBadge) {
        if (badgeText) {
            bannerBadge.style.display = 'inline-flex';
            if (bannerBadgeText) bannerBadgeText.textContent = badgeText;
        } else {
            bannerBadge.style.display = 'none';
        }
    }

    // 5. Tiêu đề
    if (bannerTitle) {
        bannerTitle.textContent = title;
    }

    // 6. Mô tả
    if (bannerDesc) {
        if (description) {
            bannerDesc.textContent = description;
            bannerDesc.style.display = 'block';
        } else {
            bannerDesc.style.display = 'none';
        }
    }
}

// Gán toàn cục cho browser
if (typeof window !== "undefined") {
    window.loadBannerComponent = loadBannerComponent;
    window.renderBanner = loadBannerComponent;
}
