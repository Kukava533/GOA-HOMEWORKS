class Animal { // main class 
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    displayAnimal() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.type);
    }
}
// Inherited class Dog
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age, "mammal"); // called the constructor from the parent function so we dont have to write the constructor again
        this.breed = breed; 
    }

    displayDog() {
        this.displayAnimal(); 
        console.log(this.breed);
    }
}
// Inherited class Cat
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age, "mammal"); 
        this.color = color; 
    }

    displayCat() {
        this.displayAnimal(); 
        console.log(this.color);
    }
}

const myDog = new Dog("rexi", 5, "Golden Retriever"); //using the inheritance class 
myDog.displayDog();
const myCat = new Cat("lucy", 3, "Hound");
myCat.displayCat();

// Inherited class GoldenRetriever from Dog
class GoldenRetriever extends Dog {
    constructor(name, age , gender) {
        super(name, age, "Golden Retriever");
        this.gender = gender
    }

    displayGoldenRetriever() {
        this.displayDog();
        console.log(this.gender)
    }
}

// Inherited class Hound from Dog class
class Hound extends Dog {
    constructor(name , age , gender){
        super(name, age, "Hound");
        this.gender = gender;
    }

    displayHound() {
        this.displayDog();
        console.log(this.gender);
    }
}

class Sphynx extends Cat{
    constructor(name, age, hairlessness) {
        super(name , age , "Grey");
        this.hairlessness = hairlessness;
}
    displaySphynx(){
        this.displayCat();
        console.log(this.hairlessness);
    }

}

class RussianBlu extends Cat{
    constructor(name , age , eyecolor){
        super(name, age, "Beige");
        this.eyecolor = eyecolor;
    }
    displayRussianBlu(){
        this.displayCat();
        console.log(this.eyecolor)
    }
}
const myRussianBlu = new RussianBlu("fluffy", 2, "grey-white", "yellow");
myRussianBlu.displayRussianBlu