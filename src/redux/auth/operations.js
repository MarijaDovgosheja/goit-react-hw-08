import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsInstance } from "../contacts/contactsApi";

const setAuthHeader = (token) => {
  contactsInstance.defaults.headers.common.Authorization = token;
};

const clearAuthHeader = () => {
  contactsInstance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (values, thunkAPI) => {
    try {
      const res = await contactsInstance.post("/users/signup", values);
      setAuthHeader(`Bearer ${res.data.token}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (values, thunkAPI) => {
    try {
      const res = await contactsInstance.post("/users/login", values);
      setAuthHeader(`Bearer ${res.data.token}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await contactsInstance.post("/users/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) return thunkAPI.rejectWithValue("No token");

    try {
      setAuthHeader(`Bearer ${token}`);
      const res = await contactsInstance.get("/users/current");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
