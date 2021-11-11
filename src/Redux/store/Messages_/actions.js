export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESS_BYID = 'DELETE_MESS_BYID';


export const addMessage = (idchat, message) => ({
    type: ADD_MESSAGE,
    payload: { idchat, message }
});

export const deleteMessById = (idchat) => ({
    type: DELETE_MESS_BYID,
    payload: idchat
});