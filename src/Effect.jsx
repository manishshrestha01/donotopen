import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setcount] = useState(0);
    const [color, setcolor] = useState("green")
    useEffect(()=>{
         document.title =`Counter is ${count} ${color}`
    },[count,color]);
    function AddCount(){
        setcount(count+1);
    }
    function SubCount(){
        setcount(count-1);
    }
    function SetColor(){
        setcolor(c => c === "green" ? "red" : "green");
    }

  return (
    <div className='card card-h2'>
       <p style={{color:color}}>Count is {count}</p>
       <button className='btn' onClick={AddCount}>Add</button>
       <button className='btn' onClick={SubCount}>Sub</button><br />
       <button className='btn' onClick={SetColor}>Change Color</button>

    </div> 
  )
}

export default Effect