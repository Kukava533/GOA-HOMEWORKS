function sumDigits(n) {
    n = Math.abs(n); // Take the absolute value to handle negative numbers
    let result = 0;
    while (n > 0) {
        result += n % 10;
        n = Math.floor(n / 10); // Integer division to remove the last digit
    }
    return result;
}

console.log(sumDigits(123));  // Expected output: 6 (1 + 2 + 3)
console.log(sumDigits(405));  // Expected output: 9 (4 + 0 + 5)
console.log(sumDigits(-123)); // Expected output: 6 (1 + 2 + 3) for negative numbers
