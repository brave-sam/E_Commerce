//import logo from "./logo.svg";
import { useState } from "react";
import React, { Component } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Alert from "./components/Alert";
import About from "./components/About";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1900);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled ", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route path="/about" element={<About />}></Route>

            <Route path="/" element={<Card />}></Route>
            <Route path="/detailpage" element={<Detail />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
