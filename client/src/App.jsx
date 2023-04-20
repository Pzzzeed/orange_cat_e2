import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/styles/App.css";
import "./assets/styles/login.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FormRegister from "./pages/RegisterPage"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<FormRegister/>} />
      </Routes>
    </div>
  );
}

export default App;
