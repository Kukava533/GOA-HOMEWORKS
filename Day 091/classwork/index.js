function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true; // შეცვალეთ სიმართლე მცდარი დატომპულით
        if (success) {
            resolve("მონაცემები წარმატებით მიღებულია!");
        } else {
            reject("მონაცემები ვერ გადაიტანება");
        }
    });
}

fetchData()
    .then(result => console.log(result)) // გამოხატავს წარმატებას
    .catch(error => console.log(error)); // გამოხატავს შეცდომას
