export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESS_BYID = 'DELETE_MESS_BYID';


export const addMessage = (idchat, message) => ({
    type: ADD_MESSAGE,
    payload: { idchat, message }
});

export const deleteMessById = (idchat) => ({
    type: DELETE_MESS_BYID,
    payload: idchat
});

export const addMessWithThunk = (idchat, { messid, author, text }) => (dispatch) => {
    dispatch(addMessage(idchat, { messid: messid, author: author, text: text }))
    if (author !== 'Bot') {
        const timeout = setTimeout(() => {
            dispatch(addMessage(idchat, { messid: Date.now(), author: 'Bot', text: 'I am robot' }))
        }, 1000);

        return () => clearTimeout(timeout);
    }
};

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