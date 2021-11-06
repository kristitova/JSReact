import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './../../../../Redux/store';
import { ACTION } from '../../../../Redux/store/Profile_/reducer/actionTypes';

const ProfileView = () => {
    const dispatch = useDispatch();
    const { showName } = useSelector((state) => {
        return state.showName
    })

    return (
        <div>
            <h1>Profile</h1>
            <input
                type='checkbox'
                checked={showName}
                value={showName}
                onChange={() => {
                    dispatch({
                        type: ACTION
                    })
                }
                }
            />
        </div >
    )
}

export const Profile = (props) => {
    return (
        <Provider store={store}>
            <ProfileView />
        </Provider>
    )
}