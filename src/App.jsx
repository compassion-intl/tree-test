import React from 'react';
import './App.css';
import Navbar from "./components/nav/NavBar";
import ApplicationViews from "./components/ApplicationViews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ApplicationViews />
    </div>
  );
}

export default App;
