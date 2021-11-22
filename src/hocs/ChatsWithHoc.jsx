import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { addChat, deleteChat } from '../Redux/store/Chats_/actions';
import { deleteMessById } from '../Redux/store/Messages_/actions';
import { getChats } from '../Redux/store/Chats_/selectors';
import { AddChatWithThunk, RemoveChatWithThunk, onTrackingAddChatWithThunk, offTrackingAddChatWithThunk, onTrackingRemoveChatWithThunk, offTrackingRemoveChatWithThunk } from './../Redux/store/Chats_/actions';

export const ChatsWithHoc = (Component) => {
    return (props) => {

        const newChatName = '';
        const dispatch = useDispatch();
        const chats = useSelector(getChats);

        const chatDelete = useCallback((chatId) => {

            dispatch(deleteChat(chatId))
            dispatch(deleteMessById(chatId))
        }, [])

        const chatAdd = useCallback(() => {
            dispatch(addChat(newChatName))
        }, [])
        /*
                useEffect(() => {
                    dispatch(onTrackingAddChatWithThunk);
                    dispatch(onTrackingRemoveChatWithThunk);
                    return (() => {
                        dispatch(offTrackingAddChatWithThunk);
                        dispatch(offTrackingRemoveChatWithThunk);
                    })
                }, [])
                */


        return <Component
            {...props}
            chats={chats}
            deleteChat={chatDelete}
            chatAdd={chatAdd}
        />
    }
}
