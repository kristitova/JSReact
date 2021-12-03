export const getTodosFromStore = (state) => state.gists;
export const getTodos = (state) => getTodosFromStore(state).data;
export const getLoading = (state) => getTodosFromStore(state).isLoading;
export const getError = (state) => getTodosFromStore(state).isError;