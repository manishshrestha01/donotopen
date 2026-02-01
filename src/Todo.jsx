import React, { useState } from "react";
import Update from "./Update";
const Todo = () => {
  const [tasks, settasks] = useState(["Eat Me", "Lick Me"]);
  const [newtask, setnewtask] = useState("");
  function inputChange(event) {
    setnewtask(event.target.value);
  }
  function Add() {
    if(newtask.trim() !== "")
    settasks(t=>[...t,newtask]);
    setnewtask("");
  }
  function Delete(index) {
    settasks(tasks.filter((_,i) => i !== index)); 
  }
  function MoveUp(index) {
     if (index>0){
        const Updatedtask = [...tasks];
        [Updatedtask[index], Updatedtask[index-1]]=
        [Updatedtask[index-1], Updatedtask[index]];
        settasks(Updatedtask);
     }
  }
  function MoveDown(index) {
    if (index<tasks.length-1){
        const Updatedtask = [...tasks];
        [Updatedtask[index], Updatedtask[index+1]]=
        [Updatedtask[index+1], Updatedtask[index]];
        settasks(Updatedtask);
     }
  }
  return (
    <div className="card">
      <h1 className="card-h2">Todo App</h1>
      <input
        type="text"
        value={newtask}
        placeholder="Enter a task..."
        onChange={inputChange}
      />
      <button className="btn" onClick={Add}>
        Add
      </button>
      <ol className="card-p">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span> 
            <button className="btn" onClick={()=>Delete(index)}> 
                Delete
            </button>
            <button className="btn" onClick={()=>MoveUp(index)}>
                ⬆
            </button>
            <button className="btn" onClick={()=>MoveDown(index)}>
                ⬇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
