import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addMessWithThunk } from '../Redux/store/Messages_/actions';
import { getMessagesByid } from '../Redux/store/Messages_/selectors';
import { getChats, hasChatbyId } from '../Redux/store/Chats_/selectors';
import { useCallback, useState, useEffect } from 'react';

export const MessageListHoc = (Component) => {
    return (props) => {
        const { chatId } = useParams();
        const dispatch = useDispatch();

        const chat = useSelector(hasChatbyId(chatId));

        const messages = useSelector(getMessagesByid(chatId))

        const sendMessage = (message) => {
            dispatch(addMessWithThunk(chatId, message))
        }

        const onSendMessage = useCallback((value) => {

            return sendMessage(value)
        }, [messages])

        return <Component
            {...props}
            messages={messages}
            haschat={chat}
            onSendMessage={onSendMessage}
        />
    }
}