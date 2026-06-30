let obj = {
    a: 1 ,
    b:'hey',
    print(){
        console.log(this);
        this.c ='new c added inside print';
    }
}

obj.print();
console.log(obj);