import React, { useState } from "react";
import ReactModal from "react-modal";
import Caesar from "./Caesar";
import Polybius from "./Polybius";
import Sub from "./Sub";
import "../styles/Home.css"
ReactModal.setAppElement('div');

export default function Home(){

    const [caesarModalOpen, setCaesarModalOpen] = useState(false)
    const [polybiusModalOpen, setPolybiusModalOpen] = useState(false)
    const [subModalOpen, setSubModalOpen] = useState(false)

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '15px',
          padding: '70px',
        },
      };

    const afterOpenModal = (e) => {
        // different background colors for each modal

        e.contentEl.ariaLabel === "caesar" ? e.contentEl.style.backgroundColor = "#51A5FF" :
        e.contentEl.ariaLabel === "polybius" ? e.contentEl.style.backgroundColor = "#4CD169" :
        e.contentEl.style.backgroundColor = "#927CF3";

        // same overlay background color for each modal
        e.overlayEl.style.backgroundColor = "#00000040"
    };

    return(
        <div id="Home">
            <h1>Decoder Ring</h1>
            <div className="method">
                <h2 onClick={()=>setCaesarModalOpen(!caesarModalOpen)}>Caesar Shift</h2>
                <p>The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.</p>
                <ReactModal
                    isOpen={caesarModalOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={()=>setCaesarModalOpen(false)}
                    style={customStyles}
                    contentLabel="caesar">
                    <Caesar/>
                </ReactModal>
            </div>

            <div className="method">
                <h2 onClick={()=>setPolybiusModalOpen(true)}>Polybius Square</h2>
                <p>The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".</p>
                <ReactModal
                    isOpen={polybiusModalOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={()=>setPolybiusModalOpen(false)}
                    style={customStyles}
                    contentLabel="polybius">
                    <Polybius/>
                </ReactModal>
            </div>

            <div className="method">
            <h2 onClick={()=>setSubModalOpen(true)}>Substitution Cipher</h2>
            <p>The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.</p>
                    <ReactModal
                    isOpen={subModalOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={()=>setSubModalOpen(false)}
                    style={customStyles}
                    contentLabel="sub">
                    <Sub/>
                </ReactModal>
            </div>
        </div>
    )
};

