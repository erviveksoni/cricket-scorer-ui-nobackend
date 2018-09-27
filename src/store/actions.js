
import actionNames from '../store/actionConstants';

const getNextBallAction =
  function getNextBallAction(lastbowl, currentBowlerId, isOverComplete) {
    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
      currentBowlerId,
      isOverComplete,
    };

    return getaction;
  };

const getAddNewBowlerAction =
  function getAddNewBowlerAction(newBowler) {
    const getaction = {
      type: actionNames.AddNewBowlerActionName,
      newBowler,
    };

    return getaction;
  };

export { getNextBallAction, getAddNewBowlerAction };
