import React from 'react'
import Comp6 from './Comp6'
import Comp7 from './Comp7'

const Comp3 = (x) => {
  return (
    <div>Comp3
        <h1>{x.name}</h1>
        <Comp6 name={x.name}/>
        <Comp7 name={x.name}/>
    </div>
  )
}

export default Comp3