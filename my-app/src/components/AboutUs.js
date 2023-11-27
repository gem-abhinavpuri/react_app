import React from "react";

export default function AboutUs(props) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item border border-3">
        <h2 className="accordion-header" id="flush-headingOne" >
          <button
          style={{
            backgroundColor: props.mode === "light" ? "black" : "white",
            color: props.mode === "light" ? "white" : "black",
          }}
            className="accordion-button bg-{} collapsed border border-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            About Us
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"

        >
          <div
            className="accordion-body"
          >
            <strong>Welcome to our Word Counter App!</strong>
            We aim to provide a simple yet powerful tool to analyze text and
            manipulate it based on your preferences. Our app offers various
            functionalities to convert text to upper or lower case, clear text,
            and copy text to your clipboard. Whether you need to manipulate text
            for work, study, or just for fun, our app is here to assist you. We
            hope you find it useful!
            <br></br>
            <strong>~ Abhinav Puri</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
