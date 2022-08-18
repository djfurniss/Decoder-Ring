// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    //this grid mimics the rows and columns of the polybius square 
    //each array represents a column; each array's indexes represent the rows and are referenced respectively (adding 1 to each since indicies start at 0)
  const alphGrid = [ 
    ['a', 'f', 'l', 'q', 'v'],
    ['b', 'g', 'm', 'r', 'w'],
    ['c', 'h', 'n', 's', 'x'],
    ['d', 'i/j', 'o', 't', 'y'],
    ['e', 'k', 'p', 'u', 'z']
  ]

  function polybius(input, encode = true) {
    let result = '' //placeholder to return
    //---encoding---
      if(encode && typeof input === 'string'){
      input = input.toLowerCase() //turns all input lowercase
        
        for(let i = 0; i < input.length; i++){ //loops through the input string to access each character
          if(input.charCodeAt(i)<97||input.charCodeAt(i)>122) result += input[i]; //catches all characters that aren't an alphabet to leave them in tact
          if(input[i] === 'i' || input[i] === 'j') result += 42 ; //guard clause for letters 'i' and 'j' 
            for(let j = 0; j <alphGrid.length; j++){ //inner loop to reference the polybius square grid 
              if(alphGrid[j].includes(input[i])){ //finds which array has the current character
                result += `${j+1}${alphGrid[j].indexOf(input[i])+1}` //concats template literals of the indexed location of the letter (adding 1 to each)
              }
            }
          }
      return result.trim()
      }
    //---decoding---
      if(!encode){
        if(typeof input == "number") input = input.toString() //makes sure it's always dealing with a string
        const decodeNum = input.split(" ") //splits each set of numbers into an array
        if(decodeNum.join("").length%2==1)return false; //makes sure the total length of numbers excluding spaces is even
          decodeNum.forEach((num)=>{ //excecutes on each set of numbers
            for (let i = 0; i < num.length; i+=2){ //increments by two for each pair of numbers to be set to one character
              result += alphGrid[num[i]-1][num[i+1]-1] //references to the indecies of the polybius square grid (-1) to assign the character
            }
            result += ` ` //keeps the spaces in between each word
          })
      return result.trim()
      }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
