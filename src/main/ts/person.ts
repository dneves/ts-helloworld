import { Animal } from "./animal";

export class Person {

    private name: string;

    private animals: Animal[];

    constructor( name: string ) {
        this.name = name;
        this.animals = [];
    }

    public greet(): string {
        return "Hello, " + this.name;
    }

    public addAnimal( animal: Animal ): Person {
        this.animals.push( animal );
        return this;
    }

}
