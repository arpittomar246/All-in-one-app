import React from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
const Header = (props) => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg nav ">
  <div className="container-fluid div1">
    <Link to="/Home" className='text-decoration-none'>
    <a className="navbar-brand" >{props.name}</a>
    </Link>
    



    <div className="collapse navbar-collapse list" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 list1">

      <li className="nav-item">
          
          <Link to="/Home" className='text-decoration-none'>
               <a className="nav-link active" aria-current="page" href="#">Home</a> 
          </Link>
        </li>

        <li className="nav-item" >
          
          <Link to="/Nav" className='text-decoration-none'>
               <a className="nav-link active" aria-current="page" href="#">Calculator</a> 
          </Link>
        </li>

        <li className="nav-item">
          
          <Link to="/Class" className='text-decoration-none'>
          <a className="nav-link" href="#">Inc/dec</a>
          </Link>
        </li>


        <li className="nav-item dropdown">
        

        <Link to="/Convert" className='text-decoration-none'>
        <a className="nav-link" href="#">Text Converter</a>
          </Link>
        
        </li>
      </ul>
    </div>

    <form className="d-flex buttons" role="search">
      <Link to="/Login">
      <button className="button" type="submit">LogOut</button>
      </Link>
       
        
      </form>



  </div>
</nav>
</div>
  )
}

export default Header