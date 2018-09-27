
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

export default getNextBallAction;
