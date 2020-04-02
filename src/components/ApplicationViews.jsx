import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
// import Home from "./home/Home";
import Login from "./login/login";
import Register from "./login/Register";
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4";
import Task5 from "./tasks/Task5";
import { getUserFromLocalStorage, logout } from "./login/LoginHandler";
import App from "../App";

class ApplicationViews extends Component {
  state = {
    user: getUserFromLocalStorage()
  };

  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Login
                {...props}
                onLogin={user => this.setState({ user: user })}
              />
            );
          }}
        />
        <Route
          exact
          path="/register"
          render={props => {
            return (
              <Register
                {...props}
                onRegister={user => this.setState({ user: user })}
              />
            );
          }}
        />
        <Route
          path="/task-1"
          render={props => {
            return this.state.user ? <Task1 /> : <Redirect to="/" />;
          }}
        />
        <Route
          path="/task-2"
          render={props => {
            return this.state.user ? <Task2 /> : <Redirect to="/" />;
          }}
        />
        <Route
          path="/task-3"
          render={props => {
            return this.state.user ? <Task3 /> : <Redirect to="/" />;
          }}
        />
        <Route
          path="/task-4"
          render={props => {
            return this.state.user ? <Task4 /> : <Redirect to="/" />;
          }}
        ></Route>
        <Route
          path="/task-5"
          render={props => {
            return this.state.user ? <Task5 /> : <Redirect to="/" />;
          }}
        ></Route>
      </>
    );
  }
}
export default withRouter(ApplicationViews);
