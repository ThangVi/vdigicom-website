/*
 *
 * ContactForm reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SEND_CONTACT, SEND_CONTACT_SUCCESS } from './constants';

export const initialState = fromJS({
	contactSuccess: false,
});

function contactFormReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SEND_CONTACT:
    	return state;
    case SEND_CONTACT_SUCCESS:
	    return state
	    	.set('contactSuccess', true);
    default:
      return state;
  }
}

export default contactFormReducer;