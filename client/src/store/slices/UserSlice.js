import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _user: { name: "ilya" },
  _isAuth: false,
};

export const userSlice = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    setUser: (state, user) => {
      state._user = user;
    },
    setIsAuth: (state, bool, payload) => {
      state._isAuth = bool;
    },
  },
});

export const { setUser, setIsAuth } = userSlice.actions;

export default userSlice.reducer;
