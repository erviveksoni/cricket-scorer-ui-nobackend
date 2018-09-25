import reducer from './reducer';
import cloneDeep from 'lodash/cloneDeep';

const constState = {
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
  "strikerBatsmanId": 1,
  "nonstrikerBatsmanId": 2
}

describe('gameInformation/reducer', () => {
  it('should return initial state of 11 players in each team', () => {
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
    //expect(reducer(undefined, {})).toEqual(initialState);
  });
});


describe('gameInformation/reducer', () => {
  it('shouldIncrementBatsmanScoreOnValidDelivery_4', () => {

    const initialState = cloneDeep(constState);

    let inputState = {
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
      "strikerBatsmanId": 1,
      "nonstrikerBatsmanId": 2
    }

    const getaction = {
      type: "RECORD_BATSMAN_SCORE",
      runs: 4
    };

    initialState.firstInning.runsScored = 4;
    initialState.firstInning.battingCard.players[0].fours = 1;
    initialState.firstInning.battingCard.players[0].runs = 4;

    expect(reducer(inputState, getaction)).toEqual(initialState);
  });
});

describe('gameInformation/reducer', () => {
  it('shouldIncrementBatsmanScoreOnValidDelivery_6', () => {

    const initialState = cloneDeep(constState);

    let inputState = {
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
      "strikerBatsmanId": 1,
      "nonstrikerBatsmanId": 2
    }

    const getaction = {
      type: "RECORD_BATSMAN_SCORE",
      runs: 6
    };

    initialState.firstInning.runsScored = 6;
    initialState.firstInning.battingCard.players[0].sixes = 1;
    initialState.firstInning.battingCard.players[0].runs = 6;

    expect(reducer(inputState, getaction)).toEqual(initialState);
  });
});