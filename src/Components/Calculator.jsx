import React, { useState } from 'react'
import Header from './Header';

const Calculator = (props) => {

    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();
    const [input3, setInput3] = useState();

    const handleChange=(e)=>{
        setInput1(e.target.value);
    }
    const handleChange1=(a)=>{
        setInput2(a.target.value);
    }
    const handleClick=()=>{
        const x=parseInt(input1)+parseInt(input2);
        setInput3(x);
    }
    const handleClick1=()=>{
        const x=parseInt(input1)-parseInt(input2);
        setInput3(x);
    }
    const handleClick2=()=>{
        const x=parseInt(input1)*parseInt(input2);
        setInput3(x);
    }
    const handleClick3=()=>{
        const x=parseInt(input1)/parseInt(input2);
        setInput3(x);
    }

    const handleClear=()=>{
        setInput3("");
        setInput2("");
        setInput1("");
    }
   

  return (
    <>
    <Header name="ONE-ON"/>
    <div className="text-center mt-4">
    <h1 className=' col-sm-6 mt-2 mx-auto text-center text-primary'>Calculator</h1>

    <input className="ms-3 me-4 mt-4" type="number" onChange={handleChange} value={input1} placeholder="Enter Input 1"/>
    <input type="number" value={input2} onChange={handleChange1} placeholder="Enter Input 2" />
    <div className="mt-4">
    <h3>Output</h3>
    <input type="number" value={input3} placeholder="Answer" />
    </div>
    <div className="mt-3 ">
    <button type="button" onClick={handleClick} class="btn btn-success ">Add</button>
    <button type="button" onClick={handleClick1} class="btn btn-success mx-3">Substract</button>
    <button type="button" onClick={handleClick2} class="btn btn-success">Multiply</button>
    <button type="button" onClick={handleClick3} class="btn btn-success mx-3">Divide</button>
    </div>
    <button type="button" className="btn btn-primary mt-4" onClick={handleClear} >Clear</button>
    </div>


    </>
  )
}

export default Calculator