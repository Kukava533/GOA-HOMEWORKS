// string.mjs

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export function toUpperCase(str) {
    return str.toUpperCase();
}

export const greeting = "Hello, world!";

// math.mjs

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

// random.mjs

export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// class.mjs

export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

export class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        return `${this.species} says ${this.sound}`;
    }
}

// arr.mjs

export function findMax(arr) {
    return Math.max(...arr);
}

export function findMin(arr) {
    return Math.min(...arr);
}

export function average(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}


// app.mjs

import { reverseString, toUpperCase, greeting } from './string.mjs';
import { add, subtract, multiply, divide } from './math.mjs';
import { generateRandomNumber, generateRandomString } from './random.mjs';
import { Person, Animal } from './class.mjs';
import { findMax, findMin, average } from './arr.mjs';


console.log(reverseString("Hello"));  // olleH
console.log(toUpperCase("hello"));  // HELLO
console.log(greeting);  // Hello, world!


console.log(add(10, 5));  // 15
console.log(subtract(10, 5));  // 5
console.log(multiply(10, 5));  // 50
console.log(divide(10, 5));  // 2


console.log(generateRandomNumber(1, 100));  // random number between 1 and 100
console.log(generateRandomString(8));  // random string of length 8


const person = new Person("Alice", 30);
console.log(person.greet());  // Hello, my name is Alice and I am 30 years old.

const dog = new Animal("Dog", "bark");
console.log(dog.makeSound());  // Dog says bark


const arr = [10, 20, 30, 40, 50];
console.log(findMax(arr));  // 50
console.log(findMin(arr));  // 10
console.log(average(arr));  // 30
