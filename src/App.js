import "./App.css";
import React from "react";
import { Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Header from "../src/components/parts/Header";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Works from "../src/components/pages/Works";
import Contact from "../src/components/pages/Contact";
import Footer from "../src/components/parts/Footer";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <SlideRoutes location={location} duration={800} effect={"ease-in-out"}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/About/"} element={<About />} />
        <Route path={"/Works/"} element={<Works />} />
        <Route path={"/Contact/"} element={<Contact />} />
      </SlideRoutes>
      <Footer />
    </>
  );
};

export default App;
