// src/api/api.ts

export const login = async (email: string, password: string) => {
    const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
};

export const signup = async (email: string, password: string) => {
    const response = await fetch('http://localhost:4000/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
};
