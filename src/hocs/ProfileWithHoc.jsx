import { useDispatch, useSelector } from 'react-redux';
import { ACTION } from '../Redux/store/Profile_/reducer/actionTypes';
import { getProfile } from '../Redux/store/Profile_/reducer/selectors';

export const ProfileWithHoc = (Component) => {
    return (props) => {
        const dispatch = useDispatch();
        const showName = useSelector(getProfile);

        const onChange = () => {
            dispatch({
                type: ACTION
            })
        }

        return <Component
            {...props}
            showName={showName}
            onChange={onChange}
        />
    }
}