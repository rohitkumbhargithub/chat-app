import React, { useState } from 'react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { BsEmojiSmile } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import {actions} from "../../redux/reducer/messageReducer";
import { messageSelector } from '../../redux/store';

const MessageInput = () => {
    const message = useSelector(messageSelector);
    const [showEmoji, setShowEmoji] = useState(false);
    const [text, setText] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const dispatch = useDispatch();

    const addEmoji = (e) => {
        const sys = e.unified.split("_");
        const codeArray = [];
        sys.forEach(element => {
            codeArray.push("0x"+element);
            let emoji = String.fromCodePoint(...codeArray);
            setText(text + emoji);
        });
    }


    const handleInputChange = (e) => {
      e.preventDefault();
      setText(e.target.value);
      const inputValue = e.target.value;
      if (inputValue.includes("@")) {
        const searchTerm = inputValue.substring(inputValue.indexOf("@") + 1).toLowerCase();
        const filtered = message.filter(message =>
          message.user.toLowerCase().includes(searchTerm)
        );
        setFilteredUsers(filtered);
      }else {
        setFilteredUsers([]);
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(actions.add(text));
      setText("");
    }

    const handleUserClick = (user) => {
      setText(user);
      setFilteredUsers([]);
    };

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <div className='flex justify-between items-center'>
            <input type="text" className='border rounded-lg block w-full p-2.5 border-b-2 border-gray-600 bg-white text-black' placeholder='Type Message'
             value={text}
            //  onChange={(e) => setText(e.target.value)}
             onChange={handleInputChange}
             />
             <ul className='absolute bottom-[100%] left-0 mb-1 p-5'>
                {filteredUsers.map((message, index) => (
                
                  <li className='cursor-pointer p-3 bg-sky-500 text-white' key={index} onClick={() => handleUserClick(message.user)}>{message.user}</li>
          
                ))}
              </ul>
             <div>
             <BsEmojiSmile className='w-9 h-9 mt-1 absolute inset-y-0 end-0 pe-3 cursor-pointer'
             onClick={() => setShowEmoji(!showEmoji)}

             />
             </div>
             </div>
             {
                showEmoji && <div className='absolute bottom-[100%] right-2 mb-1'>
                <Picker data={data} onEmojiSelect={addEmoji}/>
             </div>
             }
        </div>
    </form>
  )
}

export default MessageInput