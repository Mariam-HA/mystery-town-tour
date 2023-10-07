import React from "react";
import townSquareImage from "../../assets/images/townSquare.jpg";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${townSquareImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="text-center p-5">
        <h1 className="text-5xl mb-4 text-white font-bold tracking-wide">
          Welcome to Mystery Town!
        </h1>
        <p className="text-2xl text-white font-light mb-8">
          Explore the town and discover its secrets. Choose a place to begin
          your journey...
        </p>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Start Exploring
        </button>
      </div>
    </div>
  );
}

export default Home;
