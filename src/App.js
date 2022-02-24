import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup";
import NavBar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />

      <Routes className="content">
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<div>Hi</div>} />
      </Routes>
    </div>
  );
}

export default App;
