import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the newsDetails state domain
 */

const selectNewsDetailsDomain = state => state.get('newsDetails', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewsDetails
 */

const makeSelectNewsDetails = () =>
  createSelector(selectNewsDetailsDomain, substate => substate.toJS());

export default makeSelectNewsDetails;
export { selectNewsDetailsDomain };
