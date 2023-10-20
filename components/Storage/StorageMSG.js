import Image from "next/image";
import React from "react";


function StorageMSG() {
  return (
    <div className="w-full  p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 items-center justify-center mt-5">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        What is It?
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Create Simple Folders and subFolder. Upload your Files and manymore😀.
      </p>
      <ul className="my-0 space-y-3">
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="40px" height="40px"><path fill="#f44336" d="M37,24h-6.936C26.715,24,24,21.285,24,17.936V0.573c0-0.219,0.26-0.333,0.421-0.184L37,12V24z"/><path fill="#ad1457" d="M37,24h-6.936c-1.436,0-2.755-0.499-3.794-1.333L37,12V24z"/><path fill="#8bc34a" d="M11,24h6.936C21.285,24,24,26.715,24,30.064v17.362c0,0.219-0.26,0.333-0.421,0.184L11,36V24z"/><path fill="#009688" d="M11,24h6.936c1.436,0,2.755,0.499,3.794,1.333L11,36V24z"/><path fill="#ffc107" d="M24,11v6.936C24,21.285,21.285,24,17.936,24H0.573c-0.219,0-0.333-0.26-0.184-0.421L12,11H24z"/><path fill="#ff9800" d="M24,11v6.936c0,1.436-0.499,2.755-1.333,3.794L12,11H24z"/><path fill="#448aff" d="M24,37v-6.936C24,26.715,26.715,24,30.064,24h17.362c0.219,0,0.333,0.26,0.184,0.421L36,37H24z"/><path fill="#1565c0" d="M24,37v-6.936c0-1.436,0.499-2.755,1.333-3.794L36,37H24z"/></svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Image</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
           <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="48" fill="#0074D9" />
              <polygon points="35,25 70,50 35,75" fill="#fff" />
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Video</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="40px" height="40px"><path fill="#e53935" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"/><path fill="#fff" d="M34.841,26.799c-1.692-1.757-6.314-1.041-7.42-0.911c-1.627-1.562-2.734-3.45-3.124-4.101 c0.586-1.757,0.976-3.515,1.041-5.402c0-1.627-0.651-3.385-2.473-3.385c-0.651,0-1.237,0.391-1.562,0.911 c-0.781,1.367-0.456,4.101,0.781,6.899c-0.716,2.018-1.367,3.97-3.189,7.42c-1.888,0.781-5.858,2.604-6.183,4.556 c-0.13,0.586,0.065,1.172,0.521,1.627C13.688,34.805,14.273,35,14.859,35c2.408,0,4.751-3.32,6.379-6.118 c1.367-0.456,3.515-1.107,5.663-1.497c2.538,2.213,4.751,2.538,5.923,2.538c1.562,0,2.148-0.651,2.343-1.237 C35.492,28.036,35.297,27.32,34.841,26.799z M33.214,27.905c-0.065,0.456-0.651,0.911-1.692,0.651 c-1.237-0.325-2.343-0.911-3.32-1.692c0.846-0.13,2.734-0.325,4.101-0.065C32.824,26.929,33.344,27.254,33.214,27.905z M22.344,14.497c0.13-0.195,0.325-0.325,0.521-0.325c0.586,0,0.716,0.716,0.716,1.302c-0.065,1.367-0.325,2.734-0.781,4.036 C21.824,16.905,22.019,15.083,22.344,14.497z M22.214,27.124c0.521-1.041,1.237-2.864,1.497-3.645 c0.586,0.976,1.562,2.148,2.083,2.669C25.794,26.213,23.776,26.604,22.214,27.124z M18.374,29.728 c-1.497,2.473-3.059,4.036-3.905,4.036c-0.13,0-0.26-0.065-0.391-0.13c-0.195-0.13-0.26-0.325-0.195-0.586 C14.078,32.136,15.77,30.899,18.374,29.728z"/></svg>

            <span className="flex-1 ml-3 whitespace-nowrap">PDF</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="40px" height="40px"><path fill="#2196F3" d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"/><path fill="#FFF" d="M25 15.001H39V17H25zM25 19H39V21H25zM25 23.001H39V25.001H25zM25 27.001H39V29H25zM25 31H39V33.001H25z"/><path fill="#0D47A1" d="M27 42L6 38 6 10 27 6z"/><path fill="#FFF" d="M21.167,31.012H18.45l-1.802-8.988c-0.098-0.477-0.155-0.996-0.174-1.576h-0.032c-0.043,0.637-0.11,1.162-0.197,1.576l-1.85,8.988h-2.827l-2.86-14.014h2.675l1.536,9.328c0.062,0.404,0.111,0.938,0.143,1.607h0.042c0.019-0.498,0.098-1.051,0.223-1.645l1.97-9.291h2.622l1.785,9.404c0.062,0.348,0.119,0.846,0.17,1.511h0.031c0.02-0.515,0.073-1.035,0.16-1.563l1.503-9.352h2.468L21.167,31.012z"/></svg>

            <span className="flex-1 ml-3 whitespace-nowrap">Word</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="40px" height="40px" clip-rule="evenodd" baseProfile="basic"><path fill="#212121" fill-rule="evenodd" d="M8,4h24v4h4v4h4v32H8V4z" clip-rule="evenodd"/><path fill="#69f0ae" d="M8,8h4v32H8V8z"/><path fill="#7e57c2" d="M36,16h4v24h-4V16z"/><path fill="#00e5ff" d="M8,40h32v4H8V40z"/><path fill="#ffee58" d="M8,4h20v4H8V4z"/><path fill="#ef5350" d="M36,12V8h-4V4h-4v12h12v-4"/><path fill="#512da8" d="M36,20v-4h4"/><path fill="#9e9d24" fill-rule="evenodd" d="M28,4v4h-4" clip-rule="evenodd"/></svg>
            <span className="flex-1 ml-3 whitespace-nowrap">GIF</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
       <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="40px" height="40px"><path fill="#FF8A65" d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"/><path fill="#FBE9E7" d="M24 29H38V31H24zM24 33H38V35H24zM30 15c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6h-6V15z"/><path fill="#FBE9E7" d="M32,13v6h6C38,15.687,35.313,13,32,13z"/><path fill="#E64A19" d="M27 42L6 38 6 10 27 6z"/><path fill="#FFF" d="M16.828,17H12v14h3v-4.823h1.552c1.655,0,2.976-0.436,3.965-1.304c0.988-0.869,1.484-2.007,1.482-3.412C22,18.487,20.275,17,16.828,17z M16.294,23.785H15v-4.364h1.294c1.641,0,2.461,0.72,2.461,2.158C18.755,23.051,17.935,23.785,16.294,23.785z"/></svg>

            <span className="flex-1 ml-3 whitespace-nowrap">PPT</span>
          </a>
        </li>

        
        {/* Repeat the same structure for other wallet providers */}
      </ul>
      
    </div>
  );
}

export default StorageMSG;
