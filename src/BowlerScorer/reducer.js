import cloneDeep from 'lodash/cloneDeep';
import actionNames from '../store/actionConstants';
import ballEvaluator from '../utils/BallEvaluator';

const initialState = {
  isCurrentOverMaiden: true,
  isNewOverStarting: true,
  bowlingTeamPlayers: [
    {
      name: 'Player 21',
      id: 1,
      runs: 0,
      totalOversBowled: 0,
      currentOverBalls: 0,
      extras: 0,
      maidens: 0,
      wickets: 0,
    },
  ],
};


const bowlerScorerReducer = function bowlerScorerReducer(state = initialState, action) {
  switch (action.type) {
    case actionNames.NextBallActionName: {
      const newState = cloneDeep(state);
      if (newState.isNewOverStarting) {
        newState.isCurrentOverMaiden = true;
      }
      newState.isNewOverStarting = false;
      let currentBowler = {};
      for (let i = 0; i < newState.bowlingTeamPlayers.length; i += 1) {
        if (action.currentBowlerId === newState.bowlingTeamPlayers[i].id) {
          currentBowler = newState.bowlingTeamPlayers[i];
          break;
        }
      }
      const runs = ballEvaluator.evalBall(action.lastbowl);
      currentBowler.extras += runs.extras;
      currentBowler.runs += runs.total;
      newState.isCurrentOverMaiden = (newState.isCurrentOverMaiden && !runs.total);
      if (action.lastbowl.incrementBall) {
        currentBowler.currentOverBalls += 1;
        if (currentBowler.currentOverBalls === 6) {
          if (newState.isCurrentOverMaiden) {
            currentBowler.maidens += 1;
          }
          currentBowler.totalOversBowled += 1;
          currentBowler.currentOverBalls = 0;
          newState.isNewOverStarting = true;
        }
      }
      return newState;
    }
    case actionNames.AddNewBowlerActionName: {
      const newState = cloneDeep(state);
      const currentBowler = newState.bowlingTeamPlayers
        .filter(item => item.id === action.newBowler.id);
      if (currentBowler === null || currentBowler.length === 0) {
        const newBowler = {
          name: action.newBowler.name,
          id: action.newBowler.id,
          runs: 0,
          totalOversBowled: 0,
          currentOverBalls: 0,
          extras: 0,
          maidens: 0,
          wickets: 0,
        };

        newState.bowlingTeamPlayers.push(newBowler);
      }

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default bowlerScorerReducer;
