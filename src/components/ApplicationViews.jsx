import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Navbar from "./nav/NavBar";
import Login from "./login/login";
import Register from "./login/Register";
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4";
import Task5 from "./tasks/Task5";
import Task6 from "./tasks/Task6";
import Task7 from "./tasks/Task7";
import Task8 from "./tasks/Task8";
import Task9 from "./tasks/Task9";
import Task10 from "./tasks/Task10";
import Admin from "./home/Admin";
import Practice from "./tasks/PracticeTask";
import { getUserFromSessionStorage, logout } from "./login/LoginHandler";
import App from "../App";

class ApplicationViews extends Component {
  state = {
    user: getUserFromSessionStorage(),
  };

  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={(props) => {
            return (
              <>
                <Navbar />
                <Login
                  {...props}
                  onLogin={(user) => this.setState({ user: user })}
                />
              </>
            );
          }}
        />
        <Route
          exact
          path="/register"
          render={(props) => {
            return (
              <>
                <Navbar />
                <Register
                  {...props}
                  onRegister={(user) => this.setState({ user: user })}
                />
              </>
            );
          }}
        />
        <Route
          path="/practice"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Practice />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/task-1"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task1 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/task-2"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task2 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/task-3"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task3 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/task-4"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task4 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        <Route
          path="/task-5"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task5 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        <Route
          path="/task-6"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task6 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        <Route
          path="/task-7"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task7 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        <Route
          path="/task-8"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task8 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        <Route
          path="/task-9"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task9 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        <Route
          path="/task-10"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Task10 />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
        <Route
          path="/admin"
          render={(props) => {
            return this.state.user ? (
              <>
                <Navbar />
                <Admin />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        ></Route>
      </>
    );
  }
}
export default withRouter(ApplicationViews);
