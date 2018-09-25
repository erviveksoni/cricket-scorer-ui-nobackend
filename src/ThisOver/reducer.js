let initialState = {
    currentBowlerId: 1,
    players: [
        {
            name: "Wasim",
            id: 1,
            runs: 0,
            overs: 0,
            madins: 0,
            wickets: 0
        },
        {
            name: "Shoeb",
            id: 2,
            runs: 0,
            overs: 0,
            madins: 0,
            wickets: 0
        }
    ]
}

const thisOverReducer = function (state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default thisOverReducer;