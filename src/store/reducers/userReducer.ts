import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
}

const initialState: UserState = {
  id: 1,
  name: {
    firstname: "",
    lastname: "",
  },
  email: "",
};

export const fetchUserInfo = (id: number) => async (dispatch: any) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    const data = await response.json();
    dispatch(setUser(data));
  } catch (error) {
    console.error("Failed to fetch user info:", error);
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name.firstname = action.payload.name.firstname;
      state.name.lastname = action.payload.name.lastname;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
