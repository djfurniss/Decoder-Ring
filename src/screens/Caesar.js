import React, { useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import "../styles/Caesar.css";

// TODO: style

export default function Caesar(){
// --- STATE HOOKS ---
    const [encode, setEncode] = useState(true);
    const [message, setMessage] = useState("");
    const [shift, setShift] = useState(1);
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
        if (shift === 0){setErr("Shift cannot be zero")}
        if (shift > 25){setErr("Shift cannot be greater than 25")}
        if (shift < -25){setErr("Shift cannot be less than -25")}
        setOutput(caesar(message, shift, encode))
    };

// --- RETURN --- 
    return(
        <div id="Caesar">
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
                    type="number"
                    name="shift"
                    value={shift}
                    onChange={({target})=>{
                        setShift(Number(target.value));
                        setErr(null)
                        }
                    }/>
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


// --- HELPER FUNCTION --- 
function caesar(input, shift, encode = true) {
    if(!input || !shift ||shift>25|| shift< -25) return false
    if (!encode) shift = shift *-1
    let result = ''
    input = input.toLowerCase()

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
    }
    return result.trim()
};

// --- BOOL DETERMINED STYLES --- 
const activeStyle = {
    backgroundColor: '#fff',
}

const inactiveStyle = {
    backgroundColor: '#b0b0b080',
    color: '#54545490',
    cursor: 'pointer',
}