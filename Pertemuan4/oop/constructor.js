function Person(name, age, city){
    //Deklarasi cunstructor ditandai dengan this
    this.name = name;
    this.age = age;
    this.city = city;

    Person.prototype.greet = function(){
        return `Hello, My Name Is ${this.name}`
    };
}


//dan di panggil di dalam object menggunakan keywoard newj
let person1 = new Person("Alice", 25, "Jakarta");
let person2 = new Person("Bob", 30, "Bandung");

console.log(person1.greet());
console.log(person2);