//რაც ვერ მოვასწარით ის გვქონდა დავალებად codewars ების ამოცანები 6kyu
//1
function isPerfectSquare(input) {
    // Check if the input is a valid number
    const number = parseFloat(input);
    
    // If the input is not a valid number or it's negative, return false
    if (isNaN(number) || number < 0) {
      return false;
    }
  
    // Calculate the square root of the number
    const sqrt = Math.sqrt(number);
    
    // Check if the square root is an integer
    return sqrt === Math.floor(sqrt);
  }
  
  // Test cases
  console.log(isPerfectSquare("16"));   // true (4 * 4 = 16)
  console.log(isPerfectSquare("25"));   // true (5 * 5 = 25)
  console.log(isPerfectSquare("2"));    // false (sqrt(2) is not an integer)
  console.log(isPerfectSquare("-4"));   // false (negative numbers cannot be perfect squares)
  

  //2

  function endsWith(str, target) {
    // Check if str ends with target
    return str.endsWith(target);
  }
  
  // Test cases
  console.log(endsWith("hello world", "world")); // true
  console.log(endsWith("hello world", "hello")); // false
  console.log(endsWith("hello", "lo"));         // true
  console.log(endsWith("hello", "z"));          // false
  console.log(endsWith("javascript", "script")); // true
  