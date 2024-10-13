const cars = ['BMW', 'Mercedes', 'audi']

cars.forEach((values)=>{
    console.log(values)
})


// 2. Calculate Sum: Use forEach to calculate the sum of an array of numbers and log the result.

const nums = [1,2,3,4,5]
res = 0
nums.forEach((values)=>{
    res+= values
})


// 3. Print Student Names: Create an array of student names and use forEach to print each name in a formatted string.

const students = ['student1', 'student2', 'student3']

students.forEach((value)=>{
    console.log(`students are: ${value}`)
})


// 4. Double Values: Create an array of integers and use forEach to double each value and store the results in a new array.

newArr = []
nums.forEach((values)=>{
    newArr.push(values*2)
})


// 5. Square Values: Use map to create a new array that contains the squares of each number from an existing array.

const doubled = nums.map(num => num ** 2)


// 6. Extract Lengths: Create an array of strings and use map to create a new array that contains the lengths of each string.

let Names = ["nika", "Saba", "gio"]
let strLengths = Names.map(string => string.length)


// 7. Convert to Uppercase: Create an array of lowercase strings and use map to convert each string to uppercase.

let uppers = Names.map(string => string.toUpperCase())


// 8. Filter Even Numbers: Use filter to create a new array containing only the even numbers from an existing array of integers.

const numbers = [3, -12, 5]

const filtered = numbers.filter((number)=>{
    return number % 2 === 0
})




