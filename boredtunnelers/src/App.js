import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./App.css";

// Custom Components
import Team from "./pages/team/Team";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import testPage from "./pages/testPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <React.Fragment>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/test" element={<testPage />} />
    </Routes>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
