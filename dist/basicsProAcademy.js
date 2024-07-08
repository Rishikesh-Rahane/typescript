"use strict";
console.log("this is the basic file of the proacademy typescript series on youtube till video number 45");
let product1 = {
    id: 1, name: 'Iphone', color: 'red'
};
let product2 = { id: 2, name: 'Hyundai', fuel: "Petrol", engine: 1.1 };
function addition(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
console.log(addition('hello', 'world').split(' , '));
addition(1, 2);
/***************************************************************/
// *****Lecture 59 and 60: Generic function and Genric constraints in typescript***********************
/**************************************************************/
// function swap<T>(a:T[],index1:number,index2:number):T[]{
//     if(index1 && index2 < 0 || index1 && index2  > a.length){
//         throw new Error;
//     }
//     else{
//         [a[index1],a[index2]] = [a[index2],a[index1]];
//         return a;
//     }
// }
// let swappedArray = swap<string>(['hello','hi,','whats'],0,2);
// console.log(swappedArray);
// function expand<T extends Object , U extends Object>(obj1:T,obj2:U){
//      return Object.assign(obj1,obj2)
// }
// let combined = expand({name:'rishi'},{name:'rishi',age:21})
// console.log(combined);
/***************************************************************/
// *****Lecture 61: keyof constraint in typescript***********************
/**************************************************************/
function constraint(obj, key) {
    return obj[key];
}
let value = constraint({ name: 'Honey', age: 21 }, 'name');
console.log(value);
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItems(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
}
let bookCart = new ShoppingCart();
bookCart.addItems({ name: 'Steve Jobs', pages: 225 });
bookCart.addItems({ name: 'Mark Zukkerburg', pages: 250 });
console.log(bookCart.getItems());
let PhoneCart = new ShoppingCart();
PhoneCart.addItems({ name: "Iphone", ram: 8 });
console.log(PhoneCart.getItems());
