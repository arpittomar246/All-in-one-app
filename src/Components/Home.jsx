import React from 'react'
import "../Styles/home.css"
import Header from './Header'


const Home = () => {
  
  return (
    <>
    <Header name="ONE-ON"/>
        <div>
            <h1 className='text-center mt-5 text-primary'>All in one site</h1>
            <h3 className='text-center mt-5 '>Welcome to the all in one site, that provides services like </h3>
            <h2 className='text-center '>Calculator, Inc/Dec, Text Editor</h2>
        </div>
    </>
  )
}

export default Home