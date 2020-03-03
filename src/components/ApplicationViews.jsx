import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Test1 from "../components/tests/Test1";
 
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
    </>
  );
};
 
export default ApplicationViews;