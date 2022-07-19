const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("My Polybius Tests", ()=>{
        
        it("ignores capital letters", ()=>{
            const input = 'ABD'
            const actual = polybius(input)
            const expected = '112141'
        expect(actual).to.equal(expected)
        });

        it("ignores spaces and non-letter symbols", ()=>{
            const input = '$%#a'
            const actual = polybius(input)
            const expected = '$%#11'
        expect(actual).to.equal(expected)
        });

        it("translates each letter into number pairs", ()=>{
            const input = 'a b c'
            const actual = polybius(input)
            const expected = '11 21 31'
        expect(actual).to.equal(expected)
        });

        it("registers both 'i' and 'j' to 42", ()=>{
            const input = 'i j'
            const actual = polybius(input)
            const expected = '42 42'
        expect(actual).to.equal(expected)
        });
    });

    describe("Decoding", ()=>{
    const encode = false; 
        it("returns false if the length of all numbers is odd", ()=>{
            const input = "12345"
            const actual = polybius(input, encode)
        expect(actual).to.be.false
        });

        it("parses a numerical input into a string", ()=>{
            const input = 21314111
            const actual = polybius(input, encode)
            const expected = "bcda"
        expect(actual).to.equal(expected)
        });

        it("translates each number pair into one letter", ()=>{
            const input = "21"
            const actual = polybius(input, encode)
            const expected = 'b'
        expect(actual).to.equal(expected)
        });

        it("keeps spaces intact", ()=>{
            const input = '21 32 11'
            const actual = polybius(input, encode)
            const expected = 'b h a'
        expect(actual).to.equal(expected)
        });

        it("translates 42 to 'i/j'", ()=>{
            const input = '42'
            const actual = polybius(input, encode)
            const expected = 'i/j'
        expect(actual).to.equal(expected)
        });
    });
});
