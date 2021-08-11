/** @format */

import { createSlice } from "@reduxjs/toolkit";

// const [user, setUser] = useState();
const initialState = {
	user: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,

	reducers: {
		setLogInState: (state, action) => {
			// setUser(action.payload);
			state.user = action.payload;
		},

		setLogOutState: (state, action) => {
			// setUser(null);
			state.user = null;
		},
	},
});

export const { setLogInState, setLogOutState } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
