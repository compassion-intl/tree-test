import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4";

const ApplicationViews = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/task1"
        render={props => {
          return <Task1 />;
        }}
      />
      <Route
        path="/task2"
        render={props => {
          return <Task2 />;
        }}
      />
      <Route
        path="/task3"
        render={props => {
          return <Task3 />;
        }}
      />
      <Route
        path="/task4"
        render={props => {
          return <Task4 />;
        }}
      ></Route>
    </>
  );
};

export default ApplicationViews;
