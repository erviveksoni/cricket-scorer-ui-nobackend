import cloneDeep from 'lodash/cloneDeep';
import actionNames from '../store/actionConstants';

const initialState = {
  currentOver: [],
  noOfValidBallsInCurrentOver: 0,
  currentBowlerId: 1,
};

const thisOverReducer = function thisOverReducer(state = initialState, action) {
  switch (action.type) {
    case actionNames.NextBallActionName: {
      const newState = cloneDeep(state);
      if (state.noOfValidBallsInCurrentOver === 5 && action.lastbowl.incrementBall) {
        newState.currentOver = [];
        newState.noOfValidBallsInCurrentOver = 0;
      } else {
        if (action.lastbowl.incrementBall) {
          newState.noOfValidBallsInCurrentOver += 1;
        }
        newState.currentOver.push(action.lastbowl);
      }
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default thisOverReducer;
