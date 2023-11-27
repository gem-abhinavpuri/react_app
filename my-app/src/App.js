import "./App.css";
import Alerts from "./components/Alerts";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title="Word Counter" mode={mode} toggleMode={toggleMode} />
      <div style={{ height: "55px" }}>
        <Alerts alert={alert} />
      </div>
      <div className="container">
        <TextForm
          heading="Enter text to analyze"
          button1="Convert to UpperCase"
          button2="Convert to LowerCase"
          button3="Clear"
          button4="Copy Text"
          mode={mode}
          showAlert={showAlert}
        />

        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
