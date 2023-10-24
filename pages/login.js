import React from 'react';
import style from "../styles/login.module.css"
import Image from 'next/image';
import GIF from "./ezgif.com-video-to-gif.gif"
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router'; 
import { signIn } from 'next-auth/react';
function login() {
  const {data:session}=useSession();
  const router = useRouter();
  useEffect(()=>{
    console.log("User Session")
    if(session)
    {
      router.push("/")
    }
  },[session]);
  return (
    <div className={style.body} >
    <div className={style.container} >
      <div className={style.leftside}>
        <h1>Cloud Castle</h1>
        <p>"Store data across devices using our cloud platform."</p>
        
        <button className={style.ctabutton} onClick={()=>signIn()}>
        <Image src="/google.png" alt='google' width={200} height={200} />
          
        </button>
      </div>
      <div className={style.rightside}>
      <Image
          className={style.landingimage}
          src={GIF}
          alt="Landing Page Image"
        />
      </div>
    </div>
    </div>
  );
}

export default login;
