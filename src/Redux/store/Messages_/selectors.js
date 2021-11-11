export const getMessagesFromStore = (state) => state.messages || {};
export const getMessages = (state) => getMessagesFromStore(state).messages || {};
export const getMessagesByid = (chatId) => (state) => getMessages(state)[chatId] || {};