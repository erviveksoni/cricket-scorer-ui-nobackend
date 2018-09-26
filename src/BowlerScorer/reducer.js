const initialState = {
  bowlingTeamPlayers: [
    {
      name: 'Wasim',
      id: 1,
      runs: 0,
      overs: {
        overs: 0,
        balls: 0,
      },
      extras: 0,
      madins: 0,
      wickets: 0,
    },
    {
      name: 'Shoeb',
      id: 2,
      runs: 0,
      overs: {
        overs: 0,
        balls: 0,
      },
      extras: 0,
      madins: 0,
      wickets: 0,
    },
  ],
};
const extras = {
  NB: 1,
  WD: 1,
  LB: 0,
  B: 0,
};

const bowlerScorerReducer = function bowlerScorerReducer(state = initialState, action) {
  const evalBall = function evalBall(ball) {
    const runs = {
      total: 0,
      extra: 0,
    };
    if (ball.extra) {
      runs.extra = extras[ball.extra];
    }
    if (runs.extra > 0) {
      runs.extra += ball.runs;
      runs.total = runs.extra;
    } else {
      runs.total += ball.runs;
    }
    return runs;
  };
  switch (action.type) {
    case 'NEXT_BALL': {
      const newState = Object.assign({}, state);
      newState.bowlingTeamPlayers = state.bowlingTeamPlayers
        .map((item) => {
          const newItem = Object.assign({}, item);
          if (action.currentBowlerId === newItem.id) {
            const runs = evalBall(action.ball);
            newItem.extras += runs.extra;
            newItem.runs += runs.total;
          }
          return newItem;
        });
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default bowlerScorerReducer;
