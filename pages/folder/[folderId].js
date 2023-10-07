import { app } from '@/Config/FirebaseConfig';
import FolderList from '@/components/Folder/FolderList';
import Searchbar from '@/components/Searchbar';
import { ParentFolderContext } from '@/context/ParentFolderIdContext';
import { ShowToastContext } from '@/context/ShowToastContext';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

function FolderDetails() {
  const router = useRouter();
  const {name,id} = router.query;
  const {data:session}=useSession();
  const{parentFolderId,setParentFolderId}=useContext(ParentFolderContext);

  const {showToastMsg,setShowToastMsg}= useContext(ShowToastContext);


  const[folderList,setfolderList]=useState([])

  const db=getFirestore(app)

  useEffect(()=>{
    setParentFolderId(id);
    if(session){
      getFolderList();
    }
  },[id,session,showToastMsg]) //showtoastmsg is used here bcos we want to show the folder in page without refreshing the page

  const getFolderList = async () =>{
    setfolderList([]);
    const q = query(collection(db,"Folders"),
    where("createBy",'==', session.user.email),
    where("parentFolderId","==",id)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
       //console.log(doc.id, " => ", doc.data());
      setfolderList(folderList => ([...folderList, doc.data()]));
    })
  }
  return (
    <div className='p-5'>
    <Searchbar/>
    <h2 className="text-[20px] text-white font-bold mt-5">{name}</h2>
    
    {folderList.length>0 ? <FolderList 
      folderList={folderList}
        isBig={false}/>
        :<h2 className='text-white justify-center text-center
        text-[30px] mt-5 bg-black'>No Folder Found</h2>
        }
    
    
    </div>
  )
}

export default FolderDetails