import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./navBar";
import About from "./about";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/nav" element={<NavBar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
