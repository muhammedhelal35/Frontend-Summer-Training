class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot create an instance of abstract class Shape.");
        }
    }

    calculateArea() {
        throw new Error("'calculateArea()' must be implemented.");
    }

    calculatePerimeter() {
        throw new Error("'calculatePerimeter()' must be implemented.");
    }

    toString() {
        throw new Error("'toString()' must be implemented.");
    }
}

class Rectangle extends Shape {
    static objectCount = 0; 

    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        Rectangle.objectCount++;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }

    displayInfo() {
        console.log(`Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`);
    }

    toString() {
        return `Rectangle [Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}]`;
    }

    static getObjectCount() {
        return Rectangle.objectCount;
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength); 
    }

    
    toString() {
        return `Square [Side Length: ${this.width}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}]`;
    }
}

// Testing

let rect1 = new Rectangle(10, 5);
rect1.displayInfo(); 
console.log(rect1.toString()); 
let square1 = new Square(4);
square1.displayInfo(); 
console.log(square1.toString()); 
try {
    let shape1 = new Shape();
} catch (error) {
    console.log(error.message); 
}
console.log(`Number of Rectangle/Square objects created: ${Rectangle.getObjectCount()}`);
