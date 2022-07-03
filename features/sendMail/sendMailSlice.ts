import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	compose: false,
}

const sendMailSlice = createSlice({
	name: 'compose',
	initialState,

	reducers: {
		setShowComposeState: (
			state: { compose: boolean },
			action: PayloadAction,
		) => {
			state.compose = true
		},

		setHideComposeState: (
			state: { compose: boolean },
			action: PayloadAction,
		) => {
			state.compose = false
		},
	},
})

export const { setShowComposeState, setHideComposeState } =
	sendMailSlice.actions

export const selectSendMail = (state: { sendEmail: { compose: boolean } }) =>
	state.sendEmail.compose

export default sendMailSlice.reducer
