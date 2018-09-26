import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';
import actionNames from '../store/actionConstants';

const constState = {
  bowlingTeam: 'Team2',
  battingTeam: 'Team1',
  currentBowlsBowled: 0,
  totalOvers: 20,
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

describe('totalReducer/reducer', () => {
  it('returnDefaultStateTest', () => {
    const initialState = cloneDeep(constState);

    expect(reducer(undefined, {})).toEqual(initialState);
  });
});


describe('totalReducer/reducer', () => {
  it('shouldAdd4RunsToTotalScore', () => {
    const initialState = cloneDeep(constState);

    const expectedState = cloneDeep(constState);
    expectedState.currentInningScore.runsScored += 4;
    expectedState.currentInningScore.oversBowled += 0;
    expectedState.currentInningScore.wicketsFallen += 0;

    const lastbowl = {};
    lastbowl.runs = 4;
    lastbowl.wicket = false;
    lastbowl.extras = null;
    lastbowl.incrementBall = false;

    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
    };

    expect(reducer(initialState, getaction)).toEqual(expectedState);
  });
});

describe('totalReducer/reducer', () => {
  it('shouldAdd4Runs1WicketToTotalScore', () => {
    const initialState = cloneDeep(constState);

    const expectedState = cloneDeep(constState);
    expectedState.currentInningScore.runsScored += 4;
    expectedState.currentInningScore.oversBowled += 0;
    expectedState.currentInningScore.wicketsFallen += 1;

    const lastbowl = {};
    lastbowl.runs = 4;
    lastbowl.wicket = true;
    lastbowl.extras = null;
    lastbowl.incrementBall = false;

    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
    };

    expect(reducer(initialState, getaction)).toEqual(expectedState);
  });
});

describe('totalReducer/reducer', () => {
  it('shouldAdd6Runs1Ball1WicketToTotalScore', () => {
    const initialState = cloneDeep(constState);

    const expectedState = cloneDeep(constState);
    expectedState.currentInningScore.runsScored += 4;
    expectedState.currentInningScore.wicketsFallen += 1;
    expectedState.currentInningScore.oversBowled += 0;
    expectedState.currentBowlsBowled += 1;

    const lastbowl = {};
    lastbowl.runs = 4;
    lastbowl.wicket = true;
    lastbowl.extras = null;
    lastbowl.incrementBall = true;

    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
    };

    expect(reducer(initialState, getaction)).toEqual(expectedState);
  });
});


describe('totalReducer/reducer', () => {
  it('shouldAdd6Runs1Over1WicketToTotalScore', () => {
    const initialState = cloneDeep(constState);
    initialState.currentBowlsBowled += 5;

    const expectedState = cloneDeep(constState);
    expectedState.currentInningScore.runsScored += 4;
    expectedState.currentInningScore.wicketsFallen += 1;
    expectedState.currentInningScore.oversBowled += 1;
    expectedState.currentBowlsBowled += 0;

    const lastbowl = {};
    lastbowl.runs = 4;
    lastbowl.wicket = true;
    lastbowl.extras = null;
    lastbowl.incrementBall = true;

    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
    };

    expect(reducer(initialState, getaction)).toEqual(expectedState);
  });
});
