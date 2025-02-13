class animal{
    constructor(breed,age,weight) {
        this.breed = breed;
        this.age = age;
        this.weight = weight;
    }
    displayAnimal() {
        console.log(this.breed);
        console.log(this.age);
        console.log(this.weight);
    }
}

class leopard extends Animal{
    constructor(name, age, weight) {
        super(name, age, weight);
        this.weight
    }
    displayleopard() {
        this.displayAnimal(); 
        console.log(this.weight);
    }
}

class pantera extends Animal{
    constructor(name, age , weight) {
        super(name, age , weight);
        this.age
    }
    displaypantera() {
        this.displayAnimal(); 
        console.log(this.age);
    }
}

class Golden extends leopard {
    constructor(name, age , gender) {
        super(name, age, "golden");
        this.gender = gender
    }
    displaygolden() {
        this.displayleopard();
        console.log(this.gender)
    }
}

class characterization extends pantera {
    constructor(eyecolor, haircolor, paws){
        super(blue, black, clawedpaws);
        this.paws = paws
        
    }
    displaycharacterezation(){
        this.displaypantera();
        console.log(this.paws);
    }

}

