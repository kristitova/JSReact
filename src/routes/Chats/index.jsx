import React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { MessageList } from './routes/MessageList';
import { ChatsWithHoc } from '../../hocs/ChatsWithHoc';

const useStyles = makeStyles({
    displayChats: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px'
    },
    displayOwn: {
        display: 'flex',
        gap: '200px'
    },
    OneChat: {
        display: 'flex'
    },
    delChatbutton: {
        width: '250px'
    }
})

export const ChatsRender = ({ chats, chatDelete, chatAdd }) => {
    const classes = useStyles();

    const renderChat = useCallback((chat) => (
        <Box className={classes.OneChat} key={chat.idchat}>
            <ListItem button component={Link} to={`/chats/${chat.idchat}`} >
                <ListItemText>{chat.namechat}</ListItemText>
            </ListItem >
            <Button className={classes.delChatbutton} onClick={() => { chatDelete(chat.idchat) }}>
                Delete Chat
            </Button>
        </Box>
    ), [chats]);

    return (
        <div className={classes.displayOwn}>
            <List className={classes.displayChats} >
                {chats.map(renderChat)}
                <Button onClick={chatAdd}>
                    Add Chat
                </Button>
            </List>
            <div>
                <Switch>
                    <Route path='/chats/:chatId' component={MessageList} />
                </Switch>
            </div>
        </div>
    )
};
export const Chats = ChatsWithHoc(ChatsRender);
