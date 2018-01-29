import * as mocha from "mocha";
import { expect } from "chai";
import { Person } from "./../src/main/ts/person";

describe( "Person Suite", () => {

    it( "greets with name", () => {
        const p = new Person( "dsneves" );
        expect( p.greet() ).to.equal( "Hello, dsneves" );
    } )

} );