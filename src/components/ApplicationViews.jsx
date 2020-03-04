import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Test1 from "../components/tests/Test1";
import Test2 from "../components/tests/Test2";
import Test3 from"../components/tests/Test3";
 
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
        path="/test1"
        render={props => {
          return <Test1 />;
        }}
      />
      <Route
        path="/test2"
        render={props => {
          return <Test2 />;
        }}
      />
      <Route
        path="/test3"
        render={props => {
          return <Test3 />;
        }}
      />
    </>
  );
};
 
export default ApplicationViews;