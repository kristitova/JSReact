import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase';

export const LoginFormTestIds = {
    submit: 'LoginForm-submit',
    emailField: 'LoginForm-emailField',
    passwordField: 'LoginForm-passwordField',
}
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    /*
        const handleSubmit = async (e) => {
            e.preventDefault();
            setError("");
    
            try {
                await auth.signInWithEmailAndPassword(email, password);
            } catch (error) {
                setError(error.message);
            }
        };
        */

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to login to your account.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        data-testid={LoginFormTestIds.emailField}
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        data-testid={LoginFormTestIds.passwordField}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button data-testid={LoginFormTestIds.submit} type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
};