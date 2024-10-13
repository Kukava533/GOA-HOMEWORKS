const numbers = [4, -9, 16, 25,-4,-7,5,-1,9];

// const filteredNumbers = numbers.filter((number) => {
//     return number >= 0;
// })

// console.log(filteredNumbers);
// console.log(numbers);

const positiveNums = manualFilter(numbers, (number) => {
    return number >= 0;
});

console.log(positiveNums);

function manualFilter(arr, customFunc){
    const resultArr = [];
    for(let i = 0; i < arr.length; i++){
        if(customFunc(arr[i], i, arr)){
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}