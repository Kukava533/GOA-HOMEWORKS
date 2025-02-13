fetch('https://fakestoreapi.com/products/1') // Fetches data from the given API endpoint
  .then(res => res.json())  // Converts the response to a JSON object
  .then(json => console.log(json))  // Logs the resulting JSON to the console
