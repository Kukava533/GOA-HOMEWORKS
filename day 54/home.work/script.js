const me = {
    // Properties of me
    name: "nika", // string for my name
    age: 16, // integer/number for my age
    weight: 55, 
    gender: "male", // string property for the person's gender
    professional bodybuilder : true, // boolean property (initially set to true (always will be true))
    // Method/function of the object
    func: function() {
        // Log a greeting message to the console using the person's name
        console.log("Hello, I am " + this.name);//this is something you can use to call for any key value in a object without needing to find it.
    }
}

me.name = "nika" // changing a value of a key
delete me.age //deleting a key and value


function Fullname(name, lastname) {
  
    this.name = name;
    this.lastname = lastname;
    
    this.printInfo = function() {
      console.log(this.name, this.clastname)
    }
    
  }
  

  const fullname1 = new Fullname("Luka", "Cxvaradze");
  const fullname2= new Fullname("luka gamgonidze")