import actionNames from '../store/actionConstants';
import Constants from '../store/Constants';

const initialState = {
  currentOver: [
    { runs: 1, extra: null, wicket: false },
    { runs: 1, extra: null, wicket: false },
    { runs: 0, extra: null, wicket: true },
    { runs: 6, extra: Constants.EXTRAS.NB, wicket: false },
    { runs: 0, extra: null, wicket: false },
    { runs: 2, extra: Constants.EXTRAS.WD, wicket: false },
    { runs: 1, extra: Constants.EXTRAS.B, wicket: false },
  ],
  currentBowlerId: 1,
};

const thisOverReducer = function thisOverReducer(state = initialState, action) {
  switch (action.type) {
    case actionNames.NextBallActionName: {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default thisOverReducer;
