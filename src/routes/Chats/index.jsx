import React from 'react';
import { useCallback, useState } from 'react';
import { List, ListItem, ListItemText, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { InitialChats } from './InitialChats';
import { Link, Switch, Route } from 'react-router-dom';
import { Chat } from './routes/Chat';


const useStyles = makeStyles({
    displayChats: {
        display: 'flex',
        flexDirection: 'column',
        width: '200px'
    },
    displayOwn: {
        display: 'flex'
    },
    OneChat: {
        display: 'flex'
    }
})
export const Chats = () => {

    const [chats, setchats] = useState(InitialChats);
    const classes = useStyles();

    const addChat = useCallback((newchat) => {
        newchat = { idchat: chats[chats.length - 1].idchat + 1, namechat: `Chat ${chats[chats.length - 1].idchat + 1}` }
        setchats([...chats, newchat]);
        InitialChats.push(newchat);
    }, [chats]);

    const renderChat = useCallback((chatmess) => (
        <ListItem className={classes.OneChat} button component={Link} to={`/chats/${chatmess.idchat}`} key={chatmess.idchat}>
            <ListItemText>{chatmess.namechat}</ListItemText>
        </ListItem>
    ), [chats]);

    return (
        <div className={classes.displayOwn}>
            <List className={classes.displayChats} >
                {chats.map(renderChat)}
                <Button onClick={addChat}>Add Chat</Button>
            </List>
            <div>
                <Switch>
                    <Route path='/chats/:chatId' component={Chat} />
                </Switch>
            </div>

        </div>
    )
}
