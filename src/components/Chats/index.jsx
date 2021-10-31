import React from 'react';
import { useCallback, useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    displayChats: {
        flexGrow: 0.4
    }
})
export const Chats = () => {

    const [chats, setchats] = useState([
        { idchat: 1, namechat: 'Chat 1' },
        { idchat: 2, namechat: 'Chat 2' },
    ]);
    const classes = useStyles();

    const renderChat = useCallback((chatmess) => (
        <ListItem key={chatmess.idchat}>
            <ListItemText>{chatmess.namechat}</ListItemText>
        </ListItem>
    ), []);

    return (

        <List className={classes.displayChats} >
            {chats.map(renderChat)}
        </List>
    )
}