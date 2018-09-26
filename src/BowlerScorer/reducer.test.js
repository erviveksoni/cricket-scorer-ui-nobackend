import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';

const expectedInitialState = {
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


describe('BowlerScorer/reducer', () => {
  it('defaultState should match ', () => {
    const expectedOutput = cloneDeep(expectedInitialState);
    expect(reducer(undefined, { type: 'default' })).toEqual(expectedOutput);
  });

  it('1-NB should add 2 to extras and 2 to runs of bowler-1 ', () => {
    const nextBallAction = {
      type: 'NEXT_BALL',
      currentBowlerId: 1,
      ball: {
        runs: 1,
        extra: 'NB',
        wicket: false
      },
    };
    const expectedOutputState = {
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 2,
          overs: {
            overs: 0,
            balls: 0,
          },
          extras: 2,
          madins: 0,
          wickets: 0,
        },
        {
          name: 'Shoeb',
          id: 2,
          runs: 0,
          extras: 0,
          overs: {
            overs: 0,
            balls: 0,
          },
          madins: 0,
          wickets: 0,
        },
      ],
    };
    expect(reducer(expectedInitialState, nextBallAction)).toEqual(expectedOutputState);
  });
  it('1-LB should add 1 to extras and 1 to runs and increase the ball of bowler-1 ', () => {
    const nextBallAction = {
      type: 'NEXT_BALL',
      currentBowlerId: 1,
      ball: {
        byBat: 1,
        extra: 'LB',
        wicket: false
      }
    };
    const expectedOutputState = {
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 3,
          overs: {
            overs: 0,
            balls: 0,
          },
          extras: 3,
          madins: 0,
          wickets: 0,
        },
        {
          name: 'Shoeb',
          id: 2,
          runs: 0,
          extras: 0,
          overs: {
            overs: 0,
            balls: 0,
          },
          madins: 0,
          wickets: 0,
        },
      ],
    };
    expect(reducer(expectedInitialState, nextBallAction)).toEqual(expectedOutputState);
  });
});
