import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import emailMailReducer from '../features/email/emailSlice'
import sendMailReducer from '../features/sendMail/sendMailSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
	reducer: {
		sendEmail: sendMailReducer,
		email: emailMailReducer,
		user: userReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
