import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import thisOverReducer from '../ThisOver/reducer';
import batsManScorerReducer from '../batsmanScorer/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  thisOver: thisOverReducer,
  batsManScorer: batsManScorerReducer,
});

export default rootReducer;
