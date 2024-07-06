console.log("hello typescript")

let x:number = 5;
console.log(x)

type num = number
function sum(a:num,b:num):number{
    return a + b;
}
const ans = sum(5,3);
console.log(ans);

// isLegal function
const isLegal = (age:number):boolean =>{
    if(age>18) return true
    else return false
}
console.log(isLegal(21))

// type func = ()=>void
// function delayFunc(fn:func):void{
//     setTimeout(fn,1000);
// }

// delayFunc(()=>{
//     console.log("hello there after delay")
// })

// interface

interface Users{
    userName:string,
    age:number,
    password:string,
}

class Employee implements Users{
    userName: string;
    age: number;
    password: string;
    constructor(n:string,a:number,p:string){
        this.userName = n
        this.age = a
        this.password = p
    }
}

const emp1 = new Employee("rishi",20,"rishi20")
console.log(emp1)

// type

// 1 Unions
const tokenValue = (t:string | number) =>{
    return t;
}
const tk = tokenValue("rishi");
const tkNum = tokenValue(20);
console.log(tk)
console.log(tkNum)

// 2 intersections

type Person = {
    name:string,
    age:number,
}
type Employees = {
    name:string,
    department?:string
}

type Manager = Person & Employees

const manager:Manager = {
    name:"rishi",
    age:20,
    department:"development"
}
console.log(manager)

// enums 
// problem statement for enums is that we need to make the type as not static 
// type direction = "up" | "down" | "left" | "right"
// const arrows = (d:direction):void =>{
//     if (d === "up") {
//         console.log("direction is upward")
//     }else if(d==="down"){
//         console.log("direction is down")
//     }
//     else if(d==="left"){
//         console.log("direction is left")
//     }
//     else if(d==="right"){
//         console.log("direction is right")
//     }else{
//         console.log("you pressed the wrong key")
//     }
// } 
// console.log(arrows("up"))
// console.log(arrows("down"))
// console.log(arrows("up"))

enum Direction{
    Up,
    Down,
    Left,
    Right
}

function doSomething(keypressed:Direction):void {
    if (keypressed === Direction.Up) {
        console.log(Direction.Up)
    } else if (keypressed === Direction.Down) {
        console.log(Direction.Down)
    }
}
doSomething(Direction.Up)

// Generics
// problem statement is:- If we use type for defining the variable type which is used for unions and intersections then at the time of using the properties of number or string then we are not able to do so.....

type printFirstNO = number | string
const firstNO = (fn:printFirstNO[]):printFirstNO =>{
    return fn[0];
}
const indexZero = firstNO(["rishi","rahane"]);
console.log(indexZero);
// indexZero.toUpperCase() ---- Not valid beacuse we are not able to identify whether the type is number or string for this reason we use generics in ts

const firstIndex = <T>(fI:T[]):T => {
    return fI[0];
}
const strValue = firstIndex<string>(["rishi","rahane"])
console.log(strValue.toUpperCase());
const numValue = firstIndex<number>([1,2,3,4,5,6])
console.log(numValue.toLocaleString());
