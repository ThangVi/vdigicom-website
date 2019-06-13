// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { showAlert, loadAuthSuccess } from 'containers/App/actions';
import {
  LOCAL_STORAGE_ACCOUNT_KEY,
  API_ERROR,
  LOAD_AUTH,
} from 'containers/App/constants';
import { Messages } from '../../constants';
import { reactLocalStorage } from '../../utils';

export function* apiError() {
  try {
    yield put(push('/login'));
    yield put(showAlert({ type: 'error', message: Messages.loginRequired }));
  } catch (err) {
    // continue regardless of error
  }
}

export function* loadAuthFromLocalStorage() {
  try {
    const account = yield call(
      reactLocalStorage.getObject,
      LOCAL_STORAGE_ACCOUNT_KEY,
    );
    yield put(loadAuthSuccess(account));
  } catch (err) {
    // continue regardless of error
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(API_ERROR, apiError);
  yield takeEvery(LOAD_AUTH, loadAuthFromLocalStorage);
  // See example in containers/HomePage/saga.js
}
