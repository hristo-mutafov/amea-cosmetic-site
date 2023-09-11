const icon = document.querySelector('#blog.blog #togglebar-icon');
const iconShort = document.querySelector('#blog.blog #togglebar-icon-short')
const aside = document.querySelector('#blog.blog #aside')
const shortAside = document.querySelector('#blog.blog #aside-short')
const mainSection = document.querySelector('#blog.blog')

icon.addEventListener('click', () => {
    aside.style.display = 'none';
    shortAside.style.display = 'block'
    mainSection.style.padding = '0px 80px';
    mainSection.style.gridTemplateColumns = '100%';
    // mainSection.style.gridTemplateColumns = '14% 76%';
})

iconShort.addEventListener('click', () => {
    mainSection.style.padding = '0px';
    aside.style.display = 'block'
    shortAside.style.display = 'none'
    mainSection.style.gridTemplateColumns = '30% 68%';
})