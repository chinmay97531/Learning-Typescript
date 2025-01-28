class Shape {
    area() {
        console.log("Hi, I am Area");
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor() {
        super()
        this.width = 1;
        this.height = 2; 
    }
}