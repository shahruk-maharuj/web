import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Bottom from "./components/global/Bottom";
import Header from "./components/global/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Bottom />
    </>
  );
}

export default App;
