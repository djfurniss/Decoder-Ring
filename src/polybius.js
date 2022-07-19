// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphGrid = [
    ['a', 'f', 'l', 'q', 'v'],
    ['b', 'g', 'm', 'r', 'w'],
    ['c', 'h', 'n', 's', 'x'],
    ['d', 'i/j', 'o', 't', 'y'],
    ['e', 'k', 'p', 'u', 'z']
  ]

  function polybius(input, encode = true) {
    let result = ''
  //---ENCODING---
    if(encode && typeof input === 'string'){
        input = input.toLowerCase()
        for(let i = 0; i < input.length; i++){
          if(input.charCodeAt(i)<97||input.charCodeAt(i)>122) result += input[i];
          if(input[i] === 'i' || input[i] === 'j') result += 42 ;
            for(let j = 0; j <alphGrid.length; j++){
              if(alphGrid[j].includes(input[i])){
                result += `${j+1}${alphGrid[j].indexOf(input[i])+1}`
              }
            }
          }
      // console.log(result)
      return result.trim()
      }
    //---DECODING---
      if(!encode){
        if(typeof input == "number") input = input.toString()
        const decodeNum = input.split(" ")
            if (decodeNum.join("").length%2==1)return false; 
          decodeNum.forEach((num)=>{
            for (let i = 0; i < num.length; i+=2){
              // console.log(num[i], num[i+1])
              result += alphGrid[num[i]-1][num[i+1]-1]
            }
            result += ` `
          })
      // console.log(result)
      return result.trim()
      }
    return false; 
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
