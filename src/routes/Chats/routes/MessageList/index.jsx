import React, { useCallback, useState, useEffect } from 'react';
import { SendMessage } from '../SendMessage';
import { Box, List, ListItem, ListItemText } from "@material-ui/core";

export const MessageList = () => {

    const [messages, setMessages] = useState([]);

    const handleSend = useCallback((newmessage) => {
        setMessages([...messages, newmessage])
    }, [messages]);

    useEffect(() => {
        if (
            !messages.length || messages[messages.length - 1].author === "Bot"
        ) {
            return;
        }
        const timeout = setTimeout(() => {
            setMessages([...messages, { id: Date.now(), author: 'Bot', text: 'I am robot' }])
        }, 1000);

        return () => clearTimeout(timeout);
    });


    const renderMessage = useCallback((mess) => (
        <ListItem key={mess.id}>
            <ListItemText>
                {mess.author} : {mess.text}
            </ListItemText>
        </ListItem >
    ), []);

    return (

        <Box pb={5} height='400px'>
            <SendMessage mt={10} messageUpdate={handleSend} />
            <List >{messages.map(renderMessage)}</List>
        </Box>
    )
};