import { useCallback } from 'react';
import { chatsRef } from './../../../firebase';

export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";


export const addChat = (chat) => ({
    type: ADD_CHAT,
    payload: chat
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId
});


export const AddChatWithThunk = (chat) => () => {
    chatsRef.push(chat);
    //добавление элемента в базу данных, но нет добавления в redux
}

export const mapChatSnapshotToChat = (snapshot) => ({
    name: snapshot.val(),
    id: snapshot.key
    //  ...snapshot.val(),
    //   id: snapshot.key
})

export const onTrackingAddChatWithThunk = (dispatch) => {
    chatsRef.on('child_added', (snapshot) => {
        const ac = mapChatSnapshotToChat(snapshot);
        dispatch(addChat(ac));
    })
}

export const offTrackingAddChatWithThunk = () => {
    chatsRef.off('child_added')
}


export const onTrackingRemoveChatWithThunk = (dispatch) => {

    chatsRef.on('child_removed', (snapshot) => {
        dispatch(deleteChat(snapshot.key))
    })
}

export const RemoveChatWithThunk = (chatId) => (dispatch) => {
    console.log(chatsRef);
    chatsRef.child(chatId).remove(() => {
        dispatch(deleteChat(chatId))
    })
}

export const offTrackingRemoveChatWithThunk = () => {
    chatsRef.off('child_removed')
}
