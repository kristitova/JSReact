import { ACTION } from './actionTypes';

const initialState = {
    showName: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION:
            return {
                showName: !state.showName
            }
        default:
            return state
    }
}