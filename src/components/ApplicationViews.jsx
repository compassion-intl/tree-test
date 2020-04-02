import { Route } from "react-router-dom";
import React, { Component } from "react";
// import Home from "./home/Home";
import Login from "./login/login";
import Register from "./login/Register";
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4";
import Task5 from "./tasks/Task5";
import { getUserFromLocalStorage, logout } from "./login/LoginHandler";

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
            return <Login onLogin={user => this.setState({ user: user })} />;
          }}
        />
        <Route
          exact
          path="/register"
          render={props => {
            return (
              <Register onRegister={user => this.setState({ user: user })} />
            );
          }}
        />
        <Route
          path="/task-1"
          render={props => {
            return <Task1 />;
          }}
        />
        <Route
          path="/task-2"
          render={props => {
            return <Task2 />;
          }}
        />
        <Route
          path="/task-3"
          render={props => {
            return <Task3 />;
          }}
        />
        <Route
          path="/task-4"
          render={props => {
            return <Task4 />;
          }}
        ></Route>
        <Route
          path="/task-5"
          render={props => {
            return <Task5 />;
          }}
        ></Route>
      </>
    );
  }
}

export default ApplicationViews;
