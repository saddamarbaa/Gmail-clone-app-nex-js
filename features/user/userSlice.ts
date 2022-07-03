import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthResponseType } from '../../types'

const initialState = {
	user: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		setLogInState: (
			state: { user: AuthResponseType | null },
			action: PayloadAction<AuthResponseType>,
		) => {
			state.user = action.payload
		},

		setLogOutState: (
			state: { user: AuthResponseType | null },
			action: PayloadAction,
		) => {
			state.user = null
		},
	},
})

export const { setLogInState, setLogOutState } = userSlice.actions

export const selectUser = (state: {
	user: { user: AuthResponseType | null }
}) => state.user.user

export default userSlice.reducer
