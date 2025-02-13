class vehcle{
    constructor(name){
        this.name = name;
    }
    move(speed){
        this.speed = speed;
        console.log('vehicle moving')
       
    }


    stop() {
        console.log('vehicle stops')
    }
}


class car extends vehicle {
    constructor(name, speedlimit) {
        const soemt = 12345;

        super(name);
        this.name = name;
        this.speedlimit = speedlimit;
    }
    move(speed) {
        super.move(speed);
        this.speed = speed;
        console.log('speed' +  this.name, this.speedlimit)
    }

    }

const car = new car('BMW', 120);
car.move(70);
car.stop();