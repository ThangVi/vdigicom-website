import { fromJS } from 'immutable';
import newsDetailsReducer from '../reducer';

describe('newsDetailsReducer', () => {
  it('returns the initial state', () => {
    expect(newsDetailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
