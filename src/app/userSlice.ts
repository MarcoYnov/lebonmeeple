import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/user";

interface IInitialState {
  jwtToken: string;
  user: IUser | null;
}

const initialState: IInitialState = {
  jwtToken: "",
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initialUser: (state, action) => {
      return {
        ...state,
        jwtToken: action.payload.userToken,
        user: action.payload.user,
      };
    },
    login: (_, action) => {
      const token = action.payload.token;
      const user = action.payload.userStorage;

      localStorage.setItem("jwtToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      return { jwtToken: token, user };
    },
    logout: () => {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("user");
      return { jwtToken: "", user: null };
    },
    updateUser: (state, action) => {
      const { email, avatar, username, userId } = action.payload;
      localStorage.setItem("user", JSON.stringify({email, avatar, username, userId}));
      return {
        ...state,
        user: {
          userId,
          email,
          avatar,
          username,
        },
      };
    },
  },
});

export const { login, logout, initialUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
