const initialState = {
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

const totalScorerReducer = function totalScorerReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CURRENT_INNING_SCORE': {
      const cloneState = Object.assign({}, state);

      cloneState.currentInningScore.runsScored += action.runs;

      if (action.incrementWicket) {
        cloneState.currentInningScore.wicketsFallen += 1;
      }

      if (action.incrementBalls) {
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
