import react from 'react';
import { Link } from 'react-router-dom';

export const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>

            <div>
                <Link to="/login">Sign In</Link>
            </div>
            <div>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )

}
