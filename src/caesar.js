// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
        if(!input ||!shift ||shift>25|| shift< -25) return false
    let result = ''
    input = input.toLowerCase()
      encode == false ? shift = shift*-1 : shift = shift;
  for (let i = 0; i < input.length; i++){
    if(input.charCodeAt(i)<97||input.charCodeAt(i)>122){
      result+= input[i];
    }else if(input.charCodeAt(i)+shift <97){
        result += String.fromCharCode(input.charCodeAt(i)+shift + 26)
    }else if(input.charCodeAt(i)+shift > 122){
        result += String.fromCharCode(input.charCodeAt(i)+shift-26)
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
