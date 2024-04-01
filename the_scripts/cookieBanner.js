const LOCAL_STORAGE_KEY = 'bannerAccepted';
const BANNER_TEXT =
    'Този сайт използва "бисквитки" и други инструменти, за подобряването на потребителското изживяване.';
const BUTTON_TEXT = 'Приеми всички';

if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    const body = document.querySelector('body');

    const cookieBanner = createElement('div', null, 'cookie-banner');
    const text = createElement('p', BANNER_TEXT);
    const acceptButton = createElement('button', BUTTON_TEXT);

    appendChild(cookieBanner, text);
    appendChild(cookieBanner, acceptButton);
    appendChild(body, cookieBanner);

    acceptButton.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
        // @ts-ignore
        gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            analytics_storage: 'granted',
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
        localStorage.setItem('ad_storage', 'granted');
        localStorage.setItem('ad_user_data', 'granted');
        localStorage.setItem('ad_personalization', 'granted');
        localStorage.setItem('analytics_storage', 'granted');
    });
}

function createElement(element, textContent, classList) {
    const el = document.createElement(element);
    if (textContent) {
        el.textContent = textContent;
    }

    if (classList) {
        el.classList.add(classList);
    }

    return el;
}

function appendChild(el1, el2) {
    el1.appendChild(el2);
}
