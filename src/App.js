import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../src/components/parts/Header";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Works from "../src/components/pages/Works";
import Contact from "../src/components/pages/Contact";
import Footer from "../src/components/parts/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About/" element={<About />} />
          <Route path="/Works/" element={<Works />} />
          <Route path="/Contact/" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
