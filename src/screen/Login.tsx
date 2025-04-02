import { AuthProvider, QueryFunctionContext } from "react-admin";

export const Login: AuthProvider = {
    login: function (params: any): Promise<{ redirectTo?: string | boolean; } | void | any> {
        throw new Error("Function not implemented.");
    },
    logout: function (params: any): Promise<void | false | string> {
        throw new Error("Function not implemented.");
    },
    checkAuth: function (params: any & QueryFunctionContext): Promise<void> {
        throw new Error("Function not implemented.");
    },
    checkError: function (error: any): Promise<void> {
        throw new Error("Function not implemented.");
    }
}