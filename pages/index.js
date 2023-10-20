import { Inter } from 'next/font/google'
import { useSession } from 'next-auth/react'
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Searchbar from '@/components/Searchbar';
import FolderList from '@/components/Folder/FolderList';
import FileList from '@/components/File/FileList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '@/Config/FirebaseConfig';
import { ParentFolderContext } from '@/context/ParentFolderIdContext';
import { ShowToastContext } from '@/context/ShowToastContext';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data:session}=useSession();
  const router = useRouter();
  const[folderList,setfolderList] = useState([]);
  const[fileList,setFileList] = useState([]);

  const db = getFirestore(app) //This line means it is the firebase database without this line we cant store any data in the folder
  const{parentFolderId,setParentFolderId}=useContext(ParentFolderContext);
  const {showToastMsg,setShowToastMsg} = useContext(ShowToastContext);
  useEffect(()=>{
    console.log("User Session")
    if(!session)
    {
      router.push("/login")
    }
    else{
      getFolderList();
      getFileList();
      console.log("User Session",session.user)
    }
    setParentFolderId(0);
  },[session,showToastMsg]);

  //This part is for show the folder created by the user with the username and folder name
  const getFolderList = async () =>{
    setfolderList([]);
    const q = query(collection(db,"Folders"),
    where("parentFolderId",'==',0),
    where("createBy",'==', session.user.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setfolderList(folderList => ([...folderList, doc.data()]));
    })
  }

  const getFileList=async()=>{
    setFileList([]);
    const q=query(collection(db,"files"),
    where("parentFolderId",'==',0),
    where("createdBy",'==',session.user.email));
  
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    setFileList(fileList=>([...fileList,doc.data()]))
}); 
  }
  return (
    <div className='p-5'>
      <Searchbar/>
      <FolderList folderList={folderList}/>
      <FileList fileList={fileList}/>
    </div>
  )
}
