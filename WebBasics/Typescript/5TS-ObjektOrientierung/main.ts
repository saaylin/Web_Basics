import { Car } from "./car.js";
import { Engine } from "./engine.js";   

let car: Car = new Car("m4", "BMW", new Engine(500));

console.log(Car.getColor());
console.log(car.getMake);
