import { nanoid } from 'nanoid';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

export type TasksState = { entities: Task[] }

type DraftTask = RequireOnly<Task, 'title'>;

const createTask = (draftTask: DraftTask): Task => {
	return { ...draftTask, id: nanoid() }
}

const initialState: TasksState = { entities: [] }

const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (): Promise<Task[] | null> => {
	const response = await fetch('/api/tasks')
		.then(response => response.json())
		.catch(err => console.log(err.message))

	if (!response.ok) return null;
	return response.tasks
})

fetchTasks();

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<DraftTask>) => {
			const newTask = createTask(action.payload)
			state.entities.unshift(newTask)
		},
		removeTask: (state, action: PayloadAction<Task['id']>) => {
			const index = state.entities.findIndex(task => task.id === action.payload)
			state.entities.splice(index, 1)
		},
	},
})

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions
export default tasksSlice;