import { Inter } from 'next/font/google'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Searchbar from '@/components/Searchbar';
import FolderList from '@/components/Folder/FolderList';
import FileList from '@/components/File/FileList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '@/Config/FirebaseConfig';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data:session}=useSession();
  const router = useRouter();
  const[folderList,setfolderList] = useState([]);
  const db = getFirestore(app) //This line means it is the firebase database without this line we cant store any data in the f
  useEffect(()=>{
    console.log("User Session")
    if(!session)
    {
      router.push("/login")
    }
    else{
      getFolderList();
      console.log("User Session",session.user)
    }
  },[session]);

  //This part is for show the folder created by the user with the username and folder name
  const getFolderList = async () =>{
    setfolderList([]);
    const q = query(collection(db,"Folders"),
    where("createBy",'==', session.user.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setfolderList(folderList => ([...folderList, doc.data()]));
    })
  }
  return (
    <div className='p-5'>
      <Searchbar/>
      <FolderList folderList={folderList}/>
      <FileList/>
    </div>
  )
}
