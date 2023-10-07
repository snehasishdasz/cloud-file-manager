import React, {  useContext, useState } from "react";
import Image from "next/image";
import {app} from "../../Config/FirebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ShowToastContext } from "@/context/ShowToastContext";
import { ParentFolderContext } from "@/context/ParentFolderIdContext";

function CreateFolderModal() {
  const docID = Date.now().toString();

  const[folderName,setFolderName] = useState();

  const {showToastMsg,setShowToastMsg} = useContext(ShowToastContext);

  const{data:session}=useSession();
  const{parentFolderId,setParentFolderId}=useContext(ParentFolderContext);

  const db = getFirestore(app);
  const onCreate = async (e) => {
    console.log(folderName);
    await setDoc(doc(db,"Folders",docID),{
      name: folderName,
      id:docID,
      createBy:session.user.email,
      parentFolderId:parentFolderId
    })
    setShowToastMsg('Folder Created')
  }
  return (
    <div>
      <div className="modal-box bg-gray-600 text-black w-full">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-white hover:bg-red-400">
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
