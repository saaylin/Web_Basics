import { Engine } from "./engine";

export class Car{
    static getColor(): any {
        throw new Error("Method not implemented.");
    }
    private color: string = "blue";

    constructor(
        private model :string, 
        private make:string,
        private engine: Engine
    ){};

    getHorsepower(): number {
        return this.engine.getHorsepower();
    }

    getColor(): string{
        return this.color;
    }

    getMake(): string{
        return this.make;
    }   
}