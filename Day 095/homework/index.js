//1
function greet(name, callback) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      callback();  // Call the callback after greeting
    }, 2000);  // 2-second delay
  }
  
  // Example usage:
  greet('Alice', () => {
    console.log('Message logged after delay!');
  });

  //2
  function processMessage(message, callback) {
    setTimeout(() => {
      console.log(message);
      callback();  // Call the callback to indicate process completion
    }, 2000);  // 2-second delay
  }
  
  // Example usage:
  processMessage('Process started...', () => {
    console.log('Process completed!');
  });
  
  //3
  function squareNumbers(numbers, callback) {
    let squaredNumbers = [];
    let counter = 0;
  
    numbers.forEach((num, index) => {
      setTimeout(() => {
        squaredNumbers[index] = num * num;
        counter++;
  
        if (counter === numbers.length) {
          callback(squaredNumbers);  // Return the squared numbers once all are processed
        }
      }, index * 1000);  // Each square is delayed by 1 second
    });
  }
  
  // Example usage:
  squareNumbers([1, 2, 3, 4], (squared) => {
    console.log('Squared numbers:', squared);
  });

  //4
  function changeTextColor(color, callback) {
    setTimeout(() => {
      document.body.style.color = color;  // Change text color
      callback();  // Execute callback to confirm change
    }, 2000);  // 2-second delay
  }
  
  // Example usage:
  changeTextColor('blue', () => {
    console.log('Text color has been changed!');
  });

  //5
  function askUserName(callback) {
    const userName = prompt('Please enter your name:');  // Ask user for their name
    setTimeout(() => {
      console.log(`Hello, ${userName}! You have been helped.`);
      callback();  // After 3 seconds, greet user
    }, 3000);  // 3-second delay
  }
  
  // Example usage:
  askUserName(() => {
    console.log('User interaction complete.');
  });
    