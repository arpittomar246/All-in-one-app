import React, { createContext, useContext } from 'react'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import userData from '../App';



const Comp1 = () => {
  
 
 
  return (
    <>
    <div>
      Comp1
      <Comp2/>
    <Comp3/>
    </div>
    
    </>
    
    // <div>Comp1
      
    //     {/* <h1>{name.name.Name}</h1> */}
    //     <h1>{x.name}</h1>
    //     <Comp2 name={x.name}/>
    //      <Comp3 name={x.name}/>
    // </div>
    
  )
}

export default Comp1