import React, { useState } from 'react'

const Color = () => {
    const [color,setcolor]=useState("#FFFFFF");
    function changeColor(e){
      setcolor(e.target.value)
    }
  return (
    <div className='card color'>
        <h1>Colour Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected Colour : {color}</p>
        </div>
        <label >
          Select a Colour :
        </label>
        <input type="color" value={color} onChange={changeColor}/>
    </div>
  )
}

export default Color