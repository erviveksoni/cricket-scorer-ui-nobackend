import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';
import actionNames from '../store/actionConstants';

const constState = {
  strikerBatsmanId: 1,
  nonstrikerBatsmanId: 2,
  battingTeamPlayers: [
    {
      name: 'Sachin',
      id: 1,
      runs: 0,
      fours: 0,
      sixes: 0,
      ballsplayed: 0,
      isOut: false,
    },
    {
      name: 'Rahul',
      id: 2,
      runs: 0,
      fours: 0,
      sixes: 0,
      ballsplayed: 0,
      isOut: false,
    },
  ],
};

describe('batsmanScorer/reducer', () => {
  it('returnDefaultStateTest', () => {
    const initialState = cloneDeep(constState);

    expect(reducer(undefined, {})).toEqual(initialState);
  });
});


describe('batsmanScorer/reducer', () => {
  it('shouldIncrementBatsmanScoreOnValidDelivery_4', () => {
    const initialState = cloneDeep(constState);

    const inputState = cloneDeep(constState);

    const lastbowl = {};
    lastbowl.runs = 4;
    lastbowl.wicket = false;
    lastbowl.extras = null;

    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
    };

    initialState.battingTeamPlayers[0].fours += 1;
    initialState.battingTeamPlayers[0].runs += 4;

    expect(reducer(inputState, getaction)).toEqual(initialState);
  });
});


describe('batsmanScorer/reducer', () => {
  it('shouldIncrementBatsmanScoreOnValidDelivery_6', () => {
    const initialState = cloneDeep(constState);

    const inputState = cloneDeep(constState);

    const lastbowl = {};
    lastbowl.runs = 6;
    lastbowl.wicket = false;
    lastbowl.extras = null;

    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
    };

    initialState.battingTeamPlayers[0].sixes += 1;
    initialState.battingTeamPlayers[0].runs += 6;

    expect(reducer(inputState, getaction)).toEqual(initialState);
  });
});

describe('batsmanScorer/reducer', () => {
  it('shoundIncrementValidBallsPlayedwithRuns', () => {
    const initialState = cloneDeep(constState);

    const inputState = cloneDeep(constState);

    const lastbowl = {};
    lastbowl.runs = 1;
    lastbowl.wicket = false;
    lastbowl.extras = null;
    lastbowl.incrementBall = true;

    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
    };

    initialState.battingTeamPlayers[0].ballsplayed += 1;
    initialState.battingTeamPlayers[0].runs += 1;

    expect(reducer(inputState, getaction)).toEqual(initialState);
  });
});
