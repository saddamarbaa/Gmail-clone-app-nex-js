import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { EmailType } from '../../types'

const initialState = {
	email: null,
}

const emailSlice = createSlice({
	name: 'email',
	initialState,

	reducers: {
		setEmailState: (
			state: { email: EmailType | null },
			action: PayloadAction<EmailType>,
		) => {
			state.email = action.payload
		},
	},
})

export const { setEmailState } = emailSlice.actions

export const selectEmail = (state: { email: { email: EmailType | null } }) =>
	state.email.email

export default emailSlice.reducer
