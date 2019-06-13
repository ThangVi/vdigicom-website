import { fromJS } from 'immutable';
import jobDetailPageReducer from '../reducer';

describe('jobDetailPageReducer', () => {
  it('returns the initial state', () => {
    expect(jobDetailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
