import { useState } from "react"

const UpdateArray = () => {
    const [fruits,setfruits] = useState(["Apple","Banana","Coconut"]);
    function Addfruits(){
        const newFruit = document.getElementById("fruit").value;
        document.getElementById("fruit").value = "";
        setfruits([...fruits,newFruit]);

    }
    function Removefruits(index){
        setfruits(fruits.filter((_,i)=>i !== index));
    }
  return (
    <div className='card'>
    <h2 className="card-h2">List of Fruits using Update Arrays</h2>
    <ul>
        {fruits.map((fruit,index)=> <li style={{textAlign: "start"}} className="card-p" key={index} onClick={()=>Removefruits(index)}>{fruit}</li> )}
    </ul>
    <input type="text" id="fruit" placeholder="Enter fruit" />
    <button onClick={Addfruits} className="btn">
        Add fruit
    </button>
    </div>
  )
}

export default UpdateArray