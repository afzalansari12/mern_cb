function print(){
    console.log("name",this.name);
    console.log("age",this.age);

    console.log("address",this.address);
    console.log("comapany",this.comapany);




}

let person = {
    name : kartik,
    age : 10,
    address: 110/A ,
    company :'cB'
}

print.call(person);