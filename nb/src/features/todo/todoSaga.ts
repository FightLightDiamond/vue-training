/**
 * Chỉ là middleware trung gian, không chứa state hay reducer gì cả
 * Bắt sự kiện action và sử lý dữ liệu với bên khác ngoài reducer, Xử lý thành công gọi reducer để xử lý tiếp
 */
import {apply, call, cps, delay, fork, put, putResolve, spawn, take, takeEvery, takeLeading} from 'redux-saga/effects'
import {Action} from "redux";
import {createTodo, createTodoSuccess, createTodoFail } from './todoSlice'
// import store from "../../app/stores";
interface IAction extends Action {
	payload: string
}
import axios from "axios";
import {channel, eventChannel} from "redux-saga";
import {emitter} from "next/client";

async function getAPI(segment: string) {
	try {
		const response =  await axios.get('https://pokeapi.co/api/v2/' + segment)
		return [response, null]
	} catch (error) {
		return [null, error]
	}
}

const Server = {
	api: async (segment: string) => {
		return getAPI(segment)
	},
	alert: (msg: string) => {
		console.log(msg)
	}
}

function fC() {
	return eventChannel((emitter: any): any => {
		emitter('abc')
		const unsubscribe = () => {
			console.log('unsubscribe')
		}
		return unsubscribe
	})
}

/**
 * Xử lý của middleware
 * @param action
 */
function* createTodoWorker(action: IAction): any {
	// const chan = yield call(channel)
	// console.log({chan})
	//
	// /**
	//  * Giống async await
	//  */
	// // const r = yield cps(Server.alert, 'fsfsjf') //stop luôn
	// // const res: any = yield axios.get('https://pokeapi.co/api/v2/pokemon/')
	// const [response, error] = yield call([Server, Server.api], 'pokemon')
	// // const res: any = yield apply(Server, Server.api, ['pokemon'])
	// // const res: any = yield call(api, 'pokemon')
	// // const res: any = yield api('pokemon')
	// if(response) {
	// 	console.log(response.status)
	// 	console.log(response.data)
	// }
	//
	// // action.payload = response.data.count

	//
	// //Chạy độc lập
	// const res = yield spawn(notifyBegin, 'SPAWM')
	// console.log('spawn', res)
	// //Chờ task con chạy xong mới chạy
	// const resf = yield fork(notifyBegin, 'FORK')
	// console.log('fork', resf)

	const {payload} = action

	try {
		// kích phát hàm của slice => tương tự dispatch
		// store.dispatch({type: createTodoSuccess.toString(), payload})
		yield put({type: createTodoSuccess.toString(), payload})
		// const resolve =  yield putResolve({type: createTodoSuccess.toString(), payload})
	} catch (e) {
		yield put({type: createTodoFail.toString(), e})
	}
	//
	// const eventC = yield call(fC)
	// console.log({eventC})
	// const pl = yield take(eventC)
	// console.log({pl})
}


function* notifyBegin(payload: any) {
	yield delay(3000)
	yield put({type: createTodoSuccess.toString(), payload})
}

function* todoWatcher() {
	/**
	 * Chốt chặn lại sự kiện của slice
	 */
	// yield takeEvery(createTodo.toString(), createTodoWorker)
	// yield take(createTodo.toString())
	// yield takeEvery(createTodo.toString(), createTodoWorker)
	yield takeLeading(createTodo.toString(), createTodoWorker)
}
export default todoWatcher