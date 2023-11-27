import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowecase", "success");
  };
  const handleDeleteClick = () => {
    setText("");
    props.showAlert("Text deleted", "success");
  };
  const handleCopyClick = async () => {
    if (!navigator.clipboard) {
      props.showAlert("Text cannot copied", "danger");

      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      props.showAlert("Text copied to clipboard", "success");
    } catch (err) {
      props.showAlert("Text failed copy", "danger");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div>
              <div>
                <h1
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                >
                  {props.heading}
                </h1>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Enter Text Here"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                      backgroundColor: props.mode === "dark" ? "grey" : "white",
                      color: props.mode === "dark" ? "white" : "black",
                    }}
                    id="mybox"
                    rows="8"
                  ></textarea>
                </div>
                <div id="text-funx" className="container-fuild">
                <button
                  className="btn btn-primary me-3"
                  onClick={handleUpClick}
                >
                  {props.button1}
                </button>
                <button
                  className="btn btn-primary me-3"
                  onClick={handleLowerClick}
                >
                  {props.button2}
                </button>
                <button
                  className="btn btn-danger me-3"
                  onClick={handleDeleteClick}
                >
                  {props.button3}
                </button>
                <button
                  className="btn btn-outline-secondary me-3"
                  onClick={handleCopyClick}
                  style={{
                    color: props.mode === "dark" ? "white" : "black",
                    borderColor: props.mode === "dark" ? "white" : "grey",
                  }}
                >
                  {props.button4}
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
              </div>
              
              <div
                className="alert alert-success my-5"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#80016a" : "#d1e7dd",
                  color: props.mode === "dark" ? "white" : "green",
                }}
                role="alert"
              >
                <h2>Summary</h2>
                <p>
                  There are {text.length} characters,{" "}
                  {text.match(/\S+/g)?.length || 0} words and{" "}
                  {text.split("\n").length} lines in the paragraph. Time takes
                  too read this paragraph is about{" "}
                  {0.008 * text.match(/\S+/g)?.length || 0} minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
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
