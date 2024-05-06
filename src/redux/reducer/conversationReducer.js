import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    conversations: [
        {"title": "Poland Office", "description": "This is channel for chat", "isActive": "none"},
        {"title": "Introductions", "description": "This is channel for chat", "isActive": "active"},
        {"title": "India Office", "description": "This is channel for chat", "isActive": "none"},
    ]
}

const conversationSlice = createSlice({
    name: 'conversation',
    initialState: initialState,
    reducers : {
        add: (state, action) => {
            state.conversations.push({
                title: action.payload,
                description: action.payload,
                isActive: 'none',
            })
        },
       
    }    
})

export const conversationReducer = conversationSlice.reducer;
export const actions = conversationSlice.actions;