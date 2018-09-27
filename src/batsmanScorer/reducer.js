import cloneDeep from 'lodash/cloneDeep';
import actionNames from '../store/actionConstants';

const initialState = {
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

const batsManScorerReducer = function batsManScorerReducer(state = initialState, action) {
  switch (action.type) {
    case actionNames.NextBallActionName: {
      const cloneState = cloneDeep(state);

      const currentBatsman = cloneState.battingTeamPlayers
        .filter(item => item.id === cloneState.strikerBatsmanId);

      if (action.lastbowl.extras) {
        return cloneState;
      }
      if (action.lastbowl.incrementBall) {
        currentBatsman[0].ballsplayed += 1;
      }

      if (action.lastbowl.runs === 4) {
        currentBatsman[0].fours += 1;
      } else if (action.lastbowl.runs === 6) {
        currentBatsman[0].sixes += 1;
      }

      currentBatsman[0].runs += action.lastbowl.runs;

      if ((action.lastbowl.runs % 2 !== 0 && !action.isOverComplete) ||
      (action.lastbowl.runs % 2 === 0 && action.isOverComplete)) {
        const nonstrikerBatsmanId = cloneState.strikerBatsmanId;
        cloneState.strikerBatsmanId = cloneState.nonstrikerBatsmanId;
        cloneState.nonstrikerBatsmanId = nonstrikerBatsmanId;
      }

      return cloneState;
    }
    default:
      return state;
  }
};

export default batsManScorerReducer;
