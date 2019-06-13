/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const LOCAL_STORAGE_ACCOUNT_KEY = 'prism-account';

export const LOGIN = 'app/App/LOGIN';
export const LOGIN_SUCCESS = 'app/App/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'app/App/LOGIN_ERROR';
export const LOAD_AUTH = 'app/App/LOAD_AUTH';
export const LOAD_AUTH_SUCCESS = 'app/App/LOAD_AUTH_SUCCESS';

export const SHOW_ALERT = 'app/APP/SHOW_ALERT';
export const API_ERROR = 'app/APP/API_ERROR';
