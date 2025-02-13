class person {
    constructor(age, gender){
        this.age = age
        this.gender = gender
    }

    get concatenation(){
        return this.concatenate()
    }

    concatenate(){
        return this.gender + ' ' + this.age + ' years old'
    }
}

const actress = new person(30, 'male')
console.log(actress.concatenation)






class animals {
    constructor(name){
        this.name = name
    }
    makeSound(sound){
        this.sound = sound
        return sound
    }
}

class lion extends animals {
    constructor(name){
        super(name)
    }
}

const lion = new lion('rexi')

console.log(lion.makeSound('bark'))