import { call, put, takeLatest } from 'redux-saga/effects';

import { sendContactSuccess } from './actions';
import messages from 'constants/messages';
import { SEND_CONTACT } from './constants';
import { API } from '../../network';
import { showAlert } from 'containers/App/actions';

export function* sendContact(args) {
  try {
    const contactSuccess = yield call(API.sendContact, args.postData);
    yield put(sendContactSuccess(contactSuccess));
    yield put(showAlert({ type: 'success', message: messages.sendContactSuccess }));
  } catch (err) {
  	yield put(showAlert({ type: 'error', message: messages.sendContactError }));
  }
}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(SEND_CONTACT, sendContact);
}

