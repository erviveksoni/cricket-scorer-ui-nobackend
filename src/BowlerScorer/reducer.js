const initialState = {
  bowlingTeamPlayers: [
    {
      name: 'Wasim',
      id: 1,
      runs: 0,
      overs: 0,
      madins: 0,
      wickets: 0,
    },
    {
      name: 'Shoeb',
      id: 2,
      runs: 0,
      overs: 0,
      madins: 0,
      wickets: 0,
    },
  ],
};

const bowlerScorerReducer = function bowlerScorerReducer(state = initialState) {
  return state;
};

export default bowlerScorerReducer;
