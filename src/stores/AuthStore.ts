import { create } from 'zustand';

interface AuthState {
    token: string | null;
    user: { email: string } | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
    token: localStorage.getItem('token'),
    user: (() => {
        const userData = localStorage.getItem('user');
        return userData && userData !== 'undefined' ? JSON.parse(userData) : null;
    })(),

    login: async (email, password) => {
        const response = await fetch(`http://localhost:1818/auth/login`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            throw new Error('Login Failed');
        }
        const { token, user } = await response.json();
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        set({ token, user });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({ token: null, user: null });
    },
    isAuthenticated: ()=>{
        return !!get().token;
    },
}));