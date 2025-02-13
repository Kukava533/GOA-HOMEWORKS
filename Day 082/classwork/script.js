let sum = 0;//1
const numbers = [12, 13, 14, 15,16];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum)

const array = ['a', 'b', 'c'];//2

array1.forEach((element,index,array) => console.log(element,index,array));

function manualForEach(array, func) { //3
    for (let i = 0; i < array.length; i++) {
      func(array[i], i, array);
    }
  }
  
  const array1 = ['a', 'b', 'c'];
  
  manualForEach(array1, function(element, index, array) {
    console.log(element, index, array);
  });