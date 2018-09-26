import actionNames from '../store/actionConstants';

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
    {
      name: 'Shoeb',
      id: 2,
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
  const getExtraRun = function getExtraRun(extra) {
    switch (extra) {
      case 'B': {
        return 0;
      }
      case 'LB': {
        return 0;
      }
      case 'WD': {
        return 1;
      }
      case 'NB': {
        return 1;
      }
      default: {
        return 0;
      }
    }
  };

  const evalBall = function evalBall(ball) {
    const runs = {
      total: 0,
      extra: 0,
    };
    if (ball.extra) {
      runs.extra = getExtraRun(ball.extra);
    }
    if (runs.extra > 0) {
      runs.extra += ball.runs;
      runs.total = runs.extra;
    } else {
      runs.extra = ball.runs;
      runs.total += ball.runs;
    }
    return runs;
  };
  switch (action.type) {
    case actionNames.NextBallActionName: {
      const newState = Object.assign({}, state);
      newState.bowlingTeamPlayers = state.bowlingTeamPlayers
        .map((item) => {
          const newItem = Object.assign({}, item);
          if (action.currentBowlerId === newItem.id) {
            const runs = evalBall(action.ball);
            newItem.extras += runs.extra;
            newItem.runs += runs.total;
            if (action.ball.incrementBall) {
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
    default: {
      return state;
    }
  }
};

export default bowlerScorerReducer;
