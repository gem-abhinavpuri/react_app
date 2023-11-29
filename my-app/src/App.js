import "./App.css";
import Alerts from "./components/Alerts";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//  https://reactrouter.com/en/main/routers/picking-a-router

import React, { useState } from "react";
import AlertWithAudio from "./components/AlertWithAudio";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = (newMode, backgroundColor, message) => {
    setMode(newMode);
    document.body.style.backgroundColor = backgroundColor;
    showAlert(message, "success");
    // document.title =
    //   "Word Counter - " +
    //   `${backgroundColor === "#042743" ? "dark" : backgroundColor}` +
    //   " mode";

    // setInterval(() => {
    //   document.title = "Moye Moye";
    // }, 2000);
    // setInterval(() => {
    //   document.title =
    //     "Word Counter - " +
    //     `${backgroundColor === "#042743" ? "dark" : backgroundColor}` +
    //     " mode";
    // }, 4000);
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
    <BrowserRouter>
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

      <Alerts alert={alert} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="Enter text to analyze"
              button1="Convert to UpperCase"
              button2="Convert to LowerCase"
              button3="Clear"
              button4="Copy Text"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route exact path="/about" element={<AboutUs mode={mode} />} />
        <Route exact path="/danger" element={<AlertWithAudio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
