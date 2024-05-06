import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messages: [
        {"text": "Welcome to Team Chat. Send a message now to start interacting with other users in the app.", "user": "PubNub Bot", createOn: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}), bgColor:'bg-red-600'},
        {"text": "Hey everyone", "user": "Greory Goolsby", createOn: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}), bgColor:'bg-lime-600'},
        {"text": "Oh hi, Gregory! Rolande is around, too", "user": "Elin Emmanuel", createOn: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}), bgColor:'bg-rose-300	'},
    ]
}

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers : {
        add: (state, action) => {
            state.messages.push({
                text: action.payload,
                user: "Rolande Raimondi",
                createOn: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}),
                bgColor: 'bg-rose-300',
            })
        },
    }    
})

export const messageReducer = messageSlice.reducer;
export const actions = messageSlice.actions;