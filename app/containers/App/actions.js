/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOAD_AUTH,
  LOAD_AUTH_SUCCESS,
  SHOW_ALERT,
} from './constants';

export function userLogin(loginInfo) {
  return {
    type: LOGIN,
    loginInfo,
  };
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}

export function getAuthInLocalStorage() {
  return {
    type: LOAD_AUTH,
  };
}

export function loadAuthSuccess(account) {
  return {
    type: LOAD_AUTH_SUCCESS,
    account,
  };
}

export function showAlert(message) {
  return {
    type: SHOW_ALERT,
    message,
  };
}
