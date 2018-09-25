const getRecordBatsmanScoreAction = function getRecordBatsmanScoreAction(runs) {
  const getaction = {
    type: 'RECORD_BATSMAN_SCORE',
    runs,
  };

  return getaction;
};

export default getRecordBatsmanScoreAction;
