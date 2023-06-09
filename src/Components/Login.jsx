import React, { useState, useRef } from 'react'
import "../Styles/login.css"
import { Route , useNavigate, Link} from 'react-router-dom';



const Login = () => {


    const ref = useRef();

    let [text,setText] = useState("");
    const handleChange=(text)=>{
        setText(text.target.value)
    }

    let [text1,setText1] = useState("");
    const handleChange1=(text)=>{
        setText1(text.target.value)
    }

   
    const handleClick=()=>{

        console.log(ref.current.value);
        if(text==="hello" && text1==="hello"){
            // alert("login successful")
            Nav('/Home');
        }
        else{
            alert("Wrong details")
        }

        // console.log(ref.current);
      
    }

    const Nav = useNavigate();

  return (
    <div>
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Login Form</h2>
       
        <div className="card mt-3">

          <div className="card-body cardbody-color p-lg-5">

            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" ref={ref} id="Username" value={text}  onChange={handleChange} aria-describedby="emailHelp"
                placeholder="User Name"/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" value={text1} onChange={handleChange1} placeholder="password"/>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100" onClick={handleClick}>Login</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? 
              <Link to="/Register" className="text-dark fw-bold">
               Create an Account
              </Link>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


    </div>
  )
}

export default Login