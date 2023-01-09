import React from 'react';
import { loginWithGoogle } from '../services/firebase';

const AuthContext = React.createContext();

// create state and calls created login function; loginWithGoogle. State is set after succesful login.
const AuthProvider = (props) => {
    const [user, setUser] = React.useState(null);

    const login = async () => {
        const user = await loginWithGoogle();

        if (!user) {
            // TODO: Handle failed login
            // TODO: Handle failed login
            // TODO: Handle failed login
            // TODO: Handle failed login
            // TODO: Handle failed login
            // TODO: Handle failed login
            // TODO: Handle failed login
        }

        setUser(user);
    };

    const value = { user, login };

    return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };