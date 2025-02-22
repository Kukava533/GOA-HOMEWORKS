function countOccurrences(arr) {
    const counts = {};
    
    // Count the occurrences of each element
    arr.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });
    
    // Create a new array with the occurrence count for each element in the original order
    return arr.map(num => counts[num]);
}

const arr = [3, 1, 2, 1, 2, 1];
const result = countOccurrences(arr);
console.log(result);  // Output: [1, 3, 2, 3, 2, 3]
