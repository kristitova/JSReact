import React from 'react';
import { ProfileWithHoc } from './../../hocs/ProfileWithHoc';

export const ProfileRender = ({ showName, onChange }) => {
    return (
        <div>
            <h1>Profile</h1>
            <input
                type='checkbox'
                checked={showName}
                value={showName}
                onChange={onChange}


            />
        </div >
    )
}
export const Profile = ProfileWithHoc(ProfileRender);
