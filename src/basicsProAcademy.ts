console.log("this is the basic file of the proacademy typescript series on youtube till video number 45");

// // function return type in ts

// // 1. using generics
// function printAgePlusOne<T>(age:T):T{
//     return age  ;
// }
// let numberAge = printAgePlusOne<number>(5);
// console.log(numberAge)
// let stringAge = printAgePlusOne<string>("Five")
// console.log(stringAge.toLowerCase())

// // 2. using normal function as void
// function printSum(a:number,b:number):void{
//     console.log(a+b);
// }
// printSum(20,21);

// // function as type
// type func = ()=>void;
// function invokeCallback(a:string,fn:func){
//     fn();
// }
// invokeCallback("rishi",()=>{
//     console.log("hello inside the callback")
// })

// // array  
// type numArr = number[];
// let arrays: numArr = [1,2,3,4,5,6];
// // arrays.forEach((i)=>{
// //     console.log(i)
// // })
// type Objects = {
//     name:string,
//     age:number
// }
// let obj:Objects = {
//     name:"r",
//     age:21
// }
// for (const i of array) {
//     console.log(i)
// }
// let t:keyof Objects
// for (t in obj) {
//     console.log(obj[t]);
// }

// // array destructuring
// let person = ['rishi',21,'male'];
// let [fName,age,gender] = person;
// console.log(fName,age,gender)

// // object destructuring 
// let obj1 = {
//     names:"ri",
//     ages:20,
//     dev:true
// }
// let {names,ages,dev} = obj1
// console.log(names,ages,dev)

// // spread operator
// let carBrand:string[] = ['audi','bmw','honda','merc','skoda'];
// console.log(...carBrand)

// const someMoreBrand:string[] = ['Mahindra','Tata','Hyundai',...carBrand];
// console.log("total car brands: ",...someMoreBrand)

// // rest operator
// let [a,b,...rest] = [1,2,3,4,5];
// console.log(a,b,rest)

// // rest parameter
// function restParameter(...numbers:number[]){
//     console.log(numbers);
// }
// restParameter(1,2)
// restParameter(1,2,3,4,5,6)

// OOP - classes and interface


// class User{
//     name:string;
//     age:number;
//     constructor(n:string,a:number){
//         this.name = n;
//         this.age = a
//     }
//     greet():void{
//         console.log(`hello ${this.name}, your current age is ${this.age}, at ${new Date().toDateString()}`)
//     }
// }
// let newUser1 = new User('rishi',21);
// console.log(newUser1)
// newUser1.greet();
// const newUser2 = new User('Aditya',22);
// newUser2.greet();

// // access modifiers

// class Animal{
//     constructor(protected name:string,public ability:string, public age:number){}
//     greeting(){
//         console.log(`hello i am ${this.name}, my ability is to ${this.ability}, i am ${this.age} years old...`)
//     }
    
// }

// const animal1 = new Animal('dog','bark',8);
// console.log(animal1)
// animal1.greeting()
// // animal1.name = 'dogee' not accessible outside the class due to private modifier of name property

// // inheritence, protected access modifier implementation

// class WaterAnimal extends Animal{
//     harmful:boolean
    
//     constructor(n:string,a:string,ag:number,h:boolean){
//         super(n,a,ag)
//         this.harmful = h;
//     }
//     harmGreet(){
//         console.log(`hello i am ${this.name}, i am inside child class, having ability to ${this.ability}, ${this.age} years old, i am harmful:- ${this.harmful}`)
//     }
    
// }
// const waterAnimal1 = new WaterAnimal('shark','swim',8,true);
// console.log(waterAnimal1)
// waterAnimal1.harmGreet();

// // getter and setter, to access and manipulate the private property of the class 

// class Bike{
//     constructor(private names:string,public brand:string,private price:number){}
//     bikeGreet(){
//         console.log(`bike: ${this.names}, brand:${this.brand}, price:${this.price}`)
//     }
//     get(){
//         console.log(`name:${this.names}, price:${this.price}`)
//     }
//     set(value:number,newName:string){
//         this.price = value
//         this.names = newName
//     }
// }

// const bike1 = new Bike('Unicorn','Honda',145000);
// console.log(bike1);
// bike1.get()
// bike1.set(160000,'New Unicorn')
// bike1.get()

