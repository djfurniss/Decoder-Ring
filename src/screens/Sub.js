import React, { useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import "../styles/Sub.css"

export default function Sub(){
// --- STATE HOOKS --- 
    const [encode, setEncode] = useState(true);
    const [message, setMessage] = useState("");
    const [alphabetKey, setAlphabetKey] = useState("");
    const [output, setOutput] = useState("");
    const [err, setErr] = useState(null);
    const [copied, setCopied] = useState(false);
// --- HANDLERS ---
    const handleCopy = () => {
        navigator.clipboard.writeText(output)
            .then(() => {
                setCopied(true)
            },
            (err) => { /* failure */
                console.log(err)
            }
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(null);
        setCopied(false);
        setOutput(substitution(message, alphabetKey, encode))
    }

// --- RETURN --- 
    return(
        <div id="Sub">
            <div id="options">
                <button 
                    onClick={()=>{
                        setEncode(true);
                        setErr(null);
                    }} 
                    style={encode ? activeStyle : inactiveStyle}>
                    encode
                </button>
                <button 
                    onClick={()=>{
                        setEncode(false);
                        setErr(null);
                    }} 
                    style={encode ? inactiveStyle : activeStyle}>
                    decode
                </button>
            </div>

            {err && <p id="err">{err}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="message"
                    placeholder="message"
                    value={message}
                    onChange={({target})=>setMessage(target.value)}/>
                <input
                    type="text"
                    name="alphabet key"
                    placeholder="alphabet key"
                    value={alphabetKey}
                    onChange={({target})=>setAlphabetKey(target.value)}/>
                <button type="submit">{encode ? "encode" : "decode"} message</button>
            </form>

            <p>Output:</p>
            {output && 
            <div>
                <p className="row">{output}</p>

                {copied ? 
                <div className="row">
                    <IoCheckmark></IoCheckmark>
                    <p>copied</p>
                </div>
                :
                <div className="row">
                    <IoClipboardOutline
                        onClick={handleCopy}
                        style={{cursor: 'pointer'}}>
                    </IoClipboardOutline>
                </div>}
            </div>
            }
        </div>
    )
};

//---checks a string's uniqueness character by character---
const checkUniqueness = (string)=>{ 
    let charArr = string.split("") //each character = an element in an array
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

// --- BOOL DETERMINED STYLES --- 
const activeStyle = {
    backgroundColor: '#fff',
}

const inactiveStyle = {
    backgroundColor: '#b0b0b0',
    color: '#545454',
    cursor: 'pointer',
}