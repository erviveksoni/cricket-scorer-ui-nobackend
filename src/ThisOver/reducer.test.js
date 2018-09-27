import cloneDeep from 'lodash/cloneDeep';
import reducer from './reducer';
import Constants from '../store/Constants';
import actionConstants from '../store/actionConstants';


describe('ThisOver/reducer', () => {
  it('defaultState should match ', () => {
    const expectedInitialState = {
      currentOver: [],
      noOfValidBallsInCurrentOver: 0,
      currentBowlerId: 1,
    };
    const expectedOutput = cloneDeep(expectedInitialState);
    expect(reducer(undefined, { type: 'default' })).toEqual(expectedOutput);
  });

  it('Next ball action should update the This Over.', () => {
    const expectedTest1InputState = {
      currentOver: [
        {
          runs: 1, extra: null, wicket: false, incrementBall: true,
        },
        {
          runs: 1, extra: null, wicket: false, incrementBall: true,
        },
        {
          runs: 0, extra: null, wicket: true, incrementBall: true,
        },
        {
          runs: 6, extra: Constants.EXTRAS.NB, wicket: false, incrementBall: false,
        },
        {
          runs: 0, extra: null, wicket: false, incrementBall: true,
        },
      ],
      noOfValidBallsInCurrentOver: 4,
      currentBowlerId: 1,
    };

    const nextBallAction = {
      type: actionConstants.NextBallActionName,
      currentBowlerId: 1,
      lastbowl: {
        runs: 1,
        extra: 'NB',
        wicket: false,
        incrementBall: false,
      },
    };

    const expectedTest1OutputState = {
      currentOver: [
        {
          runs: 1, extra: null, wicket: false, incrementBall: true,
        },
        {
          runs: 1, extra: null, wicket: false, incrementBall: true,
        },
        {
          runs: 0, extra: null, wicket: true, incrementBall: true,
        },
        {
          runs: 6, extra: Constants.EXTRAS.NB, wicket: false, incrementBall: false,
        },
        {
          runs: 0, extra: null, wicket: false, incrementBall: true,
        },
        {
          runs: 1, extra: 'NB', wicket: false, incrementBall: false,
        },
      ],
      noOfValidBallsInCurrentOver: 4,
      currentBowlerId: 1,
    };

    expect(reducer(expectedTest1InputState, nextBallAction)).toEqual(expectedTest1OutputState);
  });

  it('Set the Current Bowler as Null after 6 valid balls.', () => {
    const expectedTest3InputState = {
      currentOver: [
        {
          runs: 1, extra: null, wicket: false, incrementBall: true,
        },
        {
          runs: 1, extra: null, wicket: false, incrementBall: true,
        },
        {
          runs: 0, extra: null, wicket: true, incrementBall: true,
        },
        {
          runs: 6, extra: null, wicket: false, incrementBall: true,
        },
        {
          runs: 0, extra: null, wicket: false, incrementBall: true,
        },
      ],
      noOfValidBallsInCurrentOver: 5,
      currentBowlerId: 1,
    };
    const nextBallAction = {
      type: actionConstants.NextBallActionName,
      currentBowlerId: 1,
      lastbowl: {
        runs: 1,
        extra: null,
        wicket: false,
        incrementBall: true,
      },
    };

    const expectedTest3outputState = {
      currentOver: [
      ],
      noOfValidBallsInCurrentOver: 0,
      currentBowlerId: null,
    };

    expect(reducer(expectedTest3InputState, nextBallAction)).toEqual(expectedTest3outputState);
  });
});
