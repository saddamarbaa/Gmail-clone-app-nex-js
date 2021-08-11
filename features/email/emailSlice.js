/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: null,
};

const emailSlice = createSlice({
	name: "email",
	initialState,

	reducers: {
		setEmailState: (state, action) => {
			state.email = action.payload;
		},
	},
});

export const { setEmailState } = emailSlice.actions;

export const selectEmail = (state) => state.email.email;

export default emailSlice.reducer;
