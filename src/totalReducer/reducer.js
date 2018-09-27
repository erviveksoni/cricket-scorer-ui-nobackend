import cloneDeep from 'lodash/cloneDeep';
import actionNames from '../store/actionConstants';
import ballEvaluator from '../utils/BallEvaluator';

const initialState = {
  bowlingTeam: 'Team 2',
  battingTeam: 'Team 1',
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

const totalScorerReducer = function totalScorerReducer(state = initialState, action) {
  switch (action.type) {
    case actionNames.NextBallActionName: {
      const cloneState = cloneDeep(state);

      const runs = ballEvaluator.evalBall(action.lastbowl);

      cloneState.currentInningScore.runsScored += runs.total;

      if (action.lastbowl.wicket) {
        cloneState.currentInningScore.wicketsFallen += 1;
      }

      if (action.lastbowl.incrementBall) {
        cloneState.currentBowlsBowled += 1;
      }

      if (cloneState.currentBowlsBowled === 6) {
        cloneState.currentInningScore.oversBowled += 1;
        cloneState.currentBowlsBowled = 0;
      }

      return cloneState;
    }
    default:
      return state;
  }
};

export default totalScorerReducer;
