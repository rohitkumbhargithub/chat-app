import React from 'react';
import {useSelector} from "react-redux";
import {conversationSelector} from "../../redux/store";

const Converstion = () => {
  const converstion = useSelector(conversationSelector);
  return (
    <>
        {converstion.map((converstion, index) => (
          <ul key={index} className={`flex justify-start mb-4 p-2 hover:bg-sky-500 cursor-pointer converstion ${converstion.isActive}`}>
           <li className='flex gap-2 items-center'>
            <div className={`w-10 h-10 rounded-lg ml-4 converstion-square ${converstion.isActive}`}>
                <h1 className='flex justify-center align-middle mt-2 '>#</h1>
            </div>
            <div className='ml-5'>
              <span className='converstion-title'>{converstion.title}</span>
            </div>
          </li>
          </ul>
        ))}
    </>
  )
}

export default Converstion;