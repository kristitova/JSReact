import { ADD_MESSAGE } from "./actions";
import { DELETE_MESS_BYID } from './actions';

const initialState = {
    messages: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const {
                idchat,
                message
            } = action.payload
            const newMessages = { ...state.messages }
            newMessages[idchat] = [...(newMessages[idchat] || []), message]
            return {
                messages: newMessages
            }
        }

        case DELETE_MESS_BYID: {

            if (!state.messages.hasOwnProperty(action.payload)) {
                return state
            }

            const newMessages = { ...state.messages };
            delete newMessages[action.payload]

            return {
                messages: newMessages
            }

        }
        /*
        const currentList = state.messageList[action.payload.chatId] || [];
        return {
            ...state,
            messageList: {
                ...state.messageList,
                [action.payload.chatId]: [
                    ...currentList,
                    {
                        ...action.payload.message,
                        id: `${action.payload.chatId}${currentList.length}`,
                    },
                ],
            },
        };
    }
    */
        default:
            return state;
    }
};
