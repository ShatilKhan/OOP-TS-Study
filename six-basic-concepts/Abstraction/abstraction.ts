//ABSTRACTION
//Abstraction is a concept that allows you to focus on the essential attributes and
//behaviors of an object while hiding the unnecessary details.
//It involves representing only the relevant characteristics of an object, and
// hiding the complex implementation details from the user.

//Let's define a Car class, 
//we don't need to know every detail of the car, 
//instead just know how to steer, brake & accelerate

// Car Class
class Car {
    private brand: string;
    private model: string;
    private speed: number;

// Constructor
    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }

    // Methods for acceleration & brakes


    //The user interacts with the car object 
    //through these methods without needing to know 
    //how they are implemented internally.
    
    public accelerate(): void {
        this.speed += 10;
    }

    public brake(): void {
        this.speed -= 10;
    }

    // Get speed after acceleration/brake
    public getSpeed(): number {
        return this.speed;
    }
}

// Create a Car Object
const myCar: Car = new Car("Ford", "Mustang");

// Accelerate the car
myCar.accelerate();

// Get current speed of car
console.log("Current Speed:", myCar.getSpeed());

// CONSOLE OUTPUT
`Current Speed: 10`