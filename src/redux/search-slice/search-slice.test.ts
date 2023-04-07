import { describe, expect, it } from 'vitest';
import { searchSliceInitialState } from './search-slice';
import reducer, { changeSearch } from './search-slice';
describe('SearchSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(searchSliceInitialState);
  });

  it('should handle a search string added to the default state', () => {
    const previousState = searchSliceInitialState;
    expect(reducer(previousState, changeSearch('Some text'))).toEqual({
      search: 'Some text',
      users: [],
      status: 'idle',
      error: '',
    });
  });
  it('should handle a search string added to the existing state', () => {
    const previousState = {
      search: 'Some text',
      users: [],
      status: 'idle',
      error: '',
    };
    expect(reducer(previousState, changeSearch('Another text'))).toEqual({
      search: 'Another text',
      users: [],
      status: 'idle',
      error: '',
    });
  });
});
