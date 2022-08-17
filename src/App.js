import "./App.css";
import React from "react";
import { Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <SlideRoutes location={location} duration={800} effect={"ease-in-out"} basename={process.env.PUBLIC_URL}>
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
