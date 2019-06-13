import { fromJS } from 'immutable';
import jobPageReducer from '../reducer';

describe('jobPageReducer', () => {
  it('returns the initial state', () => {
    expect(jobPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
