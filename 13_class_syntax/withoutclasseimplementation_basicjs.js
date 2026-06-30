class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

Person.prototype.print = function () {
    console.log(this.name, this.age);
};

let p = new Person("Harsh", 34);

console.log(p);
p.print();