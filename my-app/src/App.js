import "./App.css";
import Alerts from "./components/Alerts";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = (newMode, backgroundColor, message) => {
    setMode(newMode);
    document.body.style.backgroundColor = backgroundColor;
    showAlert(message, "success");
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
      <Navbar
        title="Word Counter"
        mode={mode}
        toggleMode1={() =>
          toggleMode("dark", "red", "Red mode has been enabled")
        }
        toggleMode2={() =>
          toggleMode("dark", "orange", "Orange mode has been enabled")
        }
        toggleMode3={() =>
          toggleMode("light", "yellow", "Yellow mode has been enabled")
        }
        toggleMode4={() =>
          toggleMode("dark", "#042743", "Dark mode has been enabled")
        }
        toggleMode5={() =>
          toggleMode("light", "white", "White mode has been enabled")
        }
      />
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
