import cloneDeep from 'lodash/cloneDeep';
import actionNames from '../store/actionConstants';
import Constants from '../store/Constants';

const initialState = {
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

const thisOverReducer = function thisOverReducer(state = initialState, action) {
  switch (action.type) {
    case actionNames.NextBallActionName: {
      const newState = cloneDeep(state);
      if (state.noOfValidBallsInCurrentOver === 6) {
        newState.currentOver = [];
        newState.noOfValidBallsInCurrentOver = 1;
      } else if (action.lastbowl.incrementBall) {
        newState.noOfValidBallsInCurrentOver += 1;
      }
      newState.currentOver.push(action.lastbowl);

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default thisOverReducer;
