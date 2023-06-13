import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './features/tasks-slice';
import { userReducer } from './features/users-slice';

const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		users: userReducer
	}
})

export type ApplicationState = ReturnType<typeof store.getState>
export type ApplicationDispatch = typeof store.dispatch;
export default store;