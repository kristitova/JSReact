import React, { useCallback, useState, useEffect } from 'react';
import { SendMessage } from '../SendMessage';
import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import { MessageListHoc } from '../../../../hocs/MessageListHoc';

export const MessageRender = ({ messages, haschat, onSendMessage }) => {
    if (!haschat) {
        return <Redirect to="/chats" />
    }
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

            <SendMessage mt={10} messageUpdate={onSendMessage} />
            <List > {
                renderMess(messages)
            }</List>
        </Box>

    )
};
export const MessageList = MessageListHoc(MessageRender);



