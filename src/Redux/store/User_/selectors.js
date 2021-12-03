export const getUser = (state) => state.user.user;
export const getisAuth = (state) => {
    return state.user.user !== null;
}
export const getUserId = (state) => state.user.user.uuid