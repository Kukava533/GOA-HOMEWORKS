// Fetch multiple products from the API
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())  // Convert the response to JSON
  .then(json => {
    // Loop through the products and log details
    for (let i = 0; i < json.length; i++) {
      const product = json[i];

      // Log each product's details
      console.log(`Product ${i + 1}:`);
      console.log(`Title: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Description: ${product.description}`);
      console.log(`Category: ${product.category}`);
      console.log(`Rating: ${product.rating.rate} (from ${product.rating.count} reviews)`);
      console.log('------------------------------');
    }
  })
  .catch(error => {
    console.error("Error fetching product data:", error);
  });
