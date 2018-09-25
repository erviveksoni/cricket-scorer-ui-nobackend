import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';

const constState = {
  strikerBatsmanId: 1,
  nonstrikerBatsmanId: 1,
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


describe('gameInformation/reducer', () => {
  it('shouldIncrementBatsmanScoreOnValidDelivery_6', () => {
    const initialState = cloneDeep(constState);

    const inputState = cloneDeep(constState);

    const getaction = {
      type: 'RECORD_BATSMAN_SCORE',
      runs: 6,
    };

    initialState.battingTeamPlayers[0].sixes += 1;
    initialState.battingTeamPlayers[0].runs += 6;

    expect(reducer(inputState, getaction)).toEqual(initialState);
  });
});
