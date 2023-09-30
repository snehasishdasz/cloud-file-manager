import { Inter } from 'next/font/google'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Searchbar from '@/components/Searchbar';
import FolderList from '@/components/Folder/FolderList';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data:session}=useSession();
  const router = useRouter();
  useEffect(()=>{
    console.log("User Session")
    if(!session)
    {
      router.push("/login")
    }
    else{
      console.log("User Session",session.user)
    }
  },[session]);
  return (
    <div className='p-5'>
      <Searchbar/>
      <FolderList/>
    </div>
  )
}
