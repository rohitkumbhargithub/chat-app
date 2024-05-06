import React from 'react'
import SideBar from '../components/sidebar/SideBar';
import MessageContainer from '../components/messages/MessageContainer';


const Home = () => {
  return (
    <>
        <div className='flex w-[100%] h-[100vh]'>
        
        <SideBar />
        <MessageContainer />
    </div>
    </>
  )
}

export default Home;