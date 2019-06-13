// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
}
export function* getNewsList(action) {
  try {
    const newsResp = yield call(API.getNewsList);
    yield put(getNewsListSuccess(newsResp.responseData.elements));
  } catch (err) {
    //yield put(loginError(err));
  }
}