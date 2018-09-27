import cloneDeep from 'lodash/cloneDeep';
import actionNames from '../store/actionConstants';
import ballEvaluator from '../utils/BallEvaluator';

const initialState = {
  bowlingTeamPlayers: [
    {
      name: 'Wasim',
      id: 1,
      runs: 0,
      totalOversBowled: 0,
      currentOverBalls: 0,
      extras: 0,
      madins: 0,
      wickets: 0,
    },
  ],
};


const bowlerScorerReducer = function bowlerScorerReducer(state = initialState, action) {
  switch (action.type) {
    case actionNames.NextBallActionName: {
      const newState = cloneDeep(state);
      newState.bowlingTeamPlayers = state.bowlingTeamPlayers
        .map((item) => {
          const newItem = Object.assign({}, item);
          if (action.currentBowlerId === newItem.id) {
            const runs = ballEvaluator.evalBall(action.lastbowl);
            newItem.extras += runs.extras;
            newItem.runs += runs.total;
            if (action.lastbowl.incrementBall) {
              newItem.currentOverBalls += 1;
              if (newItem.currentOverBalls === 6) {
                newItem.totalOversBowled += 1;
                newItem.currentOverBalls = 0;
              }
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
          madins: 0,
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
