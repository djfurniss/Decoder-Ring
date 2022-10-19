# Top Secret Message Encryption and Decryption App

This application features three unique methods of encrypting and decrypting messages. 

I was responsible for implementing functional JavaScript operations using efficient, readable, and DRY code. 

Check it out [here](https://decoder-ring-nine.vercel.app/) !

## Caeser Shift 
The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

## Polybius Square
The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the below table, the letter "B" would be represented by the numerical pair "21".

| X | 1 | 2 | 3 | 4 | 5 | 
| - | - | - | - | - | - |
| **1** | A | F | L | Q | V |
| **2** | B | G | M | R | W |
| **3** | C | H | N | S | X |
| **4**| D | I/J | O | T | Y |
| **5** | E | K | P | U | Z |


## Substitution Cipher
The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message