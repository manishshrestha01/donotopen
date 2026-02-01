import React, { useState } from 'react'

const Counter = () => {
    const [count,setcount]=useState(0);
  return (
    <div className='card'>
        <p style={{
            fontSize: "50px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}>
            {count}
        </p>
        <button className='btn' onClick={()=>{
            setcount(count+1)
        }}>
            Add
        </button>
        <button className='btn' onClick={()=>{
            setcount(0)
        }}>
            Reset
        </button>
        <button className='btn' onClick={()=>{
            setcount(count-1)}}>
            Subtract
        </button>
    </div>
  )
}

export default Counter