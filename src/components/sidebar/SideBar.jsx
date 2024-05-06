import React from 'react'
import UserProfile from './UserProfile';
import Conversations from './Conversations';

const SideBar = () => {
  return (
    <div className='flex lg:w-[25%] border-r border-slate-200 bg-white flex-col'>
        <UserProfile />
        <Conversations />
    </div>
  )
}

export default SideBar;