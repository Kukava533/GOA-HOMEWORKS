document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products/1')
        .then(response => response.json())
        .then(data => {
            // Log the data in the console
            console.log(data);

            // Extract product details
            const product = data;
            const productDetailsDiv = document.getElementById('product-details');

            // Create the HTML content for the product
            const productHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p class="price">$${product.price}</p>
            `;

            // Inject the HTML content into the page
            productDetailsDiv.innerHTML = productHTML;
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
});
