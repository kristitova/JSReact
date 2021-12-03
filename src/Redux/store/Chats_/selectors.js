import { Redirect } from 'react-router-dom';

export const getRootChats = (state) => state.chats;
export const getChats = (state) => {
  return getRootChats(state).chatList || {}
  //return Object.values(getRootChats(state) || {});
};
export const getChatList = (state) => Object.values(getChats(state))
export const getChatById = (chatId) => (state) => {
  //console.log(getChats(state).find(({ id }) => id == chatId) || {})
  //return getChats(state).find(({ id }) => id == chatId) || {}

  return getRootChats(state).chatList[chatId]
  //return chatId in getRootChats(state).chatList;
}

export const hasChatbyId = (chatId) => (state) => chatId in getChats(state);
