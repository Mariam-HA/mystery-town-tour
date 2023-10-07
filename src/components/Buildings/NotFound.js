import React from "react";
import notFoundImage from "../../assets/images/oldCompasst.jpg";

function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${notFoundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="text-center p-5 z-10 relative">
        <h2 className="text-5xl mb-4 text-white font-bold">Lost?</h2>
        <p className="text-2xl text-white mb-8">
          You seem to have taken a wrong turn. Head back to the town square...
        </p>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Return Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
