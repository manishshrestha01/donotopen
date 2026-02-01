import React, { useEffect, useState } from "react";

const Resolution = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", setSize);
    console.log("Add");

    return()=>{
        window.removeEventListener("resize", setSize);
    console.log("remove");

    }
  }, []);
  useEffect(() => {
    document.title=`Size is ${width}px x ${height}px`;
  }, [width,height])
  
  function setSize() {
    setwidth(window.innerWidth);
    setheight(window.innerHeight);
  }
  return (
    <div className="card card-h2">
      <h1 style={{ textDecorationLine: "underline" }}>Resolution</h1>
      <p style={{ fontSize: 40 }}>Width:{width}px</p>
      <p style={{ fontSize: 40 }}>Height:{height}px</p>
    </div>
  );
};

export default Resolution;
