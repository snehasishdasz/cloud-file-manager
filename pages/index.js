import { Inter } from 'next/font/google'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

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
    <h1 className="text-3xl font-bold underline text-blue-500 ">
      Hello world!
      <button class="btn btn-primary">Primary</button>
    </h1>
  )
}
