import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import thisOverReducer from '../ThisOver/reducer';
import batsManScorerReducer from '../batsmanScorer/reducer';
import bowlerScorerReducer from '../BowlerScorer/reducer';
import totalScoreReducer from '../totalReducer/reducer';
import playerListReducer from '../PlayerList/playerListReducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  totalScorerReducer: totalScoreReducer,
  thisOver: thisOverReducer,
  batsManScorer: batsManScorerReducer,
  bowlerScorer: bowlerScorerReducer,
  playerList: playerListReducer,
});

export default rootReducer;
