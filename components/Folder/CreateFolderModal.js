import React, { useState } from "react";
import Image from "next/image";

function CreateFolderModal() {
  const[folderName,setFolderName] = useState();
  const onCreate = (e) => {
    console.log(folderName);
  }
  return (
    <div>
      <div className="modal-box bg-gray-600 text-black w-full">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className='w-full flex flex-col justify-center items-center gap-3 '>
        <Image src='/folder.png'
        alt='folder'
        width={50}
        height={50}
        />
        <input type="text" placeholder="Folder Name....." className="p-2 border-[1px] placeholder-gray-700  border outline-none rounded-md bg-gray-300 text-black" 
          onChange={(e)=>setFolderName(e.target.value)}
        />
        <button className="bg-blue-500 text-white rounded-md p-2 px-3 w-full"
        onClick={()=>onCreate()}
        >Create</button>
    </div>
          </form>
        </div>
      
    </div>
  );
}

export default CreateFolderModal;
