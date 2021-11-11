import React, { useCallback, useState, useEffect } from 'react';
import { SendMessage } from '../SendMessage';
import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import { useParams, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../../../Redux/store/Messages_/actions';
import { getMessagesByid } from '../../../../Redux/store/Messages_/selectors';
import { InitialChats } from '../../InitialChats';


export const MessageList = () => {
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const chat = InitialChats.find(({ idchat }) => idchat == chatId);

    if (!chat) {
        return <Redirect to="/chats" />
    }

    const messages = useSelector(getMessagesByid(chatId))


    const sendMessage = (message) => {
        dispatch(addMessage(chatId, message))
    }

    const onSendMessage = (value) => {
        sendMessage(value)
    }

    useEffect(() => {
        if (
            !messages.length || messages[messages.length - 1].author === "Bot"
        ) {
            return;
        }
        const timeout = setTimeout(() => {
            onSendMessage({ messid: Date.now(), author: 'Bot', text: 'I am robot' });
        }, 1000);

        return () => clearTimeout(timeout);

    });



    const renderMess = useCallback((messages) => {
        if (!messages.length == 0) {
            return messages.map((mess) =>
                <ListItem key={mess.messid}>
                    <ListItemText>
                        {mess.author} : {mess.text}
                    </ListItemText>
                </ListItem >)
        }
    }, [messages]);

    return (

        <Box pb={5} height='400px'>
            <Box>{chat.namechat}</Box>
            <SendMessage mt={10} messageUpdate={onSendMessage} />
            <List > {
                renderMess(messages)
            }</List>
        </Box>
    )
};
