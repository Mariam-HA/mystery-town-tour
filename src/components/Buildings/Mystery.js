import React from "react";
import mysteryImage from "../../assets/images/mystery.jpg";

function Mystery() {
  return (
    <div className="mystery-component max-w-xl w-full mx-auto p-6 shadow-lg bg-white rounded-md transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          src={mysteryImage}
          alt="The Dark Alley"
          className="w-full h-96 object-cover mb-5 rounded-t-md"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
          <h2 className="text-3xl text-white font-semibold text-center">
            The Dark Alley
          </h2>
        </div>
      </div>
      <div className="p-5">
        <p>The path less taken, holding mysteries of the town...</p>
        <hr className="my-4" />
        <div className="flex justify-center">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Unveil the Shadows
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mystery;
