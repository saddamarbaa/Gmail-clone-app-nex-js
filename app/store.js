/** @format */

import { configureStore } from "@reduxjs/toolkit";
import emailMailReducer from "../features/email/emailSlice";
import sendMailReducer from "../features/sendMail/sendMailSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
	reducer: {
		sendEmail: sendMailReducer,
		email: emailMailReducer,
		user: userReducer,
	},
});
