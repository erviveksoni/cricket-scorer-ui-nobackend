
const initialState = {
  team1: ['Player1.1',
    'Player1.2',
    'Player1.3',
    'Player1.4',
    'Player1.5',
    'Player1.6',
    'Player1.7',
    'Player1.8',
    'Player1.9',
    'Player1.10',
    'Player1.11'],
  team2: ['Player2.1',
    'Player2.2',
    'Player2.3',
    'Player2.4',
    'Player2.5',
    'Player2.6',
    'Player2.7',
    'Player2.8',
    'Player2.9',
    'Player2.10',
    'Player2.11'],
  numberOfOvers: 5,
};

// let initialState = {
//   "firstInning": {
//     "runsScored": 0,
//     "battingCard": {
//       "players": [
//         {
//           "name": "Sachin",
//           "id": 1,
//           "runs": 0,
//           "fours": 0,
//           "sixes": 0,
//           "ballsplayed": 0,
//           "isOut": false
//         },
//         {
//           "name": "Rahul",
//           "id": 2,
//           "runs": 0,
//           "fours": 0,
//           "sixes": 0,
//           "ballsplayed": 0,
//           "isOut": false
//         }
//       ]
//     }
//   },
//   "strikerBatsmanId": 2,
//   "nonstrikerBatsmanId": 2
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /*
        case "RECORD_BATSMAN_SCORE":
            let cloneState = Object.assign({}, state);

            let currentBatsman = cloneState.firstInning.battingCard.players.filter(item => item.id === cloneState.strikerBatsmanId);
            currentBatsman = currentBatsman[0]
            if (action.runs == 4) {
                currentBatsman.fours += 1;
            }
            else if (action.runs == 6) {
                currentBatsman.sixes += 1;
            }

            currentBatsman.runs += action.runs;
            cloneState.firstInning.runsScored += action.runs;

            return cloneState;
    */
    default:
      return state;
  }
};

export default reducer;
