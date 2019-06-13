/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOAD_AUTH,
  LOAD_AUTH_SUCCESS,
  SHOW_ALERT,
  API_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  account: false,
  userData: {
    repositories: false,
  },
  systemAlert: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('loading', true).set('account', false);
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('account', action.response.responseData);
    case LOGIN_ERROR:
      return state.set('loading', false);
    case SHOW_ALERT:
      return state.set('systemAlert', action.message);
    case LOAD_AUTH:
      return state.set('account', false);
    case LOAD_AUTH_SUCCESS:
      return state.set('account', action.account);
    case API_ERROR:
      return state.set('apiError', action.payload).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
