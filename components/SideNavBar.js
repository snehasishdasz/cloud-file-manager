import React from "react";
import Image from "next/image";
function SideNavBar() {
  return (
    <div className="w-[200px] bg-gray-800 h-screen sticky top-0 z-10 p-5 shadow-blue-600 shadow-md">
      <div className="flex justify-center">
        <Image src="/logo_cloud.png" alt="logo" width={150} height={60} />
      </div>
      <button className="flex gap-2 items-center bg-blue-500 p-2 text-white rounded-md px-3 mt-5 hover:scale-105 transition-all">
        Add New File
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button className="flex gap-2 items-center bg-blue-500 p-2 text-white rounded-md px-3 mt-5 hover:scale-105 transition-all">New Folder <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>
</button>
    </div>
  );
}

export default SideNavBar;
