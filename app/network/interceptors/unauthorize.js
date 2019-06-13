import { LOCAL_STORAGE_ACCOUNT_KEY } from 'containers/App/constants';
import { reactLocalStorage } from 'utils';
import { API_ERROR } from 'containers/App/constants';
import store from 'app';

const UnauthorizeStatusCode = 401;
const LoginScene = '/login';

export function onFullfilled(response) {
  return Promise.resolve(response);
}

export function onRejected(error) {
  if (error) {
    const config = error.config;
    const response = error.response;
    if (response && UnauthorizeStatusCode == response.status) {
      reactLocalStorage.clear();
      store.dispatch({
        type: API_ERROR,
        payload: error,
      });
    }
  }
}