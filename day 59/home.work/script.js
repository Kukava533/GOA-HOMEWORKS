function manualFilter(func, arr) {
    let filteredArray = []

    for (let i = 0; i < arr.length; i++) {
         if (func(arr[i])) {
            filteredArray.push(arr[i])
        }
    }
    
    return filteredArray
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(num) {
    return num % 2 === 0
}

let evenNumbers = manualFilter(isEven, numbers)
console.log(evenNumbers); 


console.log(Math.sqrt(64))
console.log(Math.ceil(7.1))
console.log(Math.floor(7.9))
console.log(Math.trunc(9.1))
console.log(Math.pow(3,7))
console.log(Math.abs(-11.12))
console.log(Math.min(3,6,-9,0))
console.log(Math.max(3,6,-9,0))




const interval = setInterval(function() {
    const now = new Date();
    const currentMinute = now.getMinutes()

    if (currentMinute === 35) {
        console.log("Interval stopped. Minute is 35.")
        return
    }

    console.log("Current time: " + now)
}, 1000)


let date1 = new Date("2024-03-25")

let date2 = new Date("October 20, 2017 12:13:00")


console.log(date1.getFullYear())
console.log(date1.getMonth() + 1)
console.log(date1.getDate())
console.log(date1.getHours())
console.log(date1.getMinutes())
console.log(date1.getSeconds())
console.log(date2.getFullYear())
console.log(date2.getMonth())
console.log(date2.getDate())
console.log(date2.getHours())
console.log(date2.getMinutes())
console.log(date2.getSeconds())