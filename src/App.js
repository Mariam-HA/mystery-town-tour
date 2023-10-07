import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Buildings/Home";
import Library from "./components/Buildings/Library";
import Cafe from "./components/Buildings/Cafe";
import Museum from "./components/Buildings/Museum";
import Mystery from "./components/Buildings/Mystery";
import NotFound from "./components/Buildings/NotFound";
import Navbar from "./components/Navbar";

function App() {
  let currentBackgroundColor = "#273340";

  return (
    <Router>
      <div
        style={{
          backgroundColor: currentBackgroundColor,
          height: "100vh",
          width: "100vw",
        }}
      >
        <Navbar />

        <div className="flex justify-center items-center h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/museum" element={<Museum />} />
            <Route path="/mystery" element={<Mystery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white shadow-lg">
          Click on a location to unveil its mysteries...
        </div>
      </div>
    </Router>
  );
}

export default App;
