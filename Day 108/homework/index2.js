function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const arr = [3, 1, 2, 1, 2, 1];
const sortedArr = sortDescending(arr);
console.log(sortedArr);  // Output: [3, 2, 2, 1, 1, 1]
