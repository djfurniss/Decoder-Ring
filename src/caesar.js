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


//------extra functionality testing-------
// function caesar(input, shift, encode = true) {
//   // if(!input || !shift || shift>25 || shift<-25) return false;
//   let result = ''
//   char = input.toLowerCase()
  
//     encode == false ? shift = shift*-1 : shift = shift;
//   for (let i = 0; i < char.length; i++){
//     if(char.charCodeAt(i)<97||char.charCodeAt>122){
//         result += input[i];
//     }else if(char.charCodeAt(i)+shift <97){
//         result += String.fromCharCode(char.charCodeAt(i)+shift + 26)
//     }else if(char.charCodeAt(i)+shift > 122){
//         result += String.fromCharCode(char.charCodeAt(i)+shift-26)
//     }else{
//         result += String.fromCharCode(char.charCodeAt(i)+shift)
//     }
//   }//end of loop
// console.log(result)
// // return result 
// }

// caesar("I'm sad", -2) //encoding (g'k qyb)
// caesar("g'k qyb", -2, false) //decoding (i'm sad)

// // console.log('a,z'.charCodeAt(2)) //a = 97, z = 122
// // console.log(122-97)//25
// //String.fromCharCode(115)//> 's'
//-------------------







module.exports = { caesar: caesarModule.caesar };
