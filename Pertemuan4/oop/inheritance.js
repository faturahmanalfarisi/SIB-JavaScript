//parent class
class Vehicle{
    constructor(brand,model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        return `${this.brand} ${this.model} Tahun : ${this.year}`;
    }
}
//child class
class Car extends Vehicle{
    constructor(brand, model, year,doors) {
        super(brand, model, year);
        this.doors = doors;
    }
    getCarInfo(){
        return `${this.getInfo()}, Pintu : ${this.doors}`;
    }
}
//child class
class Motorcycle extends Vehicle{
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }

    getMotorInfo(){
        return `${this.getInfo()}, Tipe : ${this.type}`;
    }
}

let myCar = new Car("Toyota", "Corolla", 2002, 4);
console.log(myCar.getCarInfo());

let myMotor = new Motorcycle("Honda", "CBR105", 2023, "Sport")
console.log(myMotor.getMotorInfo());