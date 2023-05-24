import React, { useContext } from 'react'
import {userData} from '../App'


const Comp7 = () => {
  const data = useContext(userData);
  return (
    <div>Comp7
        <h1>{data}</h1>
    </div>
  )
}

export default Comp7