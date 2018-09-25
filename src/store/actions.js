const getRecordBatsmanScoreAction = function (runs) {
    const getaction = {
        type: "RECORD_BATSMAN_SCORE",
        runs: runs
    };

    return getaction;
};

const getIncrementBownAction = function (runs) {
    const getaction = {
        type: "INCREMENT_BOWL_COUNT"
    };

    return getaction;
};

