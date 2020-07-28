import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Introduction from "./Components/intro";
import About from "./Components/About";
import Services from "./Components/Services";
import MoreInfo from "./Components/MoreInfo";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Services />
      <MoreInfo />
      <Portfolio />
      <Team />
      <ContactUs />
    </div>
  );
}

export default App;
