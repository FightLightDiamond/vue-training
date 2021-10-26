import { all } from 'redux-saga/effects';
import fanRootSaga from "./fan.saga";
import mySaga from "../../../features/todo/todoSaga";

export default function* rootSaga() {
  yield all([
    mySaga(),
    fanRootSaga()
  ]);
}