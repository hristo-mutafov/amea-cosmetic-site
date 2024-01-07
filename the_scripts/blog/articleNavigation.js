/**
 * This file manage the navigation of the articles.
 */

const dateContainer = document.querySelector('#blog.blog .main-text .date');
const mainContainer = document.querySelector('#blog.blog .blog-main');
const buttons = document.querySelectorAll('#blog.blog #aside.aside li p');
const [backArrow, forwardArrow] = Array.from(
    document.querySelectorAll(
        '#blog.blog .main-text .blog-header .nav-arrows i',
    ),
);

/**
 * This method sets the arrow title and
 * enable it.
 */
function setArrowTitle(arrow, title) {
    arrow.title = title.endpoint;
    arrow.style.color = '#1d1d1f';
}

/**
 * This method disable the arrow.
 */
function disableArrow(arrow) {
    arrow.style.color = 'lightgrey';
    arrow.title = '';
}

/**
 * This function is called when the navbar button is clicked
 * or then the next/prev button is clicked.
 *
 * It gets the button id, set it in the queryparameters and
 * then calls `loadArticle` to load the resource.
 */
function navigateToArticle(e, arrow) {
    let articleURL;
    if (arrow) {
        articleURL = e.currentTarget.getAttribute('title');
        if (!articleURL) {
            return;
        }
    } else {
        articleURL = e.currentTarget.getAttribute('id');
    }

    const params = new URLSearchParams(window.location.search);
    params.set('article', articleURL);

    history.pushState({}, '', '?' + params.toString());
    loadArticle();
}

/**
 * This function fetch the data from `articles.json` and load
 * the wanted article.
 *
 * It is called when the navbar button is clicked or when the
 * queryparameters is changed.
 *
 * It works as expected, when there are not queryparameters. In
 * this case load the latest resource.
 *
 */
function loadArticle() {
    const params = new URLSearchParams(window.location.search);
    let articleName = params.get('article');

    const jsonFile = '../../blog/articles.json';

    fetch(jsonFile)
        .then((res) => res.json())
        .then((res) => {
            let foundObject;
            if (articleName) {
                foundObject = res.find((obj) => obj.endpoint === articleName);
            } else {
                foundObject = res.at(-1);
                articleName = foundObject.endpoint;
                highlightButton(articleName);
            }

            /**
             * We get the index to get the next and prev articles
             * and to set them to the next/prev buttons.
             */
            const index = res.indexOf(foundObject);

            res[index - 1]
                ? setArrowTitle(backArrow, res[index - 1])
                : disableArrow(backArrow);
            res[index + 1]
                ? setArrowTitle(forwardArrow, res[index + 1])
                : disableArrow(forwardArrow);

            // Filling the containers.
            mainContainer.innerHTML = foundObject.content;
            dateContainer.textContent = foundObject.date;
        })
        .catch((err) => {
            const spinner = '<div class="loader"></div>';
            mainContainer.innerHTML = spinner;
        });

    /**
     * If its not the initial loading of the page this
     * ensure better performance.
     */

    if (articleName) {
        highlightButton(articleName);
    }
}

/**
 * This function highlight the currently selected navbar button.
 * It works as expected, when there are not queryparameters.
 */
function highlightButton(articleName) {
    buttons.forEach((button) => {
        if (button.id === articleName) {
            /**
             * If we want the selected one to be in different color.
             */
            button.style.color = '#1d1d1f';
            button.innerHTML =
                '<i class="fas fa-caret-right"></i>' + button.textContent;
        } else {
            button.style.color = '#1d1d1f';
            const icon = button.querySelector('i');
            if (icon) {
                button.removeChild(icon);
            }
        }
    });
}

window.addEventListener('popstate', loadArticle);

loadArticle();
