import React, { useState } from 'react';
import { SlPlus } from "react-icons/sl";
import Converstion from './Converstion';
import Conversation_Form from './Conversation_Form';

const Conversations = () => {
  
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <div className='p-2 flex justify-between mt-10 mb-5 '>
      <span className='label-text text-gray-500 font-bold text-base ml-2'>Converstions</span>
      <SlPlus className='w-5 h-5 label-text inline cursor-pointer mr-2' onClick={() => setShowForm(!showForm)}/>
    </div>
    {showForm && <div className='w-50 h-50 bg-slate-100 absolute left-[8%] bottom-[45%] rounded-lg'>
      <Conversation_Form/>
    </div>}
    <Converstion/>
    </>
  )
}

export default Conversations;