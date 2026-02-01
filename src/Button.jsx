import { useState } from "react"

function Button() {
  const [count,setCount]=useState(0);
  return (
   <div className="card">
    <p className="card-h2">You have clicked {count} times</p>
     <button className="btn" onClick={()=>{
      setCount(count+1);
     }}>
        Click Me
    </button>
   </div>
  )
}

export default Button