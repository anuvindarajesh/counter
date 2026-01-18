import React, { useState } from 'react'
import './counter.css'

const Counter = () => {

    const[counter, setCounter] = useState(0);

    const handleClick1 = () => {
        setCounter(counter + 1);
    }
    const handleClick2 = () => {
        setCounter(counter - 1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <div className='buttons'>
            <button onClick={handleClick2}>-</button>
            {counter}
            <button onClick={handleClick1}>+</button>
        </div>
    </div>
  )
}

export default Counter