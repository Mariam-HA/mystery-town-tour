import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mystery Town Tour</h1>
          <nav className="space-x-4">
            <Link className="hover:text-yellow-300" to="/">
              Home
            </Link>
            <Link className="hover:text-yellow-300" to="/library">
              Library
            </Link>
            <Link className="hover:text-yellow-300" to="/cafe">
              Cafe
            </Link>
            <Link className="hover:text-yellow-300" to="/museum">
              Museum
            </Link>
            <Link className="hover:text-yellow-300" to="/mystery">
              Mystery
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
