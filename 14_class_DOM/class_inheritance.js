class person{
    constructor(name , age){
        this.name = name;
        this.name = name;

    }  
}
class student extends person{
    constructor(name,age ,marks){
        super(name, age );
        this.marks = marks;

    }
}

let s = new student('vaibhav', 10 ,100);
console.log(s);

console.log(student.prototype.__proto__ == person.prototype);
console.log(person.prototype.__proto__ == object.prototype);
console.log(s.__proto__ == student.prototype);



