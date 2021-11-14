import React from 'react';
import { useNavigate } from 'react-router-dom';
// API
import API from '../API';
// Components
import Button from './Button';
// Styles
import { Wrapper } from './Login.styles';
// Context
import { Context } from '../context';

const errorInitialState = {
    isError: false,
    message: '',
};

const Login: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(errorInitialState);

    const [, setUser] = React.useContext(Context);
    const navigate = useNavigate();

    const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') {
            setUsername(value);
        }

        if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (): Promise<void> => {
        setError(errorInitialState);
        try {
            const requestToken = await API.getRequestToken();

            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            );

            if (!sessionId.success) {
                throw new Error('Error with sessionId');
            }

            setUser({ sessionId: sessionId.session_id, username });

            navigate('/');
        } catch (exception: any) {
            setError({
                isError: true,
                message: String(exception),
            });
        }
    };

    return (
        <Wrapper>
            {error.isError && <div className="error">{error.message}</div>}
            <label>Username:</label>
            <input
                type="text"
                value={username}
                name="username"
                placeholder="Username"
                onChange={handleInput}
            />
            <input
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={handleInput}
            />
            <Button text="Login" callback={handleSubmit} />
        </Wrapper>
    );
};

export default Login;
