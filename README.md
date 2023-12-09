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

## Predefined styling classes:

- `.heading`: The main heading.
- `.text`: The main text.
- `.blog-main`: The main container.
- `.image-collection`: Container that will contain images without any classes.
- `.cover-image`: Container that will contain the cover image (1 image only).

## Links:

- [Remove line breaks](https://www.textfixer.com/tools/remove-line-breaks.php)
- [Escape double quotes](https://jsonformatter.org/json-escape)
- [Compressing images](https://resizing.app/features/compress-jpeg/)


