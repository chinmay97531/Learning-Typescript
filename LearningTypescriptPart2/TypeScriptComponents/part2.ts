interface People {
    name: string;
    age: number;
    // greet: () => string;
    isLegal(): boolean;
}

class Manager implements People {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    isLegal() {
        return this.age > 18
    }
}

let manager = new Manager("Chinmay", 21);
console.log("Hello " + manager.name + "!");
console.log(manager.isLegal());