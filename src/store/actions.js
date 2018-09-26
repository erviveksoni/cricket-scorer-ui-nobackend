
import actionNames from '../store/actionConstants';

const getNextBallAction =
  function getNextBallAction(lastbowl) {
    const getaction = {
      type: actionNames.NextBallActionName,
      lastbowl,
    };

    return getaction;
  };

export default getNextBallAction;
