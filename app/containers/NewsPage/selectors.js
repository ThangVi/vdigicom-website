import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the new state domain
 */

const selectNewDomain = state => state.get('new', initialState);

/**
 * Other specific selectors
 */
const makeNewsList = () => createSelector(
  selectNewDomain,
  (homeState) => homeState.get('newsList')
);

/**
 * Default selector used by New
 */

const makeSelectNew = () =>
  createSelector(selectNewDomain, substate => substate.toJS());

export default makeSelectNew;
export { selectNewDomain, makeNewsList };
