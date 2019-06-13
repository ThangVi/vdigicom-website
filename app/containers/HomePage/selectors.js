/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = (state) => state.get('home');

const makeSelectJobsList = () => createSelector(selectHome, (substate) => substate.get('jobs'));

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectJobsList
};
