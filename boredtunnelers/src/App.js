import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


import "./App.css";

// Custom Components
import Team from "./pages/team/Team";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <React.Fragment>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div> */}
      <Homepage/>
      {/* <Team /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
