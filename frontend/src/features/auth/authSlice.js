import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user? user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const register = createAsyncThunk('auth/register', async(user, thunkAPI)=> {
    try {
        
    } catch (error) {
        
    }
})


export const login = createAsyncThunk('auth/login', async(user, thunkAPI)=> {
    try {
        
    } catch (error) {
        
    }
})


export const logout = createAsyncThunk('', async()=> {})

export const authSlice = createSlice()


export default authSlice.reducer;