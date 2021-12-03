import { ADD_MESSAGE } from "./actions";
import { DELETE_MESS_BYID } from './actions';

const initialState = {
    messages: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const {
                id,
                message
            } = action.payload
            const newMessages = { ...state.messages }
            newMessages[id] = { ...(newMessages[id] || []), [message.id]: message }
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

        default:
            return state;
    }
};
