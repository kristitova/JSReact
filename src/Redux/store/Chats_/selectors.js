import { Redirect } from 'react-router-dom';

export const getRootChats = (state) => state.chats;
export const getChats = (state) => getRootChats(state).chatList;
export const hasChatbyId = (chatId) => (state) => {
  return getChats(state).find(({ idchat }) => idchat == chatId) || {}
}
