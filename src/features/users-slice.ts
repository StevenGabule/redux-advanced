import { PayloadAction } from './../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from './../../node_modules/@reduxjs/toolkit/src/nanoid';
type UserState = {
	entities: User[]
}

const initialState: UserState = {
	entities: []
}

type DraftUser = RequireOnly<User, 'realName' | 'alterEgo'>

const createUser = (draftUser: DraftUser) : User => {
	return { id: nanoid(), tasks: [], ...draftUser}
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		 addUser: (state, action: PayloadAction<User>) => {
			const user = createUser(action.payload)
			state.entities.unshift(user)
		 },
		 removeUser: (state, action: PayloadAction<User['id']>) => {
			const index = state.entities.findIndex(user => user.id === action.payload)
			state.entities.splice(index, 1);
		 }
	}
});

export const userReducer = userSlice.reducer
export const {addUser, removeUser} = userSlice.actions
export default userSlice;