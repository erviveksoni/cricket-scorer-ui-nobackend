let initialState = {
  "firstInning": {
    "runsScored": 0,
    "battingCard": {
      "players": [
        {
          "name": "Sachin",
          "id": 1,
          "runs": 0,
          "fours": 0,
          "sixes": 0,
          "ballsplayed": 0,
          "isOut": false
        },
        {
          "name": "Rahul",
          "id": 2,
          "runs": 0,
          "fours": 0,
          "sixes": 0,
          "ballsplayed": 0,
          "isOut": false
        }
      ]
    }
  },
  "strikerBatsmanId": 2,
  "nonstrikerBatsmanId": 2
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECORD_BATSMAN_SCORE":
      let cloneState = Object.assign({}, state);

      let currentBatsman = cloneState.firstInning.battingCard.players.filter(item => item.id === cloneState.strikerBatsmanId);
      currentBatsman  = currentBatsman[0]
      if (action.runs == 4) {
        currentBatsman.fours += 1;
      }
      else if (action.runs == 6) {
        currentBatsman.sixes += 1;
      }

      currentBatsman.runs += action.runs;
      cloneState.firstInning.runsScored += action.runs;

      return cloneState;
    default:
      return state;
  }
};

export default reducer;
