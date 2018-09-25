const initialState = {
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

const batsManScorerReducer = function batsManScorerReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECORD_BATSMAN_SCORE': {
      const cloneState = Object.assign({}, state);

      let currentBatsman = cloneState.firstInning.battingCard.players
        .filter(item => item.id === cloneState.strikerBatsmanId);

      currentBatsman = currentBatsman.any();

      if (action.runs === 4) {
        currentBatsman.fours += 1;
      } else if (action.runs === 6) {
        currentBatsman.sixes += 1;
      }

      currentBatsman.runs += action.runs;

      return cloneState;
    }
    default:
      return state;
  }
};

export default batsManScorerReducer;
