import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#040e18";
      showAlert("success", "Dark mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled");
    }
  };

  const [alert, setalert] = useState(null);

  const showAlert = (type, message) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const showColor = () => {
    document.body.style.backgroundColor = "#d39e00";

    showAlert("success", "Yellow background is Enabled");
  };

  return (
    <>
      <Router>
        <Navbar
          showColor={showColor}
          mode={mode}
          toggleMode={toggleMode}
          title="TextUtils"
          home="Home"
          about="About"
        />

        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/textutils"
            element={
              <div className="container my-3">
                <TextForm
                  showColor={showColor}
                  showAlert={showAlert}
                  heading="Try TextUtils - Word counter, Character counter, Remove extra spaces"
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/about"
            element={
              <About
                showColor={showColor}
                heading="About us"
                title="TextUtils"
                showAlert={showAlert}
                mode={mode}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <div className="container my-3">
                <TextForm
                  showColor={showColor}
                  showAlert={showAlert}
                  heading="Try TextUtils - Word counter, Character counter, Remove extra spaces"
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
