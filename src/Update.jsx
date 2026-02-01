import { useState } from "react"

const Update = () => {
    const [update,setupdate] = useState({
        year: 2025,
        model:"BMW",
        type:"Bike"
    });
    function changeYear(event){
        setupdate({...update,year : event.target.value});
    }
        function changeModel(event){
        setupdate({...update,model : event.target.value});
    }
        function changeType(event){
        setupdate({...update,type : event.target.value});
    }
  return (
    <div className="card">
        <h2 className="card-h2">Update Objects</h2>
        <p className="card-h2">Your favourite vehicle is: {update.year} {update.model} {update.type} </p>
        <input type="number" value={update.year} onChange={changeYear}/>
        <input type="text" value={update.model} onChange={changeModel}/>
        <input type="text" value={update.type} onChange={changeType}/>
    </div>
  )
}

export default Update