// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  //---checks a string's uniqueness character by character---
  const checkUniqueness = (string)=>{ 
    charArr= string.split("") //each character = an element in an array
    const result = charArr.reduce((acc, char)=>{ //reducing back into a string one character at a time
      if(!acc.includes(char)) acc += char //concats when the acc doesn't already include the same character
      return acc
    }, "")//reduce all unique characters into a separate string
  return result.length === string.length //returns a boolean; true if each character passes, false if not
  }

  function substitution(input, alphabet, encode = true) {
        //---guard clause(s)---
      if(!alphabet || alphabet.length !== 26 || !checkUniqueness(alphabet)) return false; 
    input = input.toLowerCase(); //makes sure to handle input all lowercased
    let result = "" //placeholder to return 
    let words = input.split(" ") //creates an array where each input word is an element 
      words.forEach(word=>{ //executes on each word
        for (let i = 0; i < word.length; i++){ //loops through each character of the word
            if(encode)result += alphabet[word[i].charCodeAt()-97] //offsets from charCodeAt 'a'
            if(!encode) result += String.fromCharCode(alphabet.indexOf(word[i])+97)
        }
        result += " " //keeps the spaces between each word;
      })
  return result.trim() //trims the extra space from the end; 
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
