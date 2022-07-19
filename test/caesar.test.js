// Write your tests here!
const {expect} = require('chai')
const {caesar} = require('../src/caesar') 

describe("My Caesar Tests",()=>{
    describe("Error Handling",()=>{
        const message = "message"
        it("returns false if the shift is 0",()=>{
            const expected = false;
            const actual = caesar(message, 0)
        expect(actual).to.equal(expected)
        });

        it("returns false if the shift is greater than 25",()=>{
            const expected = false;
            const actual = caesar(message, 26)
        expect(actual).to.equal(expected)
        });

        it("returns false if the shift is less than -25", ()=>{
            const expected = false;
            const actual = caesar(message, -26)
        expect(actual).to.equal(expected)
        })
    })

    describe("Message Encoding", ()=>{
        it("changes all input to lowercase",()=>{
            const message = "SeCret"
            const expected = "tfdsfu"
            const actual = caesar(message, 1)
        expect(actual).to.equal(expected)
        });

        it("leaves spaces or any other characters that aren't letters as is", ()=>{
            const message = "*() {}"
            const expected = "*() {}"
            const actual = caesar(message, 2)
        expect(actual).to.equal(expected)
        });
        
        it("allows shifting to the left",()=>{
            const message = "secret"
            const expected = "qcapcr"
            const actual = caesar(message, -2)
        expect(actual).to.equal(expected)
        });

        it("trims extra spaces before or after the encoded message", ()=>{
            const message = "  .abc   "
            const expected = ".def"
            const actual = caesar(message, 3)
        expect(actual).to.equal(expected)
        });

        it("handles letters at the end of the alphabet appropriately", ()=>{
            const message = "xyz"
            const expected = "zab"
            const actual = caesar(message, 2)
        expect(actual).to.equal(expected)
        });

        it("handles letters at the beginning of the alphabet appropriately with a left shift",()=>{
            const message = "ceg"
            const expected = "wya"
            const actual = caesar(message, -6)
        expect(actual).to.equal(expected)
        });
    });

    describe("Message Decoding", ()=>{
        it("decodes a message by shifting the letters in the opposite direction",()=>{
            const message = "tstgsvr"
            const expected = "popcorn"
            const actual = caesar(message, 4, false)
        expect(actual).to.equal(expected)
        });

        it("leaves spaces or any other characters that aren't letters as is", ()=>{
            const message = "{} .*)"
            const expected = "{} .*)"
            const actual = caesar(message, 3, false)
        expect(actual).to.equal(expected)
        });
    });
});
