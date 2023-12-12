// import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Vans, Host } from "./pages/index.js";
import { MainNavbar } from "./components/index.js";
import { TestContainer } from "./Test";

function App() {
  return (
    <BrowserRouter>
      <div className="application">
        <header className="main-header">
          <MainNavbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/host" element={<Host />} />
          <Route path="/test" element={<TestContainer />} />
        </Routes>

        <footer className="main-footer">
          <p className="main-footer_text">Ⓒ 2022 #VANLIFE</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
