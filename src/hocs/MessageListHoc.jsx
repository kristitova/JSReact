import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
//import { addMessWithThunk } from '../Redux/store/Messages_/actions';
import { addMessWithThunk, onTrackingAddMessageWithThunk, onTrackingRemoveMessageWithThunk, offTrackingAddMessageWithThunk, offTrackingRemoveMessageWithThunk } from '../Redux/store/Messages_/actions';
import { getMessagesByidObj } from '../Redux/store/Messages_/selectors';
import { getChats, hasChatbyId } from '../Redux/store/Chats_/selectors';
import { useCallback, useState, useEffect } from 'react';
import { getUserId } from "../Redux/store/User_/selectors";

export const MessageListHoc = (Component) => {
    return (props) => {
        const { chatId } = useParams();
        const dispatch = useDispatch();

        const chat = useSelector(hasChatbyId(chatId));

        const messages = useSelector(getMessagesByidObj(chatId))
        const userId = useSelector(getUserId);

        const sendMessage = (text) => {
            dispatch(addMessWithThunk(chatId, userId, text))
        }

        const onSendMessage = useCallback((value) => {

            return sendMessage(value)
        }, [messages])

        useEffect(() => {
            dispatch(onTrackingAddMessageWithThunk(chatId));
            dispatch(onTrackingRemoveMessageWithThunk(chatId));
            return (() => {
                dispatch(offTrackingAddMessageWithThunk(chatId));
                dispatch(offTrackingRemoveMessageWithThunk(chatId));
            })
        }, [chatId])

        return <Component
            {...props}
            messages={messages}
            haschat={chat}
            onSendMessage={onSendMessage}
        />
    }
}