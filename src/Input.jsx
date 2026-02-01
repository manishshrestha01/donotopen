import React, { useState } from "react";

const Input = () => {
  const [name, setname] = useState("Potato");
  const [quantity, setquantity] = useState(10);
  const [comment, setcomment] = useState("");
  function NameChange(e) {
    setname(e.target.value);
  }
  function QuantityChange(e) {
    setquantity(e.target.value);
  }
  function CommentChange(e) {
    setcomment(e.target.value);
  }
  return (
    <div className="card">
      <input value={name} onChange={NameChange} className="card-h2" />
      <p className="card-h2">Name : {name}</p>
      <input
        value={quantity}
        onChange={QuantityChange}
        type="number"
        className="card-h2"
      />
      <p className="card-h2">Quantity : {quantity}</p>
      <textarea
        value={comment}
        onChange={CommentChange}
        className="card-h2"
        placeholder="Write comment"
      ></textarea>
      <p className="card-h2">Comment : {comment}</p>
    </div>
  );
};

export default Input;
