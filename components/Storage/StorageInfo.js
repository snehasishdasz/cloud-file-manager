import { app } from '@/Config/FirebaseConfig'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

function StorageInfo() {
    const {data:session}=useSession();
    const db=getFirestore(app)
    const [totalSizeUsed,setTotalSizeUsed]=useState(0);
    // const [imageSize,setImageSize]=useState(0);

    // const [fileList,setFileList]=useState([])
    let totalSize=0;
    useEffect(()=>{
        if(session)
        {
            totalSize=0;
            getAllFiles();

        }
    },[session])

    // useEffect(()=>{
    //     setImageSize(StorageSize.getStorageByType(fileList,['png','jpg']));
    // },[fileList])
    const getAllFiles=async()=>{
        const q=query(collection(db,"files"),
        where("createdBy","==",session.user.email));
        const querySnapshot = await getDocs(q);
        // setFileList([])
        querySnapshot.forEach((doc)=>{
           
            totalSize=totalSize+doc.data()['size'];
            // setFileList(fileList=>([...fileList,doc.data()]))

        })
     
         setTotalSizeUsed((totalSize/1024**2).toFixed(2)+" MB");
     
    }




  return (
    <div className='mt-7 bg-blue-200 p-2 rounded-lg'>
     <h2
        className="text-[22px] 
       font-bold text-black"
      >
        {totalSizeUsed} {" "}
        <span
          className="text-[14px]
        font-medium "
        >
          used of{" "}
        </span>{" "}
        2 GB
      </h2>
    <div className='w-full bg-gray-200  h-2.5 flex'>
        <div className='bg-blue-700 h-2.5 w-[25%] border-l-2 border-black border-b-2 border-t-2'></div>
        <div className='bg-red-700 h-2.5 w-[35%]  border-black border-b-2 border-t-2'></div>
        <div className='bg-green-800 h-2.5 w-[15%]  border-black border-b-2 border-t-2'></div>
        <div className='bg-yellow-300 h-2.5 w-[10%]  border-black border-b-2 border-t-2'></div>
        <div className='bg-white h-2.5 w-[15%] border-r-2 border-black border-b-2 border-t-2'></div>
    </div>
    </div>
  )
}

export default StorageInfo