import React, { useState } from 'react'
import copy from "copy-to-clipboard"; 
import Header from './Header';

const Page1 = (props) => {
  
  let [text,setText] = useState("");
  const handleChange=(text)=>{
    setText(text.target.value)
  }

  const handleClear=()=>{
    setText("");

  }

  const handleUpper=()=>{
    setText(text.toUpperCase());
  }

  const handleLower=()=>{
    setText(text.toLowerCase());
  }


  const handleCopy=()=>{

    copy(text);

    // const x= document.getElementById("floatingTextarea2");
    // x.select();
    // navigator.clipboard.writeText(x.value);

    alert("Text Copied");
    
  }

  return (
    <>
    <Header name="ONE-ON"/>
    <div className="mx-auto">

            <h1 className=' col-sm-6 mt-4 mx-auto text-center text-primary'>Text Convertor</h1>
            <div class="form-floating">
                     <textarea className="form-control mx-auto" placeholder="Leave a comment here" value={text} onChange={handleChange} id="floatingTextarea2" style={{height: "100px", width:"900px"}}></textarea>
                     <label for="floatingTextarea2" style={{marginLeft:"150px"}}>Write your text here</label>
            </div>
            
            <button disabled={text.length===0} type="button" className="btn btn-primary mt-4" onClick={handleClear} style={{marginLeft:"140px"}}>Clear</button>
            <button disabled={text===text.toUpperCase()} type="button" className="btn btn-primary mt-4 ms-4" onClick={handleUpper}>UpperCase</button>
            <button disabled={text===text.toLowerCase()} type="button" className="btn btn-primary mt-4 ms-4" onClick={handleLower}>LowerCase</button>
            <button type="button" className="btn btn-primary mt-4 ms-4" onClick={handleCopy}>CopyText</button>

            <h3 className='text-secondary mt-3' style={{marginLeft:"140px"}}>Number of Characters : {text.length}</h3>

    </div>
    </>
  )
}

export default Page1