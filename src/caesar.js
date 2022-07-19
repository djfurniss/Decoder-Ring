// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
      //---guard clauses---
    if(!input ||!shift ||shift>25|| shift<-25) return false;
    
    let result = '' //placeholder to return
    input = input.toLowerCase() //input to lowercase
    encode == false ? shift = shift*-1 : shift = shift; //determines which way to shift depending on the intention to encode or decode
    
    for (let i = 0; i < input.length; i++){ //loops through the input string to access each character
      if(input.charCodeAt(i)<97||input.charCodeAt(i)>122){ //checks if the current index's character is not an alphabet
        result+= input[i];
      }else if(input.charCodeAt(i)+shift <97){ //makes sure the shift doesn't make the encoded message "fall off" the alphabet
          result += String.fromCharCode(input.charCodeAt(i)+shift + 26)
      }else if(input.charCodeAt(i)+shift > 122){ //makes sure the shift doesn't make the encoded message "fall off" the alphabet
          result += String.fromCharCode(input.charCodeAt(i)+shift - 26)
      }else{
          result += String.fromCharCode(input.charCodeAt(i)+shift)
      }
    }//end of loop
  return result.trim()
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
