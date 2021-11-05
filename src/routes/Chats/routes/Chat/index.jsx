import react from 'react';
import { useParams, Redirect, Route, Link, Switch } from "react-router-dom";
import { Box } from '@material-ui/core'
import { MessageList } from '../MessageList';
import { InitialChats } from '../../InitialChats';


export const Chat = () => {
    const { chatId } = useParams();
    const chat = InitialChats.find(({ idchat }) => idchat == chatId);

    if (!chat) {
        return <Redirect to="/404" />

    }
    return (
        <Box>
            {chat.namechat}
            < MessageList />
        </Box>

    )



}