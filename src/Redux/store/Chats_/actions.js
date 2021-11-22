import { chatsRef } from './../../../firebase';

export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";


export const addChat = (chat) => ({
    type: ADD_CHAT,
    payload: chat
});

export const deleteChat = (idchat) => ({
    type: DELETE_CHAT,
    payload: idchat
});

/*
export const AddChatWithThunk = (chat) => () => {
    chatsRef.push(chat);
    //добавление элемента в базу данных, но нет добавления в redux
}

export const onTrackingAddChatWithThunk = (dispatch) => {
    chatsRef.on('child_added', (snapshot) => {
        dispatch(addChat(() => ({
            ...snapshot.val(),
            id: snapshot.key
        })))
    })
}

export const offTrackingAddChatWithThunk = () => {
    chatsRef.off('child_added')
}


export const RemoveChatWithThunk = (idchat) => (dispatch) => {
    chatsRef.child(idchat).remove(
        dispatch(deleteChat(idchat))
    )
}
export const onTrackingRemoveChatWithThunk = (dispatch) => {
    chatsRef.on('child_removed', (snapshot) => {
        dispatch(deleteChat(snapshot.key))
    })
}

export const offTrackingRemoveChatWithThunk = () => {
    chatsRef.off('child_removed')
}
*/