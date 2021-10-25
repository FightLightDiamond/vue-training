import {createStore, combineReducers} from "redux"
import FanReducer from './reducers/FanReducer'
import ProductReducer from './reducers/ProductReducer'
import CartReducer from './reducers/CartReducer'
import {FETCH_PRODUCTS_SUCCESS} from "./reducers/ProductReducer"

const rdc = combineReducers({
	fan: FanReducer,
	product: ProductReducer,
	cart: CartReducer
	,
})
const store = createStore(rdc)

store.dispatch(changeSpeed(9))
store.dispatch(turnOff())
store.dispatch(turnOn())
store.dispatch({
	type: FETCH_PRODUCTS_SUCCESS
})

store.subscribe(() => {
	console.log(123)
})

