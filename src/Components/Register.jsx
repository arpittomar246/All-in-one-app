import React from 'react'
import "../Styles/register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <div className="wrapper">
        <div className="form-left">
            <h2 className="text-uppercase">information</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
            </p>
            <p className="text">
                <span>Sub Head:</span>
                Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.
            </p>
            <div className="form-field">
                <Link to="/Login">
                <input type="submit" className="account" value="Have an Account?"/>
                </Link>
                
            </div>
        </div>
        <form className="form-right">
            <h2 className="text-uppercase">Registration form</h2>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>First Name</label>
                    <input type="text" name="first_name" id="first_name" className="input-field"/>
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Last Name</label>
                    <input type="text" name="last_name" id="last_name" className="input-field"/>
                </div>
            </div>
            <div className="mb-3">
                <label>Your Email</label>
                <input type="email" className="input-field" name="email" required/>
            </div>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>Password</label>
                    <input type="password" name="pwd" id="pwd" className="input-field"/>
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Current Password</label>
                    <input type="password" name="cpwd" id="cpwd" className="input-field"/>
                </div>
            </div>
            <div className="mb-3">
                <label className="option">I agree to the <a href="#">Terms and Conditions</a>
                    <input type="checkbox" checked/>
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="form-field">
                <input type="submit" value="Register" className="register" name="register"/>
            </div>
        </form>
    </div>
    </>
  )
}

export default Register