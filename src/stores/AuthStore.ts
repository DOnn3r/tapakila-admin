interface AuthState {
    token: string | null;
    user: { username: string; permissions: string[] } | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: () => boolean;
}