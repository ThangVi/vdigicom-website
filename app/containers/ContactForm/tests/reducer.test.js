import { fromJS } from 'immutable';
import contactFormReducer from '../reducer';

describe('contactFormReducer', () => {
  it('returns the initial state', () => {
    expect(contactFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
