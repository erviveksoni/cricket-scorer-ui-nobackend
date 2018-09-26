import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';
import Constants from '../store/Constants';

const initialState = {
  currentOver: [
    { runs: 1, extra: null, wicket: false },
    { runs: 1, extra: null, wicket: false },
    { runs: 0, extra: null, wicket: true },
    { runs: 6, extra: Constants.EXTRAS.NB, wicket: false },
    { runs: 0, extra: null, wicket: false },
    { runs: 2, extra: Constants.EXTRAS.WD, wicket: false },
    { runs: 1, extra: Constants.EXTRAS.B, wicket: false },
  ],
  currentBowlerId: 1,
};


describe('ThisOver/reducer', () => {
  it('defaultState should match ', () => {
    const expectedOutput = cloneDeep(initialState);
    expect(reducer(undefined, { type: 'default' })).toEqual(expectedOutput);
  });
});
