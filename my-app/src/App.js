import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Word Counter" aboutText="About" />
      <div className="container">
        {/* <TextForm
          heading="Enter text to analyze"
          button1="Convert to UpperCase"
          button2="Convert to LowerCase"
          button3="Clear"
          button4="Copy Text"
        /> */}

        <AboutUs />
      </div>
    </>
  );
}

export default App;
