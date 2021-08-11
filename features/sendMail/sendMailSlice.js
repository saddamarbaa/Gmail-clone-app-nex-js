/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	compose: false,
};

const sendMailSlice = createSlice({
	name: "compose",
	initialState,

	reducers: {
		setShowComposeState: (state, action) => {
			state.compose = true;
		},

		setHideComposeState: (state, action) => {
			state.compose = false;
		},
	},
});

export const {
	setShowComposeState,
	setHideComposeState,
} = sendMailSlice.actions;

export const selectSendMail = (state) => state.sendEmail.compose;

export default sendMailSlice.reducer;
