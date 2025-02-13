class parent{
    constructor(name){
        console.log("how are you" + name + "?")
    }
}



class child extends parent{
    constructor(name, age){
        super(name);
        console.log(name + "age is:" + age);
    }
}

const child = new child("giorgi",22);