import { configureStore } from '@reduxjs/toolkit';
import { conversationReducer } from './reducer/conversationReducer';
import { messageReducer } from './reducer/messageReducer';



export const store = configureStore({
  reducer: {
    conversationReducer,
    messageReducer,
  }
});


export const conversationSelector = (state) => state.conversationReducer.conversations;
export const messageSelector = (state) => state.messageReducer.messages;