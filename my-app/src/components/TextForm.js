import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleDeleteClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
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
        <button className="btn btn-primary me-3" onClick={handleLowerClick}>
          {props.button2}
        </button>
        <button className="btn btn-danger me-3" onClick={handleDeleteClick}>
          {props.button3}
        </button>
        <span className="badge bg-secondary me-3">
          Words: {text.match(/\S+/g)?.length || 0}
        </span>
        <span className="badge bg-secondary me-3">
          Characters: {text.length}
        </span>
        <span className="badge bg-secondary">
          Lines: {text.split("\n").length}
        </span>
      </div>
      <div className="alert alert-success my-5" role="alert">
        <h2>Summary</h2>
        <p>
          There are {text.length} characters, {text.match(/\S+/g)?.length || 0}{" "}
          words and {text.split("\n").length} lines in the paragraph. Time takes
          too read this paragraph is about{" "}
          {0.008 * text.match(/\S+/g)?.length || 0} minutes.
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
  button3: PropTypes.string.isRequired,
};

TextForm.defaultProps = { heading: "Enter text to analyze" };
