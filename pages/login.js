import React from 'react';
import Image from 'next/image';
import GIF from "./ezgif.com-video-to-gif.gif"
function login() {
  return (
    <div className="container">
      <div className="left-side">
        <h1>Cloud Castle</h1>
        <p>"Store data across devices using our cloud platform."</p>
        <a className="cta-button" href="#">
          Get Started
        </a>
      </div>
      <div className="right-side">
      <Image
          className="landing-image" // Change to className="landing-image" if it's a GIF
          src={GIF}
          alt="Landing Page Image" width={100} height={100}
        />
      </div>
    </div>
  );
}

export default login;
