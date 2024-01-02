import { useState, createContext, useContext } from "react";
import { registerRequest, loginRequest, logoutRequest } from "../api/auth";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const registerUser = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
        }
    }

    const login = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async (user) => {
        try {
            const res = await logoutRequest(user);
            console.log(res.data)
            setIsAuthenticated(false)
        } catch (error) {
            console.log(error)
        }
    }

    return <AuthContext.Provider value={{
        registerUser,
        login,
        logout,
        user,
        isAuthenticated
    }}>
        {children}
    </AuthContext.Provider>
}

