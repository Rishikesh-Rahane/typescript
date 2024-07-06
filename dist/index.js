"use strict";
console.log("hello typescript");
let x = 5;
console.log(x);
function sum(a, b) {
    return a + b;
}
const ans = sum(5, 3);
console.log(ans);
// isLegal function
const isLegal = (age) => {
    if (age > 18)
        return true;
    else
        return false;
};
console.log(isLegal(21));
class Employee {
    constructor(n, a, p) {
        this.userName = n;
        this.age = a;
        this.password = p;
    }
}
const emp1 = new Employee("rishi", 20, "rishi20");
console.log(emp1);
// type
// 1 Unions
const tokenValue = (t) => {
    return t;
};
const tk = tokenValue("rishi");
const tkNum = tokenValue(20);
console.log(tk);
console.log(tkNum);
const manager = {
    name: "rishi",
    age: 20,
    department: "development"
};
console.log(manager);
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keypressed) {
    if (keypressed === Direction.Up) {
        console.log(Direction.Up);
    }
    else if (keypressed === Direction.Down) {
        console.log(Direction.Down);
    }
}
doSomething(Direction.Up);
const firstNO = (fn) => {
    return fn[0];
};
const indexZero = firstNO(["rishi", "rahane"]);
console.log(indexZero);
// indexZero.toUpperCase() ---- Not valid beacuse we are not able to identify whether the type is number or string for this reason we use generics in ts
const firstIndex = (fI) => {
    return fI[0];
};
const strValue = firstIndex(["rishi", "rahane"]);
console.log(strValue.toUpperCase());
const numValue = firstIndex([1, 2, 3, 4, 5, 6]);
console.log(numValue.toLocaleString());
