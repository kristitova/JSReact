import { ADD_CHAT, DELETE_CHAT } from "./actions";
import { InitialChats } from '../../../routes/Chats/InitialChats'

const initialState = {
    chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            if (state.chatList.length == 0) action.payload = { idchat: 1, namechat: `Chat 1` }
            else action.payload = { idchat: state.chatList[state.chatList.length - 1].idchat + 1, namechat: `Chat ${state.chatList[state.chatList.length - 1].idchat + 1}` }
            InitialChats.push(action.payload);
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    action.payload
                ],
            }

        case DELETE_CHAT:
            let newChats = state.chatList.filter((chat) => chat.idchat !== action.payload);
            InitialChats.splice(InitialChats.indexOf(InitialChats.find(({ idchat }) => idchat == action.payload)), 1);
            return {
                ...state,
                chatList: newChats
            }

        default:
            return state;
    }
};


