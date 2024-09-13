// src/context/auth-context.tsx
import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import {useRouter} from "next/router";

const HANDLERS = {
    INITIALIZE: 'INITIALIZE',
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT'
};

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null
};

const handlers = {
    [HANDLERS.INITIALIZE]: (state: any, action: any) => {
        const user = action.payload;
        return {
            ...state,
            ...(user
                ? { isAuthenticated: true, isLoading: false, user }
                : { isLoading: false })
        };
    },
    [HANDLERS.SIGN_IN]: (state: any, action: any) => {
        const user = action.payload;
        return { ...state, isAuthenticated: true, user };
    },
    [HANDLERS.SIGN_OUT]: (state: any) => ({ ...state, isAuthenticated: false, user: null })
};

const reducer = (state: any, action: any) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props: any) => {
    const { children } = props;
    const router  = useRouter();
    const [state, dispatch] = useReducer(reducer, initialState);
    const initialized = useRef(false);

    const initialize = async () => {
        if (initialized.current) return;

        initialized.current = true;
        let isAuthenticated = false;
        try {
            isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
        } catch (err) {
            console.error(err);
        }

        if (isAuthenticated) {
            const user = JSON.parse(sessionStorage.getItem('user') || '{}');
            dispatch({ type: HANDLERS.INITIALIZE, payload: user });
        } else {
            dispatch({ type: HANDLERS.INITIALIZE });
        }
    };

    useEffect(() => {
        initialize();
    }, []);

    const signIn = async (data: any) => {
        dispatch({ type: HANDLERS.SIGN_IN, payload: data });
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('user', JSON.stringify(data.user));

        // After login, redirect to the chat page
        router.push('/chat');

    };

    const signOut = () => {
        dispatch({ type: HANDLERS.SIGN_OUT });
        sessionStorage.clear();
        // After login, redirect to the chat page
        router.push('/Login');

    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = { children: PropTypes.node };
export const useAuthContext = () => useContext(AuthContext);
