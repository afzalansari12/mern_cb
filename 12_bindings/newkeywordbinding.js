function person(name , age){
    this.name = name;
    this.age = age;

}

let p = new  person("kartik",39)
// we are using the person function as constructor function

console.log(p);