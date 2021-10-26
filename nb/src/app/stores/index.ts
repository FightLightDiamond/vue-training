import {createStore, combineReducers, applyMiddleware} from "redux"
import FanReducer from './reducers/FanReducer'
import ProductReducer from './reducers/ProductReducer'
import CartReducer from './reducers/CartReducer'
import TodoReducer from '../../features/todo/todoSlice'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "@redux-saga/core";
import sg from "./sagas";
import {Action} from "@reduxjs/toolkit";

const rdc = combineReducers({
	fan: FanReducer,
	product: ProductReducer,
	cart: CartReducer,
	todo: TodoReducer
})

type TAction = {
	type: string
	payload: any
}

/**
 * Middleware
 * @param store
 */
const myMiddleware = (store: any) => (next: any) => (action: TAction) => {
	console.log('myMiddleware', action)

	/**
	 * Store của bạn thực hiện
	 */
	/**
	 * Truyền qua bước tiếp theo
	 * Nếu hết thì nó dispatch action
	 */
	return next(action);
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	rdc,
	composeWithDevTools(
		applyMiddleware(sagaMiddleware, myMiddleware),
		// other store enhancers if any
	)
)

sagaMiddleware.run(sg)

export default store;

// store.dispatch(changeSpeed(9))
// store.dispatch(turnOff())
// store.dispatch(turnOn())
// store.dispatch({
// 	type: FETCH_PRODUCTS_SUCCESS
// })
//
// store.subscribe(() => {
// 	console.log(123)
// })

