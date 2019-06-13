import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the jobPage state domain
 */

const selectJobPageDomain = state => state.get('jobPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by JobPage
 */

const makeSelectJobPage = () =>
  createSelector(selectJobPageDomain, substate => substate.toJS());

export default makeSelectJobPage;
export { selectJobPageDomain };
