import { messagesRef } from "../../../firebase";

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESS_BYID = 'DELETE_MESS_BYID';


export const addMessage = (id, message) => ({
    type: ADD_MESSAGE,
    payload: { id, message }
});

export const deleteMessById = (id) => ({
    type: DELETE_MESS_BYID,
    payload: id
});
/*
export const addMessWithThunk = (id, { messid, author, text }) => (dispatch) => {
    dispatch(addMessage(id, { messid: messid, author: author, text: text }))
    if (author !== 'Bot') {
        const timeout = setTimeout(() => {
            dispatch(addMessage(id, { messid: Date.now(), author: 'Bot', text: 'I am robot' }))
        }, 1000);

        return () => clearTimeout(timeout);
    }
};
*/
export const removeMessagesByChatIdWithThunk = (chatId) => (dispatch) => {
    messagesRef.child(chatId).remove(() => {
        dispatch(deleteMessById(chatId))
    })
}

export const addMessWithThunk = (message, chatId) => () => {
    messagesRef.child(chatId).push(message)
}


export const mapMessagesSnapshotToMessage = (snapshot) => ({
    name: snapshot.val(),
    id: snapshot.key
    //  ...snapshot.val(),
    //   id: snapshot.key
})

export const onTrackingAddMessageWithThunk = (chatId) => (dispatch) => {
    messagesRef.child(chatId).on('child_added', (snapshot) => {
        const ac = mapMessagesSnapshotToMessage(snapshot);
        dispatch(addMessage(ac), chatId);
    })
}

export const offTrackingAddMessageWithThunk = (chatId) => () => {
    messagesRef.child(chatId).off('child_added')
}


export const onTrackingRemoveMessageWithThunk = (chatId) => (dispatch) => {

    messagesRef.child(chatId).on('child_removed', () => {
        dispatch(deleteMessById(chatId))
    })
}

export const offTrackingRemoveMessageWithThunk = (chatId) => () => {
    messagesRef.child(chatId).off('child_removed')
}


/*

const middleware = store => next => (action) => {
    if (action.type === ADD_MESSAGE && action.message.author !== AUTHORS.BOT)
    {
      const botMessage = ;
      setTimeout(() => store.dispatch(addMessage(botMessage)), 2000);
    }

    return next(action)
}

    const sendMessage = (message) => {
        dispatch(addMessage(chatId, message))
    }

    const onSendMessage = (value) => {
        sendMessage(value)
    }

        const onAddMessage = useCallback((message) => {
            dispatch(addMessageWithThunk(chatId, message));
        }, [chatId, dispatch]);

        useEffect(() => {
            if (
                !messages.length || messages[messages.length - 1].author === "Bot"
            ) {
                return;
            }
            const timeout = setTimeout(() => {
                onSendMessage({ messid: Date.now(), author: 'Bot', text: 'I am robot' });
            }, 1000);

            return () => clearTimeout(timeout);

        });
        */