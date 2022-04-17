import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import SignUp from "./components/signup";
import NavBar from "./components/navbar";
import Login from "./components/login";
import Logout from "./components/logout";
import Home from "./components/home";
import Classroom from "./components/classroom";
import ClassesNew from "./components/classesNew";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Routes className="content">
            <Route path="/signup" element={<SignUp />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/classes" element={<ClassesNew />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
