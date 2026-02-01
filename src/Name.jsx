import React, { useState } from 'react'

const Name = () => {
    const [name,setname]=useState("Guest");
    const [age,setage]=useState(0);
    const [IsEmployed,setIsEmployed]=useState(false);
  return (
    <div className='card'>
        <p className='card-h2'>
            Name = {name}
        </p>
        <p className='card-h2'>
            Age = {age}
        </p>
        <p className='card-h2'>
            Is Employed = {IsEmployed ? "Yes" : "No"}
        </p>
        <button className='btn' onClick={()=>{setname("Manish")}}>
        Find Name
        </button>
        <button className='btn' onClick={()=>{setage(21)}}>
        Find Age
        </button>
        <button className='btn' onClick={()=>{setIsEmployed(
            !IsEmployed
        )
        }}>
        Find Job Status 
        </button>
    </div>
  )
}

export default Name