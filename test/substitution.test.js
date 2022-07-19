const { expect } = require("chai");
const {substitution} = require("../src/substitution");

describe("My Substitution Tests", () => {
  describe("Error Handling", () => {
    it("returns false if the substitution alphabet is missing", () => {
        const input = "input";
        const actual = substitution(input);
    expect(actual).to.be.false;
    });

    it("returns false if the substitution alphabet is not exactly 26 characters", () => {
        const input = "input";
        const alphabet = "tooshort";
        const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
    });

    it("returns false if the substitution alphabet does not contain unique characters", () => {
        const input = "message";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
    });
  });

  describe("Encoding", () => {
    it("encodes a message using the given substitution alphabet", () => {
        const input = "input";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet);
        const expected = "bgtzd";
    expect(actual).to.equal(expected);
    });

    it("works with any kind of key with unique characters", () => {
        const input = "secret";
        const alphabet = "swae%zrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet);
        const expected = "i%ab%j";
    expect(actual).to.equal(expected);
    });

    it("keeps spaces in tact", () => {
        const input = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet);
        const expected = "yp ysii.rs";
    expect(actual).to.equal(expected);
    });
  });

  describe("Decoding", () => {
    const encode = false; 
    it("decodes a message using the given substitution alphabet", () => {
        const input = "ykrrpik";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet, encode);
        const expected = "message";
    expect(actual).to.equal(expected);
    });

    it("works with any kind of key with unique characters", () => {
        const input = "ysii*rs";
        const alphabet = "*waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, encode);
        const expected = "message";
    expect(actual).to.equal(expected);
    });

    it("keeps spaces in tact", () => {
        const input = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, encode);
        const expected = "my message";
    expect(actual).to.equal(expected);
    });
  });
});
