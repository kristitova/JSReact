import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION } from '../../../../Redux/store/Profile_/reducer/actionTypes';
import { getProfile } from '../../../../Redux/store/Profile_/reducer/selectors';

const ProfileView = () => {
    const dispatch = useDispatch();
    const showName = useSelector(getProfile);

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
        <ProfileView />
    )
}