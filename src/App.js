import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import auth from "./services/authService";
import SignUp from "./components/signup";
import Users from "./components/users";
import Login from "./components/login";
import Logout from "./components/logout";
import Home from "./components/home";
import Classroom from "./components/classroom";
import ClassesNew from "./components/classesNew";
import AddUser from "./components/addUser";
import HomePage from "./components/homePage";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

const theme = createTheme();

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <React.Fragment>
          <ToastContainer />

          <main className="container">
            <Routes className="content">
              <Route path="/signup" element={<SignUp />} />
              <Route path="/adduser" element={<AddUser />} />
              <Route path="/users" element={<Users />} />
              <Route path="/classroom" element={<Classroom />} />
              <Route path="/classes" element={<ClassesNew />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
