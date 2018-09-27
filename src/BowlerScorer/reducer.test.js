import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';
import actionNames from '../store/actionConstants';

const expectedInitialState = {
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
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 2,
          totalOversBowled: 0,
          currentOverBalls: 0,
          extras: 2,
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
      lastbowl: {
        runs: 1,
        extras: 'LB',
        wicket: false,
        incrementBall: true,
      },
    };
    const expectedOutputState = {
      bowlingTeamPlayers: [
        {
          name: 'Wasim',
          id: 1,
          runs: 1,
          totalOversBowled: 0,
          currentOverBalls: 1,
          extras: 1,
          madins: 0,
          wickets: 0,
        },
      ],
    };
    expect(reducer(expectedInitialState, nextBallAction)).toEqual(expectedOutputState);
  });

  it('Should add bowler who is not present in Bowlers list', () => {
    const nextBallAction = {
      type: actionNames.AddNewBowlerActionName,
      newBowler: {
        id: 2,
        name: 'Shoib',
      },
    };

    const expectedOutputState = {
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
          name: 'Shoib',
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
    expect(reducer(expectedInitialState, nextBallAction)).toEqual(expectedOutputState);
  });

  it('Should not add bowler who is already present in Bowlers list', () => {
    const nextBallAction = {
      type: actionNames.AddNewBowlerActionName,
      newBowler: {
        id: 1,
        name: 'Wasim',
      },
    };

    const expectedOutputState = {
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
      ],
    };
    expect(reducer(expectedInitialState, nextBallAction)).toEqual(expectedOutputState);
  });
});
