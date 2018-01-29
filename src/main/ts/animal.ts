export class Animal {

    private type: string;

    private name: string;

    constructor( type: string, name: string ) {
        this.type = type;
        this.name = name;
    }

    public toString() {
        return "{ type: " + this.type + ", name: " + this.name + " }";
    }

}
