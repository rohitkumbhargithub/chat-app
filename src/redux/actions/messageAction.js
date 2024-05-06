// action constant

export const ADD_MESSAGE = "Add Message";


// action creator

export const addMessage = (text) => ({text, type: ADD_MESSAGE});
