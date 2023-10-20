import React, { useState } from "react";
import Image from "next/image";
import menu from "../data/menu.js";
import CreateFolderModal from "./Folder/CreateFolderModal.js";
import UploadFileModal from "./File/UploadFileModal.js";
import { useSession } from "next-auth/react";



function SideNavBar() {
  const {data:session}=useSession()
  const [activeIndex, setActiveIndex] = useState(0);

  return  (
    <div className="w-[200px] bg-gray-800 h-screen sticky top-0 z-10 p-5 shadow-blue-600 shadow-md">
      <div className="flex justify-center mt-4">
        <Image src="/logo-3.png" alt="logo" width={150} height={30} />
      </div>
      <button onClick={()=>window.upload_file.showModal()} className="flex gap-2 items-center bg-blue-500 p-2 text-white rounded-md px-3 mt-10 hover:scale-105 w-full transition-all justify-center text-[14px]">
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
      <button className="flex gap-2 items-center bg-yellow-500 p-2 text-white rounded-md px-3 mt-2 hover:scale-105 w-full transition-all justify-center text-[14px]" onClick={() => document.getElementById("my_modal_3").showModal()}>
        Create Folder
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
            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      </button>

      <div>
        {menu.list.map((item,index) => (
          <h2
          onClick={()=>setActiveIndex(index)}
            className={`flex gap-2 items-center p-2 mt-6 text-white hover:bg-blue-200 hover:text-black border-r-2 border-l-2 justify-center cursor-pointer ${
              activeIndex == index ? "bg-blue-200 text-red-950 " : null
            }`}
          >
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
                d={item.logo}
              />
            </svg>
            {item.name}
          </h2>
        ))}
      </div>
      
      <dialog id="my_modal_3" className="modal">
        <CreateFolderModal/>
      </dialog>
      <dialog id="upload_file" className="modal">
            <UploadFileModal 
            closeModal={()=>window.upload_file.close()}/>
        </dialog>
    </div>
  );
}

export default SideNavBar;
