/*
 *
 * ContactForm actions
 *
 */

import { DEFAULT_ACTION, SEND_CONTACT, SEND_CONTACT_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function sendContact(postData) {
  return {
    type: SEND_CONTACT,
    postData
  };
}

export function sendContactSuccess() {
  return {
    type: SEND_CONTACT_SUCCESS,
  };
}