import React from 'react'
import UserInfo from './UserInfo'
import StorageInfo from './StorageInfo'

import StorageMSG from './StorageMSG'
import { useSession } from 'next-auth/react'
import CreatedBy from './CreatedBy'

function Storage() {
  const {data:session}=useSession();
  return session &&(
    <div>
        <UserInfo/>
        <StorageInfo/>
        <StorageMSG/>
        <CreatedBy/>
    </div>
  )
}

export default Storage