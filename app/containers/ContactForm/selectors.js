import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contactForm state domain
 */

const selectContactFormDomain = state => state.get('contactForm', initialState);

/**
 * Other specific selectors
 */


const makeSelectStatus = () => createSelector(selectContactFormDomain, substate => substate.get('contactSuccess'));


/**
 * Default selector used by ContactForm
 */

const makeSelectContactForm = () =>
  createSelector(selectContactFormDomain, substate => substate.toJS());

export default makeSelectContactForm;
export { selectContactFormDomain, makeSelectStatus };
