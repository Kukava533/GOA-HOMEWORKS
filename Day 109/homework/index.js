//code wars
//1
function numberLines(arr) {
    return arr.map((line, index) => `${index + 1}: ${line}`);
}

const lines = ["Hello world", "This is a test", "Text editor functionality"];
const numberedLines = numberLines(lines);

console.log(numberedLines);
// Output: [ '1: Hello world', '2: This is a test', '3: Text editor functionality' ]

//2
function bonusTime(salary, bonus) {
    const totalSalary = bonus ? salary * 10 : salary;
    return `$${totalSalary}`;
}

console.log(bonusTime(50000, true));  // Output: $500000
console.log(bonusTime(50000, false)); // Output: $50000
//3
function findMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
}

const numbers = [3, 5, 1, 8]
//4
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + Number(current), 0);
}

const arr = ["1", 2, "3", 4, "5"];
const result = sumArray(arr);
console.log(result);  // Output: 15
