import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";
import Task3 from "./tasks/Task3";
import Task4 from "./tasks/Task4";
import Task5 from "./tasks/Task5";

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
};

export default ApplicationViews;
