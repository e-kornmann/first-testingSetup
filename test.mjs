import assert from "assert";
import {
    greet,
    } 
    from "./index.mjs";


describe("greet function", () => {
    it("should greet Elton properly", () => {
    // arrange    
    const name1 = 'Elton';
    
    // act
    const actualResult = greet(name1);
    // assert
    assert.equal('Welcome to SALT, Elton', actualResult);
    });

    it("should greet Eliza properly", () => {
    // arrange    
    const name1 = 'Eliza';
    // act
  const actualResult = greet(name1);
    // assert
    assert.equal('Welcome to SALT, Eliza', actualResult);
    });

    it("should give error message for ''", () => {
    // arrange    
    const name1 = '';
    // act
    const actualResult = greet(name1);
    // assert
    assert.equal('You should fill in your name', actualResult);
    });


    it("should plural greeting for 'Elton and Eliza'", () => {
    // arrange    
    const name1 = 'Elton';
    const name2 = 'Eliza';
    
    // act
    const actualResult = greet(name1, name2);
    // assert
    assert.equal('Welcome to SALT, Elton and Eliza', actualResult);
    });
 
});