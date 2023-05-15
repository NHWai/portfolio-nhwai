import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import Homesvgtop from "./components/Homesvgtop";
import Homesvgleft from "./components/Homesvgleft";
import Navpanel from "./components/Navpanel";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Navbar />
      <Homesvgtop />
      <Homesvgleft />
      <Navpanel currpage={location.pathname} />
      <AnimatePresence exitBeforeEnter={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
