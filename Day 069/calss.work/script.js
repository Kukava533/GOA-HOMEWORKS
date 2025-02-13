function Fullname(name, lastname) {
  
    this.name = name;
    this.lastname = lastname;
    
    this.printInfo = function() {
      console.log(this.name, this.clastname)
    }
    
  }
  

  const fullname1 = new Fullname("Luka", "Cxvaradze");
  const fullname2= new Fullname("Nika", "Kukava");