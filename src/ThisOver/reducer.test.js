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
    const testInputState = {
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

    const expectedTestOutputState = {
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

    expect(reducer(testInputState, nextBallAction)).toEqual(expectedTestOutputState);
  });

  it('Next ball action should update the This Over after last ball.', () => {
    const testInputState = {
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
          runs: 2, extra: Constants.EXTRAS.WD, wicket: false, incrementBall: false,
        },
        {
          runs: 1, extra: Constants.EXTRAS.B, wicket: false, incrementBall: true,
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

    const expectedTestOutputState = {
      currentOver: [],
      noOfValidBallsInCurrentOver: 0,
      currentBowlerId: null,
    };

    expect(reducer(testInputState, nextBallAction)).toEqual(expectedTestOutputState);
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

  it('Set the Current Bowler Id After the next bowler has choosen.', () => {
    const expectedTest3InputState = {
      currentOver: [
      ],
      noOfValidBallsInCurrentOver: 0,
      currentBowlerId: null,
    };
    const newBowler = {
      id: 2,
      name: 'Shoib',
    };
    const nextBallAction = {
      type: actionConstants.AddNewBowlerActionName,
      newBowler,
    };

    const expectedTest3outputState = {
      currentOver: [
      ],
      noOfValidBallsInCurrentOver: 0,
      currentBowlerId: 2,
    };

    expect(reducer(expectedTest3InputState, nextBallAction)).toEqual(expectedTest3outputState);
  });
});
