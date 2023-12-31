import React from 'react';
import Image from 'next/image';
import GIF from "./ezgif.com-video-to-gif.gif"
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router'; 
import { signIn } from 'next-auth/react';

function login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("User Session");
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="bg-gradient">

    <div className="container">
      <div className="left-side">
        <h1>Cloud Castle</h1>
        <p>"Store file data across devices using our cloud platform."</p>
        
        <button className="cta-button" onClick={()=>signIn()}>
        <Image src="/google.png" alt='google' width={200} height={200} />
          
        </button>
      </div>
      <div className="right-side">
      <Image
          className="landing-image"
          src={GIF}
          alt="Landing Page Image"
        />
      </div>
    </div>
     </div>
  );
}

export default login;