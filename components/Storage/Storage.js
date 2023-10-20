import React from 'react'
import UserInfo from './UserInfo'
import StorageInfo from './StorageInfo'
import StorageUpgradeMsg from './StorageUpgradeMsg'
import StorageMSG from './StorageMSG'
import { useSession } from 'next-auth/react'

function Storage() {
  const {data:session}=useSession();
  return session &&(
    <div>
        <UserInfo/>
        <StorageInfo/>
        <StorageMSG/>
        <StorageUpgradeMsg/>
    </div>
  )
}

export default Storage