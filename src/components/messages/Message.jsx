import React, { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import '../../App.css';

const Message = ({messages}) => {
  const [like, Setlike] = useState(0);
  const {text, user, createOn, bgColor} = messages;

  const handleLike = () => {
    if(like==0){
      Setlike(1);
    }else{
      Setlike(0);
    };
  }

  return (
    <>
    <div className='chat chat-start mb-3'>
            <div className={`w-10 h-10 rounded-full ${bgColor}`}>
                <h1 className='text-white flex justify-center align-middle mt-2'>{user.split(' ').map(word => word.charAt(0)).join('')}</h1>
            </div>
            <div>
                <p className='text-gray-500 font-bold'>{messages.user} <span className='label-text font-thin ml-2'>{createOn}</span>
                <AiOutlineLike className='w-5 h-5 inline ml-2 mb-1 hover:text-sky-400 cursor-pointer' 
                  onClick={handleLike}
                />{like}</p>
            </div>
            <div className={`chat-bubble rounded top-0 text-black bg-white `}>{text}</div>
    </div>
    </>
  )
}

export default Message;


