const getRecordBatsmanScoreAction = function getRecordBatsmanScoreAction(runs) {
  const getaction = {
    type: 'RECORD_BATSMAN_SCORE',
    runs,
  };

  return getaction;
};

const getTotalScoreUpdateAction =
function getTotalScoreUpdateAction(runs, incrementBalls, incrementWicket) {
  const getaction = {
    type: 'UPDATE_CURRENT_INNING_SCORE',
    runs,
    incrementBalls,
    incrementWicket,
  };

  return getaction;
};

export { getRecordBatsmanScoreAction, getTotalScoreUpdateAction };
