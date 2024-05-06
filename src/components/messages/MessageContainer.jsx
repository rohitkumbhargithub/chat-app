import React from 'react';
import { useSelector } from 'react-redux';
import { conversationSelector } from '../../redux/store';
import { HiOutlineUsers } from "react-icons/hi2"
import Messages from './Messages';
import MessageInput from './MessageInput';


const MessageContainer = () => {
  const converstion = useSelector(conversationSelector);
  const ConversationIntro = converstion[1];
  return (
    <>
        <div className='lg:w-[75%] bg-gray-100 p-3 flex flex-col'>
        <div className='px-2 mb-1 flex justify-between'>
            <div>
                 <span className='text-gray-500 font-bold'>{ConversationIntro.title}</span>
                 <span className='label-text block'>{ConversationIntro.description}</span>
            </div>
            <div className='px-2'>
                <span className='text-gray-300 font-bold'>3 <span className='label-text'> | 100</span>
                <HiOutlineUsers className='w-6 h-6 label-text inline ml-3 scale-x-[-1]'/></span>
            </div>
        </div>
        <div class="border-b-2 border-gray-300 mb-3"></div>
            <Messages />
            <MessageInput/>
        </div>
    </>
  )
}

export default MessageContainer;