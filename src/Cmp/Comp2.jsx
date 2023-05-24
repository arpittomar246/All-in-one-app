import React, { useContext } from 'react'
import Comp4 from './Comp4'
import Comp5 from './Comp5'
import userContext from './Comp1';

const Comp2 = (y) => {
  
  return (
    <div>Comp2
      
        <h1>{y.name}</h1>
        <Comp4 name={y.name}/>
        <Comp5 name={y.name}/>
    </div>
  )
}

export default Comp2