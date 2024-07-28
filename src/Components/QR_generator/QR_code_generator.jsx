import React from 'react'
import { useState } from 'react';
import QRCode from 'react-qr-code'
import "./styles.css"
function QR_code_generator() {
    
    const [input,setInput] = useState("");
    const [qrcode , setQrCode] = useState("");
    function handleClick()
    {
        setQrCode(input);
        setInput("");
    }
  return (

    <div className='container'>
      <h1>QR CODE GENERATOR</h1>
      <div className='container-elements'>
        <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code" placeholder='Enter your value here'
        value={input}/>
        <button disabled={input && input.trim() ? false :true}  onClick={handleClick}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrcode} size={400} bgColor='#fff'/>
      </div>
   
    </div>
    
  )
}

export default QR_code_generator
