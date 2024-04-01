window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

gtag('consent', 'default', {
    ad_storage: localStorage.getItem('ad_storage') || 'denied',
    ad_user_data: localStorage.getItem('ad_user_data') || 'denied',
    ad_personalization: localStorage.getItem('ad_personalization') || 'denied',
    analytics_storage: localStorage.getItem('analytics_storage') || 'denied',
});
