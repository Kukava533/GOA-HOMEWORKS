// Function to fetch products using async/await
async function fetchProducts() {
    try {
      // Await the fetch request and check if the response is OK
      const res = await fetch('https://fakestoreapi.com/products');
  
      // If response is not ok, throw an error
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText);
      }
  
      // Await the conversion of the response to JSON
      const products = await res.json();
  
      // Loop through the products and log details
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        console.log(`Product ${i + 1}:`);
        console.log(`Title: ${product.title}`);
        console.log(`Price: $${product.price}`);
        console.log(`Description: ${product.description}`);
        console.log(`Category: ${product.category}`);
        console.log(`Rating: ${product.rating.rate} (from ${product.rating.count} reviews)`);
        console.log('------------------------------');
      }
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error("Error fetching product data:", error);
      alert("Oops! Something went wrong while fetching the product data. Please try again later.");
    }
  }
  
  // Call the async function to fetch and log the products
  fetchProducts();
  
  //
  