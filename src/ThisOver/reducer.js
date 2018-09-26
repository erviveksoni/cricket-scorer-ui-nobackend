import actionNames from '../store/actionConstants';
import Constants from '../store/Constants';

const initialState = {
  currentOver: [
    { runs: 1, extra: null, wicket: false, incrementBalls: true },
    { runs: 1, extra: null, wicket: false, incrementBalls: true },
    { runs: 0, extra: null, wicket: true, incrementBalls: true },
    { runs: 6, extra: Constants.EXTRAS.NB, wicket: false, incrementBalls: false },
    { runs: 0, extra: null, wicket: false, incrementBalls: true },
    { runs: 2, extra: Constants.EXTRAS.WD, wicket: false, incrementBalls: false },
    { runs: 1, extra: Constants.EXTRAS.B, wicket: false, incrementBalls: true },
  ],
  noOfValidBallsInCurrentOver: 5,
  currentBowlerId: 1,
};

const thisOverReducer = function thisOverReducer(state = initialState, action) {
  switch (action.type) {
    case actionNames.NextBallActionName: {
      const newState = Object.assign({}, state);
      if (state.noOfValidBallsInCurrentOver === 6) {
        newState.currentOver = [];
        newState.noOfValidBallsInCurrentOver = 1;
      }
      newState.currentOver.push(action.ball);
      return newState;
    }
    default: {
      return state;
    }
  }
  
};

export default thisOverReducer;
