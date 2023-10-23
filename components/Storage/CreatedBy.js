import React from "react";

function CreatedBy() {
  return (
    <div
      className="p-2 bg-gray-950
        rounded-lg text-center mt-5 md:mt-16"
    >
      <h2 className="font-semibold text-[16px] text-white">
        Created with ❤️ by
      </h2>
      <h2 className="text-[15px] text-white font-bold">Snehasish Das</h2>
      <a href="https://github.com/snehasishdasz" target="_blank">
        <button
          className="bg-black p-1 px-4
            text-[14px] rounded-lg text-white mt-3 border-solid border-2 border-white hover:scale-105"
        >
          Github
        </button>
      </a>
      <a href="https://www.linkedin.com/in/snehasish-das/" target="_blank">
        <button
          className="bg-blue-900 p-1 px-4 ml-5
            text-[14px] rounded-lg text-white mt-3 border-solid border-2 border-white hover:scale-105"
        >
          Linkedin
        </button>
      </a>
    </div>
  );
}

export default CreatedBy;
