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
  B: 0
}

const bowlerScorerReducer = function bowlerScorerReducer(state = initialState, action) {
  const evalBall = function (ball) {
    
    let runs = {
      total : 0,
      extra : 0
    }
    if(ball.extra) {
      runs.extra = extras[ball.extra];
    }
    if(runs.extra > 0) {
      runs.extra += ball.byBat;
      runs.total = runs.extra;
    } else {
      runs.total += ball.byBat;
    }
    console.log('evallball'+runs);
    return runs;
  }
  switch (action.type) {
    case 'NEXT_BALL': {
      let newState = Object.assign({}, state);
      const currentBowlerId = action.currentBowlerId;
      newState.bowlingTeamPlayers = state.bowlingTeamPlayers
        .map(item => {
          if (currentBowlerId === item.id) {
            const runs = evalBall(action.ball);
            item.extras += runs.extra;
            item.runs += runs.total;
          }
          return item;
        });
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default bowlerScorerReducer;
