
import actionNames from '../store/actionConstants';

const getNextBallAction =
  function getNextBallAction(lastbowl, currentBowlerId, isOverComplete, batsmenList) {
    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
      currentBowlerId,
      isOverComplete,
      batsmenList,
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
