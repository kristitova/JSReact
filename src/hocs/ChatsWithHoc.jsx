import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { addChat, deleteChat } from '../Redux/store/Chats_/actions';
import { removeMessagesByChatIdWithThunk } from '../Redux/store/Messages_/actions';
import { getChatList } from '../Redux/store/Chats_/selectors';
import { AddChatWithThunk, RemoveChatWithThunk, onTrackingAddChatWithThunk, offTrackingAddChatWithThunk, onTrackingRemoveChatWithThunk, offTrackingRemoveChatWithThunk } from './../Redux/store/Chats_/actions';

export const ChatsWithHoc = (Component) => {
    return (props) => {

        const newChatName = 'chat name';
        const dispatch = useDispatch();
        const chats = useSelector(getChatList);

        //dispatch(deleteMessById(chatId))

        const chatDelete = useCallback((chatId) => {
            console.log(chatId)
            dispatch(RemoveChatWithThunk(chatId))
            dispatch(removeMessagesByChatIdWithThunk(chatId))
        }, []);



        const chatAdd = useCallback(() => {
            dispatch(AddChatWithThunk(newChatName))
        }, [])

        useEffect(() => {
            dispatch(onTrackingAddChatWithThunk);
            dispatch(onTrackingRemoveChatWithThunk);
            return (() => {
                dispatch(offTrackingAddChatWithThunk);
                dispatch(offTrackingRemoveChatWithThunk);
            })
        }, [])



        return <Component
            {...props}
            chats={chats}
            chatDelete={chatDelete}
            chatAdd={chatAdd}
        />
    }
}
