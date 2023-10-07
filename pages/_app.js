import CreateFolderModal from '@/components/Folder/CreateFolderModal'
import SideNavBar from '@/components/SideNavBar'
import Toast from '@/components/Toast'
import { ParentFolderContext } from '@/context/ParentFolderIdContext'
import { ShowToastContext } from '@/context/ShowToastContext'
import '@/styles/globals.css'

import { SessionProvider } from "next-auth/react"
import { useState } from 'react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const[showToastMsg,setShowToastMsg]=useState();
  const[parentFolderId,setParentFolderId]=useState();
  return (
    <SessionProvider session={session}>
    <ParentFolderContext.Provider value={{parentFolderId,setParentFolderId}}>
    <ShowToastContext.Provider value={{showToastMsg,setShowToastMsg}}>
    <div className='flex'>
      <SideNavBar/>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full'>
        <div className='col-span-2'>
          <Component {...pageProps} />
        </div>
        <div className='bg-gray-800 p-5'>
          Storage
        </div>
      </div>
    </div>
    {showToastMsg?<Toast msg={showToastMsg} />:null}
    </ShowToastContext.Provider>
    </ParentFolderContext.Provider>
    </SessionProvider>
  )
}