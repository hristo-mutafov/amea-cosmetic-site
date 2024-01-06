# Nataliya Nenchova's Website

## Blog Page

### Adding New Blog Articles

1. Use the template in the `blog` folder for creating an article.
2. Copy the entire HTML file, remove line breaks, and escape double quotes.
3. Add the new article to the `.json` file, following the convention:

    ```json
    [
        {
            "id": number,
            "endpoint": "string",
            "content": "string"
        }
    ]
    ```

    - `id`: Id of the article.
    - `endpoint`: The querystring used for identification the page.
    - `content`: Transformed HTML.

4. In the blog/index.html add the new article title to navbar(`<ul role=list>`) and attach the article endpoint querystring. Example:

    ```html
    <li>
        <p
            onClick="navigateToArticle(event)"
            id="master-class-camouflage-sofia-26-8-23"
        >
            <Article Name>
        </p>
    </li>
    ```

    - `id`: The querystring specified in the articles.json file (endpoint property).
    - `<Article Name>`: The name of the article in a human-readable format.

## Predefined styling classes in blog page:

-   `.heading`: The main heading.
-   `.text`: The main text.
-   `.blog-main`: The main container.
-   `.image-collection`: Container that will contain images without any classes.
-   `.cover-image`: Container that will contain the cover image (1 image only).

## Predefined styling classes in each of the separate procedure page:

```html
<div class="no-image container">
    <h2 class="heading">Lorem ipsum dolor sit.</h2>
    <p class="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nobis est
        dolore sint! Totam, cum! Maiores quisquam cumque modi suscipit?
    </p>
</div>
```

-   This is standard text wrapper without floating image.

```html
<div class="image-container container">
    <img
        class="image right"
        src="../../images/..."
        alt="Lorem, ipsum dolor."
        loading="lazy"
    />
    <div class="text-container">
        <h2 class="heading">Lorem ipsum dolor sit.</h2>
        <p class="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            architecto non, alias eaque molestias odit sequi veniam praesentium
            quaerat dicta.
        </p>
    </div>
</div>
```

-   This is standard text wrapper with floating image. The placement of the photo depends on the image class:

```html
<img class="image right" ... />
```

or

```html
<img class="image left" ... />
```

-   When we don't want floating images we can place image wrapper like this one:

```html
<div class="no-image container">
    <h2 class="heading">Lorem ipsum dolor sit.</h2>
    <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est
        tenetur, ullam aperiam ea deserunt corrupti quasi nostrum! Cum, amet?
    </p>
    <div class="only-image-container">
        <img
            class="image"
            src="/images/procedures/..."
            alt="Lorem ipsum dolor sit."
            loading="lazy"
        />
        <img
            class="image"
            src="/images/procedures/..."
            alt="Lorem ipsum dolor sit."
            loading="lazy"
        />
        ...
    </div>
</div>
```

-   Structures like unordered list, nested text, nested images can be achieved this way:

```html
<div class="no-image container">
    <h2 class="heading">Lorem ipsum dolor sit.</h2>
    <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est
        tenetur, ullam aperiam ea deserunt corrupti quasi nostrum! Cum, amet?
    </p>
    <ul>
        <li class="text">Lorem, ipsum dolor.</li>
        <li class="text">
            Lorem ipsum dolor sit.
            <p class="text">Additional Description...</p>
        </li>
        <div class="only-image-container">
            <img
                class="image"
                src="/images/procedures/..."
                alt="Lorem ipsum dolor sit."
                loading="lazy"
            />
            ...
        </div>
    </ul>
</div>
```

-   There is a secondary heading for nested articles:

```html
<div class="no-image container">
    <h2 class="heading">Lorem ipsum dolor sit.</h2>
    <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est
        tenetur, ullam aperiam ea deserunt corrupti quasi nostrum! Cum, amet?
    </p>

    <h3 class="secondary-heading">Lorem ipsum dolor sit.</h3>
    <ul>
        <li class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            dolores.
        </li>
        <li class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            dolores.
        </li>
    </ul>

    <h3 class="secondary-heading">Lorem ipsum dolor sit.</h3>
    <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        dolores.
    </p>
</div>
```

-   There is a swiper main structure:

```html
<div class="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img
                src="../../images/procedures/..."
                alt="Lorem em ti."
                loading="lazy"
            />
        </div>
        ...
    </div>
    <div class="swiper-pagination"></div>
</div>
```

-   There is a swiper nested ul structure:

```html
<div class="swiper" id="nested-in-ul">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img
                src="../../images/procedures/..."
                alt="Lorem ipsum dolor sit."
                loading="lazy"
            />
        </div>
        <div class="swiper-slide">
            <img
                src="../../images/procedures/..."
                alt="Lorem ipsum dolor sit."
                loading="lazy"
            />
        </div>
        <div class="swiper-slide">
            <img
                src="../../images/procedures/..."
                alt="Lorem ipsum dolor sit."
                loading="lazy"
            />
        </div>
    </div>
    <div class="swiper-pagination"></div>
</div>
```

## Links:

-   [Remove line breaks](https://www.textfixer.com/tools/remove-line-breaks.php)
-   [Escape double quotes](https://jsonformatter.org/json-escape)
-   [Compressing images](https://resizing.app/features/compress-jpeg/)
