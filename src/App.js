import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup";
import NavBar from "./components/navbar";
import "./App.css";
import Login from "./components/login";

function App() {
  return (
    <div>
      <NavBar />

      <Routes className="content">
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div>Hi</div>} />
      </Routes>
    </div>
  );
}

export default App;
