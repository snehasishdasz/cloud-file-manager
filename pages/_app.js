import CreateFolderModal from '@/components/Folder/CreateFolderModal'
import SideNavBar from '@/components/SideNavBar'
import Toast from '@/components/Toast'
import { ShowToastContext } from '@/context/ShowToastContext'
import '@/styles/globals.css'

import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
    <ShowToastContext>
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
      <div>
        
      </div>
    </div>
    <Toast/> 
    </ShowToastContext>
    </SessionProvider>
  )
}