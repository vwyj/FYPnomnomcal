import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Context
const AuthContext = createContext();

// Provider
const AuthProvider = ({ children }) => {
    // Global State
    const [state, setState] = useState({
        user: null,
        token: "",
    });

    // Default Axios Setting
    axios.defaults.baseURL = "http://192.168.1.88:5000/api/v1";

    // Initial Local Storage Data
    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data  = await AsyncStorage.getItem("@auth");
            let loginData = JSON.parse(data);
            setState({ ...state, user: loginData?.user, token: loginData?.token });
        };
        loadLocalStorageData();
    }, []);

    return(
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    );
};

export{ AuthContext, AuthProvider };
