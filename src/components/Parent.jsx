import React, { useState } from 'react'
import FirstChild from './FirstChild'
const Parent = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
       <h1>Parent Components</h1> 
       <FirstChild passData={count}/>
    </div>
  )
}

export default Parent