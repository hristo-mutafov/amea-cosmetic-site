const isEnglish = localStorage.getItem('en') === 'true';
const currentPath = window.location.pathname;

if (isEnglish) {
    if (!currentPath.startsWith('/en')) {
        const newPath = '/en' + currentPath;
        window.location.href = newPath;
    }
} else {
    if (currentPath.startsWith('/en')) {
        const newPath = currentPath.replace(/^\/en/, '');
        window.location.href = newPath;
    }
}
