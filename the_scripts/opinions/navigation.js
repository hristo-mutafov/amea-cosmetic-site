const seeMoreButton = document.querySelector('.opinions .see-more');

if (seeMoreButton) {
    seeMoreButton.addEventListener('click', function () {
        window.location.href = '/opinions';
    });
}
