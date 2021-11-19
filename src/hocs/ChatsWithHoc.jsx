import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { addChat, deleteChat } from '../Redux/store/Chats_/actions';
import { deleteMessById } from '../Redux/store/Messages_/actions';
import { getChats } from '../Redux/store/Chats_/selectors';

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

        return <Component
            {...props}
            chats={chats}
            chatDelete={chatDelete}
            chatAdd={chatAdd}
        />
    }
}