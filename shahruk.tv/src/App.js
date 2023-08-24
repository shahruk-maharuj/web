import React from "react";
import HomeScreen from "./pages/HomeScreen";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const user = null; /* {
    name: "Shahruk",
  }; */
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
