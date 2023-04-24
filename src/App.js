import "./App.css";
import React, { useState } from "react";
import Alert from "./component/Alert";
import Forms from "./component/FormRedio";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="textupper"
          abouttext="About us"
          Formtext="Register Now"
        />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signup" element={<Forms />} />
          <Route exact
            path="/"
            element={
              <Textform title="Enter Some text Here" showAlert={showAlert} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
