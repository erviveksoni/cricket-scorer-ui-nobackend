import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import thisOverReducer from '../ThisOver/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  thisOver: thisOverReducer,
});

export default rootReducer;
