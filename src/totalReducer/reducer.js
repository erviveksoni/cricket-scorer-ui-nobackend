const initialState = {
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
    case 'UPDATE_CURRENT_INNING_SCORE': {
      const cloneState = Object.assign({}, state);

      cloneState.currentInningScore.runsScored += action.runs;

      if (action.incrementWicket) {
        cloneState.currentInningScore.wicketsFallen += 1;
      }

      if (action.incrementOver) {
        cloneState.currentInningScore.oversBowled += 1;
      }

      return cloneState;
    }
    default:
      return state;
  }
};

export default totalScorerReducer;
