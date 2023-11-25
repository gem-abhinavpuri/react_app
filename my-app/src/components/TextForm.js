import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDeleteClick = () => {
    setText("");
    setPlace(0);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    setPlace(event.target.value.length);
  };

  const [text, setText] = useState("");
  const [place, setPlace] = useState(0);

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter Text Here"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary me-3" onClick={handleUpClick}>
        {props.button1}
      </button>
      <button className="btn btn-danger me-3" onClick={handleDeleteClick}>
        {props.button2}
      </button>
      <span className="badge bg-secondary">Count: {place}</span>
    </div>
  );
}
