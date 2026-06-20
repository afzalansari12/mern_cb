function secureaccount(){
     let balance = 0;
     function deposit(val){
      balance+=val;
      return `  after deposit balance : ${balance}`
     }

     function withdrawl(val){
        balance-=val;
      return ` after deposit withdraw : ${balance}`


     }

     function getbalance(){
         return balance;
     }

     return {
        deposit,withdrawl,getbalance
     }

}

let account = secureaccount();

console.log(account.deposit(100));
console.log(account.withdrawl(50));

console.log(account.getbalance(50));
