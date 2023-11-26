import "./App.css";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="Word Counter" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm
          heading="Enter text to analyze"
          button1="Convert to UpperCase"
          button2="Convert to LowerCase"
          button3="Clear"
          button4="Copy Text"
          mode={mode}
        />

        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
