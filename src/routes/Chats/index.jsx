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

    const [chats, setchats] = useState(InitialChats);
    const classes = useStyles();

    const addChat = useCallback((newchat) => {
        if (chats.length == 0) newchat = { idchat: 1, namechat: `Chat 1` }
        else newchat = { idchat: chats[chats.length - 1].idchat + 1, namechat: `Chat ${chats[chats.length - 1].idchat + 1}` }
        setchats([...chats, newchat]);
        InitialChats.push(newchat);
    }, [chats]);

    const renderChat = useCallback((chatmess) => (
        <Box className={classes.OneChat} key={chatmess.idchat}>
            <ListItem button component={Link} to={`/chats/${chatmess.idchat}`} >
                <ListItemText>{chatmess.namechat}</ListItemText>
            </ListItem >
            <Button className={classes.delChatbutton} onClick={() => {
                setchats(chats.filter((item) => item.idchat !== chatmess.idchat));
                InitialChats.splice(InitialChats.indexOf(InitialChats.find(({ idchat }) => idchat == chatmess.idchat)), 1);
            }}>
                Delete Chat
            </Button>
        </Box>
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
