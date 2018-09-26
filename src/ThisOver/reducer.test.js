import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';

const expectedInitialState = {
  currentOver: [
    { byBat: 1, extra: null, wicket: false },
    { byBat: 1, extra: null, wicket: false },
    { byBat: 0, extra: null, wicket: true },
    { byBat: 6, extra: 'NB', wicket: false },
    { byBat: 0, extra: null, wicket: false },
    { byBat: 2, extra: 'B', wicket: false },
    { byBat: 1, extra: 'LB', wicket: false },
  ],
  currentBowlerId: 1,
};


describe('ThisOver/reducer', () => {
  it('defaultState should match ', () => {
    const expectedOutput = cloneDeep(expectedInitialState);
    expect(reducer(undefined, { type: 'default' })).toEqual(expectedOutput);
  });
});
