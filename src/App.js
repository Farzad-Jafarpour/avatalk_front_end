import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import SignUp from "./components/signup";
import Users from "./components/users";
import Login from "./components/login";
import Logout from "./components/logout";
import Home from "./components/home";
import Classroom from "./components/classroom";
import ClassesNew from "./components/classesNew";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import DataTable from "./components/userDataGrid";

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
              <Route path="/users" element={<Users />} />
              <Route path="/classroom" element={<Classroom />} />
              <Route path="/classes" element={<ClassesNew />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
