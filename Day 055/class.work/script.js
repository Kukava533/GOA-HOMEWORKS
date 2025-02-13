const nums = [1, 2];
[nums[0],nums[1]] = [nums[1],nums[0]];

const person = { name: 'Alice', age: 25, city: 'New York' };
const {name , age , city} = person;

const nestedArray = [1, [2, 3, [4, 5]]];
const [,[,,[fourthvalue,]]] = nestedArray;

const fruits = ['apple'];
const [firstfruit , secondfruit = "banana"] = fruits;

const user = { id: 101, username: 'john_doe' };
const {id : userId , username : userName} = user;