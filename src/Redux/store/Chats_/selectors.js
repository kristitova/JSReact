import { Redirect } from 'react-router-dom';

export const getRootChats = (state) => state.chats;
export const getChats = (state) => getRootChats(state).chatList;
export const hasChatbyId = (chatId) => (state) => {
  return getChats(state).find(({ idchat }) => idchat == chatId) || {}
}
  //export const hasChatbyId = (chatId) => (state) => getChats(state).findIndex((item) => item.idchat == chatId) !== -1

//export const hasChatbyId = (chatId) => (state) => {
// console.log(getChats(state).findIndex((item) => item.idchat === chatId) !== -1)
//  return getChats(state).findIndex((item) => item.idchat === chatId) !== -1
//};

//export const hasChatbyId = (chatId) => (state) => getChats(state).findIndex(compare(chatId)) !== -1;
//export const hasChatbyId = (chatId) => (state) => {
//  console.log(getChats(state).find(({ idchat }) => idchat == chatId));
//   return
//}
//export const hasChatbyId = (chatId) => (state) => getChats(state).findIndex((item) => item.idchat == chatId) !== - 1 || {}


   // console.log(getChats(state).findIndex((item) => item.idchat == chatId));
  //  return getChats(state).findIndex((item) => item.idchat == chatId) !== - 1 || {};
//}


