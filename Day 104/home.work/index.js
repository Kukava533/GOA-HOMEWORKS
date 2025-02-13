
function sumTwoLargest(lst) {
    if (lst.length < 2) {
        return null;
    }

    let max1 = Math.max(...lst); // Find the largest number
    lst = lst.filter(num => num !== max1); // Remove the largest number
    let max2 = Math.max(...lst); // Find the second largest number

    return max1 + max2;
}

console.log(sumTwoLargest([3, 7, 2, 9, 5]));  // Expected output: 16 (9 + 7)
console.log(sumTwoLargest([10, 10, 5, 3]));   // Expected output: 20 (10 + 10)
