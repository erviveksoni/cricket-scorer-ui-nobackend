import cloneDeep from 'lodash/cloneDeep';
import actionNames from '../store/actionConstants';
import ballEvaluator from '../utils/BallEvaluator';

const initialState = {
  isCurrentOverMaiden: true,
  isNewOverStarting: true,
  bowlingTeamPlayers: [
    {
      name: 'Wasim',
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
      if (state.isNewOverStarting) {
        newState.isCurrentOverMaiden = true;
      }
      newState.isNewOverStarting = false;
      newState.bowlingTeamPlayers = state.bowlingTeamPlayers
        .filter(item => action.currentBowlerId === item.id)
        .map((item) => {
          const newItem = Object.assign({}, item);
          const runs = ballEvaluator.evalBall(action.lastbowl);
          newItem.extras += runs.extras;
          newItem.runs += runs.total;

          newState.isCurrentOverMaiden = (newState.isCurrentOverMaiden && !runs.total);
          if (action.lastbowl.incrementBall) {
            newItem.currentOverBalls += 1;
            if (newItem.currentOverBalls === 6) {
              if (newState.isCurrentOverMaiden) {
                newItem.maidens += 1;
              }
              newItem.totalOversBowled += 1;
              newItem.currentOverBalls = 0;
              newState.isNewOverStarting = true;
            }
          }
          return newItem;
        });
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
