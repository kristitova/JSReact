import { ADD_CHAT, DELETE_CHAT } from "./actions";


const initialState = {
    chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            if (state.chatList.length == 0) action.payload = { idchat: 1, namechat: `Chat 1` }
            else action.payload = { idchat: state.chatList[state.chatList.length - 1].idchat + 1, namechat: `Chat ${state.chatList[state.chatList.length - 1].idchat + 1}` }
            return {
                chatList: [
                    ...state.chatList,
                    action.payload
                ],
            }

        case DELETE_CHAT:
            let newChats = state.chatList.filter((chat) => chat.idchat !== action.payload);
            return {
                chatList: newChats
            }

        default:
            return state;
    }
};


