import { AuthProvider } from "react-admin";
import { useAuthStore } from "../stores/AuthStore";

export const authProvider: AuthProvider = {
    login: async ({ email, password }) => {
        const { login } = useAuthStore.getState();
        try {
            await login(email, password);
            return Promise.resolve("/");
        } catch (error) {
            return Promise.reject(error);
        }
    },
    logout: () => {
        const { logout } = useAuthStore.getState();
        logout();
        return Promise.resolve();
    },
    checkAuth: () => {
        const { isAuthenticated } = useAuthStore.getState();
        return isAuthenticated() ? Promise.resolve() : Promise.reject();
    },
    checkError: (error) => {
        if(error.status === 401 || error.status === 403){
            return Promise.reject();
        }
        return Promise.resolve();
    }
}