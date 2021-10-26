/**
 * Chỉ là middleware trung gian, không chứa state hay reducer gì cả
 * Bắt sự kiện action và sử lý dữ liệu với bên khác ngoài reducer, Xử lý thành công gọi reducer để xử lý tiếp
 */
import {put, takeEvery} from 'redux-saga/effects'
import {Action} from "redux";
import {CHANGE_SPEED, TURN_ON, TURN_OFF} from "../reducers/FanReducer";

interface IAction extends Action {
  payload: string
}

/**
 * Xử lý của middleware
 * @param action
 */
function* changeSpeedWorker(action: IAction) {
  alert('change speed saga')
  // const {payload} = action
  // try {
  //   // kích phát hàm của slice
  //   yield put({type: createTodoSuccess.toString(), payload})
  // } catch (e) {
  //   yield put({type: createTodoFail.toString(), e})
  // }
}

function* turnOffWorker(action: IAction) {
  alert('turnOffWorker saga')
}

function* turnOnWorker(action: IAction) {
  alert('turnOffWorker saga')
}

function* fanWatcher() {
  /**
   * Chốt chặn lại sự kiện của slice
   */
  yield takeEvery(CHANGE_SPEED, changeSpeedWorker)
  yield takeEvery(TURN_OFF, turnOffWorker)
  yield takeEvery(TURN_ON, turnOnWorker)
}

export default fanWatcher