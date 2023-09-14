// Select all images with lazy loading
const lazyImages = document.querySelectorAll('[loading="lazy"]');
let a = 0
// Check if an image is loaded, and if not, replace it with a loader
lazyImages.forEach((img) => {
    // Create a loader element (e.g., a div with a loading spinner)
    const loader = document.createElement('div');
    loader.className = 'loader'; // Apply loader styles via CSS

    // Hide the original image
    img.style.display = 'none';

    // Insert the loader before the image
    img.parentNode.insertBefore(loader, img);


    img.addEventListener('load', (e) => {
        console.log('nere');
        a ++;
        console.log(a);
        // e.currentTarget.style.display = 'block';
        // const loader = e.currentTarget.previousElementSibling || e.currentTarget.nextElementSibling;

        // loader.style.display = 'none'; // Hide the loader
        // image.style.display = 'block'; // Show the image
    })
});
