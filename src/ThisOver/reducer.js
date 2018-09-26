const initialState = {
  currentOver: [
    { byBat: 1, extra: null, wicket: false },
    { byBat: 1, extra: null, wicket: false },
    { byBat: 0, extra: null, wicket: true },
    { byBat: 6, extra: 'NB', wicket: false },
    { byBat: 0, extra: null, wicket: false },
    { byBat: 2, extra: 'B', wicket: false },
    { byBat: 1, extra: 'LB', wicket: false },
  ],
  currentBowlerId: 1,
};

const thisOverReducer = function thisOverReducer(state = initialState) {
  return state;
};

export default thisOverReducer;
