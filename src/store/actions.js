
import actionNames from '../store/actionConstants';

const getNextBallAction =
  function getNextBallAction(lastbowl, currentBowlerId) {
    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
      currentBowlerId,
    };

    return getaction;
  };

export default getNextBallAction;
