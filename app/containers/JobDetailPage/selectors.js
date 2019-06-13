import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the jobDetailPage state domain
 */

const selectJobDetailPageDomain = state =>
  state.get('jobDetailPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by JobDetailPage
 */

const makeSelectJobDetailPage = () =>
  createSelector(selectJobDetailPageDomain, substate => substate.toJS());

export default makeSelectJobDetailPage;
export { selectJobDetailPageDomain };
