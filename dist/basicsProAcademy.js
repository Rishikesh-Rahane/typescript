"use strict";
console.log("this is the basic file of the proacademy typescript series on youtube till video number 45");
class Children {
    constructor(childName, grandParentsProperty, parentsProperty) {
        this.childName = childName;
        this.grandParentsProperty = grandParentsProperty;
        this.parentsProperty = parentsProperty;
    }
    giveHouse() {
        console.log("hello" + " " + this.childName + " here is your " + " " + this.grandParentsProperty);
    }
    giveCar() {
        console.log("hello" + " " + this.childName + " here is your " + " " + this.parentsProperty);
    }
}
const sibling1 = new Children('rishi', 'House', 'Car');
console.log(sibling1);
sibling1.giveCar();
sibling1.giveHouse();
