import react from 'react';
import { useParams, Redirect } from "react-router-dom";
import { Box, ListItem, ListItemText } from '@material-ui/core'
import { MessageList } from '../MessageList';
import { InitialChats } from '../../InitialChats';


export const Chat = () => {
    const { chatId } = useParams();
    const chat = InitialChats.find(({ idchat }) => idchat == chatId);

    if (!chat) {
        return <Redirect to="/chats" />

    }
    return (
        <Box>
            <ListItem>
                <ListItemText>
                    {chat.namechat}
                </ListItemText>
            </ListItem>
            < MessageList />
        </Box>

    )



}