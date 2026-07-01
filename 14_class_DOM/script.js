class person{
    static  addarray(){
        let arr = [1 , 2,3,4,5];
        let sum = 0;
        for(let i = 0; i < arr.length;i++){
            sum+=arr[i];
        }
        return sum;
    }
}

let p = new person('kartik',123);
console.log(person.addarray())

