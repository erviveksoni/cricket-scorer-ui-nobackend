import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';

const constState = {
  previousInningScore: {
    runsScored: 0,
    wicketsFallen: 0,
    oversBowled: 0,
  },
  currentInningScore: {
    runsScored: 0,
    wicketsFallen: 0,
    oversBowled: 0,
  },
};

describe('gameInformation/reducer', () => {
  it('initalstatetest', () => {
    const initialState = cloneDeep(constState);

    expect(reducer(undefined, {})).toEqual(initialState);
  });
});


describe('gameInformation/reducer', () => {
  it('shouldAdd4RunsToTotalScore', () => {
    const initialState = cloneDeep(constState);

    const expectedState = cloneDeep(constState);
    expectedState.currentInningScore.runsScored += 4;
    expectedState.currentInningScore.oversBowled += 0;
    expectedState.currentInningScore.wicketsFallen += 0;
    const getaction = {
      type: 'UPDATE_CURRENT_INNING_SCORE',
      runs: 4,
      incrementOver: false,
      incrementWicket: false,
    };

    expect(reducer(initialState, getaction)).toEqual(expectedState);
  });
});

describe('gameInformation/reducer', () => {
  it('shouldAdd4Runs1WicketToTotalScore', () => {
    const initialState = cloneDeep(constState);

    const expectedState = cloneDeep(constState);
    expectedState.currentInningScore.runsScored += 4;
    expectedState.currentInningScore.oversBowled += 0;
    expectedState.currentInningScore.wicketsFallen += 1;
    const getaction = {
      type: 'UPDATE_CURRENT_INNING_SCORE',
      runs: 4,
      incrementOver: false,
      incrementWicket: true,
    };

    expect(reducer(initialState, getaction)).toEqual(expectedState);
  });
});

describe('gameInformation/reducer', () => {
  it('shouldAdd6Runs1Over1WicketToTotalScore', () => {
    const initialState = cloneDeep(constState);

    const expectedState = cloneDeep(constState);
    expectedState.currentInningScore.runsScored += 4;
    expectedState.currentInningScore.oversBowled += 1;
    expectedState.currentInningScore.wicketsFallen += 1;
    const getaction = {
      type: 'UPDATE_CURRENT_INNING_SCORE',
      runs: 4,
      incrementOver: true,
      incrementWicket: true,
    };

    expect(reducer(initialState, getaction)).toEqual(expectedState);
  });
});
