import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';
import actionNames from '../store/actionConstants';

const constState = {
  strikerBatsmanId: 1,
  nonstrikerBatsmanId: 2,
  battingTeamPlayers: [
    {
      name: 'Player 1',
      id: 1,
      runs: 0,
      fours: 0,
      sixes: 0,
      ballsplayed: 0,
      isOut: false,
    },
    {
      name: 'Player 2',
      id: 2,
      runs: 0,
      fours: 0,
      sixes: 0,
      ballsplayed: 0,
      isOut: false,
    },
  ],
};

describe('batsmanScorer/reducer', () => {
  it('returnDefaultStateTest', () => {
    const initialState = cloneDeep(constState);

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('runs', () => {
    it('shouldNotIncrementBatsmanScoreOnValidDelivery_0', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 0;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shouldIncrementBatsmanScoreOnValidDelivery_1', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 1;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      initialState.battingTeamPlayers[0].runs += 1;
      initialState.strikerBatsmanId = 2;
      initialState.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shouldIncrementBatsmanScoreOnValidDelivery_2', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 2;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      initialState.battingTeamPlayers[0].runs += 2;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shouldIncrementBatsmanScoreOnValidDelivery_3', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 3;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      initialState.battingTeamPlayers[0].runs += 3;
      initialState.strikerBatsmanId = 2;
      initialState.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shouldIncrementBatsmanScoreOnValidDelivery_4', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 4;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      initialState.battingTeamPlayers[0].fours += 1;
      initialState.battingTeamPlayers[0].runs += 4;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shouldIncrementBatsmanScoreOnValidDelivery_5', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 5;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      initialState.battingTeamPlayers[0].runs += 5;
      initialState.strikerBatsmanId = 2;
      initialState.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shouldIncrementBatsmanScoreOnValidDelivery_6', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 6;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      initialState.battingTeamPlayers[0].sixes += 1;
      initialState.battingTeamPlayers[0].runs += 6;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });
  });

  describe('SwitchPlayersOnStrike', () => {
    it('shoundSwitchPlayersIfOneRunAndOverNotComplete', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 1;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.incrementBall = true;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: false,
      };

      initialState.battingTeamPlayers[0].ballsplayed += 1;
      initialState.battingTeamPlayers[0].runs += 1;
      initialState.strikerBatsmanId = 2;
      initialState.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shoundNotSwitchPlayersIfTwoRunAndOverNotComplete', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 2;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.incrementBall = true;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: false,
      };

      initialState.battingTeamPlayers[0].ballsplayed += 1;
      initialState.battingTeamPlayers[0].runs += 2;
      initialState.strikerBatsmanId = 1;
      initialState.nonstrikerBatsmanId = 2;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shoundNotSwitchPlayersIfFourRunAndOverNotComplete', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 4;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.incrementBall = true;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: false,
      };

      initialState.battingTeamPlayers[0].ballsplayed += 1;
      initialState.battingTeamPlayers[0].runs += 4;
      initialState.battingTeamPlayers[0].fours += 1;
      initialState.strikerBatsmanId = 1;
      initialState.nonstrikerBatsmanId = 2;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });
  });

  describe('SwitchPlayersOnStrikeOnNewOver', () => {
    it('shoundSwitchPlayersIfOneRunAndOverComplete', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 1;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.incrementBall = true;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      initialState.battingTeamPlayers[0].ballsplayed += 1;
      initialState.battingTeamPlayers[0].runs += 1;
      initialState.strikerBatsmanId = 1;
      initialState.nonstrikerBatsmanId = 2;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shoundSwitchPlayersIfTwoRunsAndOverComplete', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 2;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.incrementBall = true;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      initialState.battingTeamPlayers[0].ballsplayed += 1;
      initialState.battingTeamPlayers[0].runs += 2;
      initialState.strikerBatsmanId = 2;
      initialState.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });

    it('shoundSwitchPlayersIfFourRunAndOverComplete', () => {
      const initialState = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 4;
      lastbowl.wicket = false;
      lastbowl.extras = null;
      lastbowl.incrementBall = true;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      initialState.battingTeamPlayers[0].ballsplayed += 1;
      initialState.battingTeamPlayers[0].runs += 4;
      initialState.battingTeamPlayers[0].fours += 1;
      initialState.strikerBatsmanId = 2;
      initialState.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(initialState);
    });
  });

  describe('testSwitchPlayersWithExtrasAndOddRunsInSameOver', () => {
    it('shound Not Increment batsman score and switch players if extra as wide with odd run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 1;
      lastbowl.wicket = false;
      lastbowl.extras = 'WD';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      expectedOutput.strikerBatsmanId = 2;
      expectedOutput.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and switch players if extra as Bye with odd run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 3;
      lastbowl.wicket = false;
      lastbowl.extras = 'B';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      expectedOutput.strikerBatsmanId = 2;
      expectedOutput.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and switch players if extra as LegBye with odd run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 5;
      lastbowl.wicket = false;
      lastbowl.extras = 'LB';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      expectedOutput.strikerBatsmanId = 2;
      expectedOutput.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and switch players if extra as NB with odd run same over', () => {
      const expectedOutput = cloneDeep(constState);
      const lastbowl = {};
      lastbowl.runs = 1;
      lastbowl.wicket = false;
      lastbowl.extras = 'NB';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      expectedOutput.strikerBatsmanId = 2;
      expectedOutput.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });
  });

  describe('testSwitchPlayersWithExtrasAndEvenRunsInSameOver', () => {
    it('shound Not Increment batsman score and switch players if extra as wide with even run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 2;
      lastbowl.wicket = false;
      lastbowl.extras = 'WD';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and switch players if extra as Bye with even run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 4;
      lastbowl.wicket = false;
      lastbowl.extras = 'B';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and switch players if extra as LegBye with even run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 6;
      lastbowl.wicket = false;
      lastbowl.extras = 'LB';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and switch players if extra as NB with even run same over', () => {
      const expectedOutput = cloneDeep(constState);
      const lastbowl = {};
      lastbowl.runs = 0;
      lastbowl.wicket = false;
      lastbowl.extras = 'NB';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
      };

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });
  });

  describe('testSwitchPlayersWithExtrasAndOddRunsInNextOver', () => {
    it('shound Not Increment batsman score and not switch players if extra as wide with odd run in next over', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 1;
      lastbowl.wicket = false;
      lastbowl.extras = 'WD';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and not switch players if extra as Bye with odd run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 3;
      lastbowl.wicket = false;
      lastbowl.extras = 'B';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and not switch players if extra as LegBye with odd run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 5;
      lastbowl.wicket = false;
      lastbowl.extras = 'LB';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and not switch players if extra as NB with odd run same over', () => {
      const expectedOutput = cloneDeep(constState);
      const lastbowl = {};
      lastbowl.runs = 1;
      lastbowl.wicket = false;
      lastbowl.extras = 'NB';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });
  });

  describe('testSwitchPlayersWithExtrasAndEvenRunsInNextOver', () => {
    it('shound Not Increment batsman score and switch players if extra as wide with even run in next over', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 0;
      lastbowl.wicket = false;
      lastbowl.extras = 'WD';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      expectedOutput.strikerBatsmanId = 2;
      expectedOutput.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and switch players if extra as Bye with even run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 2;
      lastbowl.wicket = false;
      lastbowl.extras = 'B';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      expectedOutput.strikerBatsmanId = 2;
      expectedOutput.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and switch players if extra as LegBye with even run', () => {
      const expectedOutput = cloneDeep(constState);

      const lastbowl = {};
      lastbowl.runs = 4;
      lastbowl.wicket = false;
      lastbowl.extras = 'LB';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      expectedOutput.strikerBatsmanId = 2;
      expectedOutput.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });

    it('shound Not Increment batsman score and switch players if extra as NB with even run same over', () => {
      const expectedOutput = cloneDeep(constState);
      const lastbowl = {};
      lastbowl.runs = 6;
      lastbowl.wicket = false;
      lastbowl.extras = 'NB';
      lastbowl.incrementBall = false;
      lastbowl.isOut = false;

      const getaction = {
        type: actionNames.NextBallActionName,
        lastbowl,
        isOverComplete: true,
      };

      expectedOutput.strikerBatsmanId = 2;
      expectedOutput.nonstrikerBatsmanId = 1;

      expect(reducer(constState, getaction)).toEqual(expectedOutput);
    });
  });

  describe('testOutWhenNoRunsInSameOverWithNoExtras', () => {
    // it('ExpectUpdateisOutForBatsmanGettingOut', () => {
    //   const expectedOutput = cloneDeep(constState);
    //   const lastbowl = {};
    //   lastbowl.runs = 6;
    //   lastbowl.wicket = false;
    //   lastbowl.extras = 'NB';
    //   lastbowl.incrementBall = false;
    //   lastbowl.isOut = true;

    //   const getaction = {
    //     type: actionNames.NextBallActionName,
    //     lastbowl,
    //     isOverComplete: true,
    //   };

    //   expectedOutput.battingTeamPlayers[0].isOut = true;
    //   expectedOutput.battingTeamPlayers[0].ballsplayed += 1;
    //   expectedOutput.strikerBatsmanId = 3;
    //   expectedOutput.nonstrikerBatsmanId = 2;

    //   expect(reducer(constState, getaction)).toEqual(expectedOutput);
    // });
  });
});
