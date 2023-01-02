import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "api/authApi";

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
    try {        
        const data = await authAPI.registerUser(credentials);        
        authAPI.setAuthHeader(data.token);
        return data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {        
        const data = await authAPI.logInUser(credentials);        
        authAPI.setAuthHeader(data.token);
        return data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk("auth/logout", async (_,thunkAPI) => {
    try {        
        const data = await authAPI.logOutUser();        
        authAPI.clearAuthHeader();
        return data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshCurrentUser = createAsyncThunk("auth/refresh", async (_,thunkAPI) => {          
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Token invalid");
        }
        authAPI.setAuthHeader(persistedToken);
     try {     
        const data = await authAPI.refreshUser();        
        return data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})