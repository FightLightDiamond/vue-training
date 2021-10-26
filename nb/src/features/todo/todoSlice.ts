import {createAsyncThunk, createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {takeEvery} from "redux-saga/effects";

export interface TodoState {
	loading: boolean;
	items: string[]
}

const initialState: TodoState = {
	loading: false,
	items: ['A', 'B', 'C']
}

interface IReducer {
	getTodos: (state: Draft<any>) => {}
	createTodo: (state: Draft<any>, action: PayloadAction<string>) => {}
}

export const counterSlice = createSlice({
	name: 'todo',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		getTodos: (state) => {
			return state
		},
		createTodo: (state, action: PayloadAction<string>) => {
			console.log('Create')
			state.loading = true
			console.log('After Create')
		},
		createTodoSuccess: (state, action: PayloadAction<string>) => {
			state.items = [...state.items, action.payload]
			state.loading = false
			console.log('Success: ' + action.payload)
		},
		createTodoFail: (state, action: PayloadAction<string>) => {
			state.loading = false
			console.log('Fail')
		},
	},
})

/**
 * Tự động tạo action từ hàm reducers
 */
export const { getTodos, createTodo, createTodoSuccess, createTodoFail } = counterSlice.actions

export default counterSlice.reducer