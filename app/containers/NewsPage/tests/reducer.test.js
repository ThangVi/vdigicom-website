import { fromJS } from 'immutable';
import newReducer from '../reducer';

describe('newReducer', () => {
  it('returns the initial state', () => {
    expect(newReducer(undefined, {})).toEqual(fromJS({}));
  });
});
