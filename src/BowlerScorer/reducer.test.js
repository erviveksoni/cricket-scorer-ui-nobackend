import reducer from './reducer';

const expectedInitialState = {
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


describe('BowlerScorer/reducer', () => {
  it('defaultState should match ', () => {
    expect(reducer(expectedInitialState, undefined)).toEqual(expectedInitialState);
  });
});
