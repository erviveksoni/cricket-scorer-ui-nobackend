import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';
import actionNames from '../store/actionConstants';

const expectedInitialState = {
  isNewOverStarting: true,
  isCurrentOverMaiden: true,
  bowlingTeamPlayers: [
    {
      name: 'Wasim',
      id: 1,
      runs: 0,
      totalOversBowled: 0,
      currentOverBalls: 0,
      extras: 0,
      maidens: 0,
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
      type: actionNames.NextBallActionName,
      currentBowlerId: 1,
      lastbowl: {
        runs: 1,
        extras: 'NB',
        wicket: false,
      },
    };
    const expectedOutputState = {
      isNewOverStarting: false,
      isCurrentOverMaiden: false,
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 2,
          totalOversBowled: 0,
          currentOverBalls: 0,
          extras: 2,
          maidens: 0,
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
      lastbowl: {
        runs: 1,
        extras: 'LB',
        wicket: false,
        incrementBall: true,
      },
    };
    const expectedOutputState = {
      isNewOverStarting: false,
      isCurrentOverMaiden: false,
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 1,
          totalOversBowled: 0,
          currentOverBalls: 1,
          extras: 1,
          maidens: 0,
          wickets: 0,
        },
      ],
    };
    expect(reducer(expectedInitialState, nextBallAction)).toEqual(expectedOutputState);
  });

  it('After first 5 dot balls bowler-1 should get a maiden over when last ball is also dot', () => {
    const newInitialState = {
      isNewOverStarting: false,
      isCurrentOverMaiden: true,
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 0,
          totalOversBowled: 0,
          currentOverBalls: 5,
          extras: 0,
          maidens: 0,
          wickets: 0,
        },
      ],
    };
    const nextBallAction = {
      type: 'NEXT_BALL',
      currentBowlerId: 1,
      lastbowl: {
        runs: 0,
        extras: null,
        wicket: false,
        incrementBall: true,
      },
    };
    const expectedOutputState = {
      isNewOverStarting: true,
      isCurrentOverMaiden: true,
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 0,
          totalOversBowled: 1,
          currentOverBalls: 0,
          extras: 0,
          maidens: 1,
          wickets: 0,
        },
      ],
    };
    expect(reducer(newInitialState, nextBallAction)).toEqual(expectedOutputState);
  });

  /* Changes After this */
  it('Update current over state if it is no longer maiden', () => {
    const newInitialState = {
      isNewOverStarting: false,
      isCurrentOverMaiden: true,
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 0,
          totalOversBowled: 0,
          currentOverBalls: 5,
          extras: 0,
          maidens: 0,
          wickets: 0,
        },
      ],
    };
    const nextBallAction = {
      type: 'NEXT_BALL',
      currentBowlerId: 1,
      lastbowl: {
        runs: 1,
        extras: null,
        wicket: false,
        incrementBall: true,
      },
    };
    const expectedOutputState = {
      isNewOverStarting: true,
      isCurrentOverMaiden: false,
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 1,
          totalOversBowled: 1,
          currentOverBalls: 0,
          extras: 1,
          maidens: 0,
          wickets: 0,
        },
      ],
    };
    expect(reducer(newInitialState, nextBallAction)).toEqual(expectedOutputState);
  });

  it('Total maiden over count for bowler-1 should update', () => {
    const newInitialState = {
      isNewOverStarting: false,
      isCurrentOverMaiden: true,
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 0,
          totalOversBowled: 1,
          currentOverBalls: 5,
          extras: 0,
          maidens: 1,
          wickets: 0,
        },
      ],
    };
    const nextBallAction = {
      type: 'NEXT_BALL',
      currentBowlerId: 1,
      lastbowl: {
        runs: 0,
        extras: null,
        wicket: false,
        incrementBall: true,
      },
    };
    const expectedOutputState = {
      isNewOverStarting: true,
      isCurrentOverMaiden: true,
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 0,
          totalOversBowled: 2,
          currentOverBalls: 0,
          extras: 0,
          maidens: 2,
          wickets: 0,
        },
      ],
    };
    expect(reducer(newInitialState, nextBallAction)).toEqual(expectedOutputState);
  });
});
