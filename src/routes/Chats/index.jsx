import React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../Redux/store/Chats_/actions';
import { deleteMessById } from '../../Redux/store/Messages_/actions';
import { getChats } from '../../Redux/store/Chats_/selectors';
import { MessageList } from './routes/MessageList';

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
export const Chats = () => {

    const newChatName = '';
    const dispatch = useDispatch();
    const chats = useSelector(getChats);
    const classes = useStyles();


    const renderChat = (useCallback((chatmess) => (
        <Box className={classes.OneChat} key={chatmess.idchat}>
            <ListItem button component={Link} to={`/chats/${chatmess.idchat}`} >
                <ListItemText>{chatmess.namechat}</ListItemText>
            </ListItem >
            <Button className={classes.delChatbutton} onClick={() => {
                dispatch(deleteChat(chatmess.idchat))
                dispatch(deleteMessById(chatmess.idchat))
            }}>
                Delete Chat
            </Button>

        </Box>
    ), [chats]))


    return (
        <div className={classes.displayOwn}>
            <List className={classes.displayChats} >
                {chats.map(renderChat)}
                <Button onClick={() => { dispatch(addChat(newChatName)) }}>
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
}

