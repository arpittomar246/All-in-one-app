import React,{useRef, useState, useEffect} from 'react'

const Form = () => {

    const [num, setNum] = useState(0);
  
    useEffect(()=>{
        number.current=number.current+1
        // setNum(num+1);
    })

    const number = useRef(0);
    const ref = useRef();
    const ref1 = useRef();
    const handleClick=()=>{
        // console.log(ref.current.value);
        
        if(ref.current.value === ''){
            // alert("Input Blank");
            ref1.current.innerHTML='please fill details';
            ref1.current.style.color="red";
        }
        else{
            ref1.current.innerHTML='';
        }
    }
  return (
    <div className='col-sm-2 mt-5 box mx-auto'>

        {/* <input type="text" ref={ref} placeholder='username'/><br/> */}
        {/* <p ref={ref1} ></p> */}
        {/* <input type="password" placeholder='password' /> */}
        <h1>{number.current}</h1>
        <button onClick={()=>{setNum(num+1)}}>login</button>

    </div>
  )
}

export default Form