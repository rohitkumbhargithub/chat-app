import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';
import { messageSelector } from '../../redux/store';

const Messages = () => {
  const message = useSelector(messageSelector);
  const lastMessageRef = useRef();

  useEffect(() => {

    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth"});
    },100);

  },[message]);


  return (
    <div className='px-4 flex-1 overflow-auto'>
      <div className='welcome'> </div>

     {message.map((message, index) => (
      
      <div key={index} ref={lastMessageRef}>

        <Message messages={message}  />

      </div>



     ))}
    </div>
  )
}

export default Messages;