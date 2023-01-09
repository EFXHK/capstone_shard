import React from 'react';
import { AuthContext } from '../context/auth';

// useContext uses value created in src/context/auth.js
function useAuth() {
    const value = React.useContext(AuthContext);

    if (!value) {
        throw new Error("AuthContext's value is undefined.");
    }

    return value;
}

export { useAuth };