// static methods and properties

// class Mobile{
//     public static count:number = 0;
//     constructor(public name:string,public brand:string, public price:number,public purchased:boolean){
//         Mobile.count++;
//     }
//     greetBuyer(){
//         if (this.purchased) {
//             console.log(`thanks for buying our ${this.name}, at ${this.price}, love from ${this.brand} `)
//         }else{
//             console.log(`thanks for showing interest in ${this.name} our customer sales executive will contact you shortly...`)
//         }
//     }
// }
// const cust1 = new Mobile('I Phone','Apple',160000,true);
// // console.log(cust1);
// // cust1.greetBuyer();
// console.log(Mobile.count)
// const cust2 = new Mobile('Vivo V17 pro','Vivo',26000,true);
// console.log(Mobile.count);

/***************************************************************/
// *****Lecture 50: Extending Interface***********************
/**************************************************************/

// interface GrandParents{
//     grandParentsProperty:string
//     giveHouse():void;
// }

// interface Parents extends GrandParents{
//     parentsProperty:string
//     giveCar():void
// }

// class Children implements Parents{
//     constructor(public childName:string,public grandParentsProperty:string,public parentsProperty:string){}
//     giveHouse(): void {
//         console.log("hello"+" "+this.childName+" here is your "+" "+this.grandParentsProperty);
//     }
//     giveCar(): void {
//         console.log("hello"+" "+this.childName+" here is your "+" "+this.parentsProperty);
//     }
// }
// const sibling1 = new Children('rishi','House','Car');
// console.log(sibling1);
// sibling1.giveCar();
// sibling1.giveHouse();

/***************************************************************/
// *****Lecture 53: Type Guard in typescript***********************
/**************************************************************/

// class Animal{
//     creatureSonud(){
//         console.log('general creature sound:');
//     };
//     constructor(){}
// }
// class Dog extends Animal{
//     bark(){
//         console.log('wof, wof....');
//     }
// }
// type sound = Animal;

// function displaySound(s:sound){
//  if (s instanceof Dog) {
//     s.bark();
//  }else{
//     s.creatureSonud();
//  }
// }
// let dog = new Dog();
// let animal = new Animal();
// displaySound(dog);
// displaySound(animal);

/***************************************************************/
// *****Lecture 55: Type Casting in typescript***********************
/**************************************************************/

// let para = <HTMLInputElement>document.querySelector('.inp')!;
// console.log(para.value);

/***************************************************************/
// *****Lecture 56: Indexed Properties in typescript***********************
/**************************************************************/

interface Product{
    id:number
    name:string
    [props:string]:string | number
}


let product1:Product = {
    id:1,name:'Iphone',color:'red'
}
let product2:Product ={id:2,name:'Hyundai',fuel:"Petrol",engine:1.1}

/***************************************************************/
// *****Lecture 57: Function Overloading in typescript***********************
/**************************************************************/

type strOrNum = string | number
function addition(a:string,b:string):string;
function addition(a:number,b:number):number;
function addition(a:strOrNum,b:strOrNum){
    if (typeof a === 'string' || typeof b === 'string') {
         return a.toString() + b.toString();
    }else{
        return a+b;
    }
}
console.log(addition('hello','world').split(' , '));
addition(1,2)

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

function constraint<T extends Object, U extends keyof T>(obj:T,key:U){
    return obj[key];
}
let value = constraint({name:'Honey',age:21},'name');
console.log(value);

/**************************************************************/
// *****Lecture 62: Generic classes in typescript***********************
/**************************************************************/

type Book = {
    name:string,
    pages:number
}
type Phone = {
    name:string,
    ram:8
}

class ShoppingCart<T>{
    private  items:T[] = [];
    addItems(item:T){
        this.items.push(item);
    }
    getItems(){
        return this.items;
    }
}
let bookCart = new ShoppingCart<Book>();
bookCart.addItems({name:'Steve Jobs',pages:225});
bookCart.addItems({name:'Mark Zukkerburg',pages:250})
console.log(bookCart.getItems());

let PhoneCart = new ShoppingCart<Phone>();
PhoneCart.addItems({name:"Iphone",ram:8});
console.log(PhoneCart.getItems());





