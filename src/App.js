import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup";
import NavBar from "./components/navbar";
import Login from "./components/login";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes className="content">
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
