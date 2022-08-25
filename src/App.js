import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import Beaches from "./components/Pages/Beaches";
import Mountains from "./components/Pages/Mountains";
import Rivers from "./components/Pages/Rivers";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/beaches" element={<Beaches />}></Route>
          <Route path="/mountains" element={<Mountains />}></Route>
          <Route path="/rivers" element={<Rivers />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
