import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = {
    chatList: {},
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:

            ///  if (state.chatList.length == 0) action.payload = { idchat: 1, namechat: `Chat 1` }
            // else action.payload = { idchat: state.chatList[state.chatList.length - 1].idchat + 1, namechat: `Chat ${state.chatList[state.chatList.length - 1].idchat + 1}` }
            // return {
            //       chatList: [
            //           ...state.chatList,
            ///           action.payload
            //        ]
            //     }
            return {
                chatList: {
                    ...state.chatList,
                    [action.payload.id]: action.payload
                }

            }


        case DELETE_CHAT:

            if (!action.payload) {
                return state;
            }
            const chats = { ...state.chatList }
            console.log(chats)
            console.log(action.payload)
            delete chats[action.payload]
            return {
                chats
            }


        default:
            return state;
    }
};


