import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Task1 from "../components/tests/Task1";
import Task2 from "../components/tests/Task2";
import Task3 from"../components/tests/Task3";
 
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
    </>
  );
};
 
export default ApplicationViews;