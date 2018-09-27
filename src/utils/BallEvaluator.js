const ballEvaluator = {
  getExtraRun: function getExtraRun(extras) {
    switch (extras) {
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
  },
  evalBall: function evalBall(ball) {
    const runs = {
      total: 0,
      extras: 0,
    };
    if (ball.extras) {
      runs.extras = this.getExtraRun(ball.extras);
    }
    if (runs.extras > 0) {
      runs.extras += ball.runs;
      runs.total = runs.extras;
    } else {
      runs.extras = ball.runs;
      runs.total += ball.runs;
    }
    return runs;
  },
};
export default ballEvaluator;
