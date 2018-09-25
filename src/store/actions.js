const getRecordBatsmanScoreAction = function getRecordBatsmanScoreAction(runs) {
  const getaction = {
    type: 'RECORD_BATSMAN_SCORE',
    runs,
  };

  return getaction;
};

const getTotalScoreUpdateAction =
function getTotalScoreUpdateAction(runs, incrementOver, incrementWicket) {
  const getaction = {
    type: 'UPDATE_CURRENT_INNING_SCORE',
    runs,
    incrementOver,
    incrementWicket,
  };

  return getaction;
};

export { getRecordBatsmanScoreAction, getTotalScoreUpdateAction };
