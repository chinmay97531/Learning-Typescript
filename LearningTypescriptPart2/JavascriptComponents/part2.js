"use strict";
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age > 18;
    }
}
let manager = new Manager("Chinmay", 21);
console.log("Hello " + manager.name + "!");
console.log(manager.isLegal());
