import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import thisOverReducer from '../ThisOver/reducer';
import batsManScorerReducer from '../batsmanScorer/reducer';
import bowlerScorerReducer from '../BowlerScorer/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  thisOver: thisOverReducer,
  batsManScorer: batsManScorerReducer,
  bowlerScorer: bowlerScorerReducer,
});

export default rootReducer;
