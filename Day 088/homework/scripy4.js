const studentsmap = new Map([
    [0,{name: 'sonny'}],
    [1,{name: 'jay'}],
    [2, {name: 'elon'}],
]);
const key = {userId:'abc'}

console.log = studentsmap.set(key, {name: 'alex'})