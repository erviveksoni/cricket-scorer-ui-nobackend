let state = {
    "firstInning": {
        "runsScored": 0,
        "oversBowled": 0,
        "validBallsInCurrentOver": 0,
        "wicketsFallen": 0,
        "battingCard": {
            "name": "Team 1",
            "id": 1,
            "players": [
                {
                    "name": "Sachin",
                    "id": 1,
                    "runs": 0,
                    "fours": 0,
                    "sixes": 0,
                    "ballsplayed": 0,
                    "isOut": false
                },
                {
                    "name": "Rahul",
                    "id": 2,
                    "runs": 0,
                    "fours": 0,
                    "sixes": 0,
                    "ballsplayed": 0,
                    "isOut": false
                }
            ]
        },
        "bowlingCard": {
            "name": "Team 2",
            "id": 2,
            "players": [
                {
                    "name": "Wasim",
                    "id": "1",
                    "runs": 0,
                    "overs": 0,
                    "madins": 0,
                    "wickets": 0
                },
                {
                    "name": "Shoeb",
                    "id": "2",
                    "runs": 0,
                    "overs": 0,
                    "madins": 0,
                    "wickets": 0
                }
            ]
        },
        "secondInning": {}
    },
    "currentOver": [
        "1",
        "w",
        "6-N",
        "d",
        "2-b",
        "1-lb"
    ],
    "strikerBatsmanId": 1,
    "nonstrikerBatsmanId": 1,
    "currentBowlerId": 1,
    "isFirstInning": true,
    "totalOvers": 10
}
export default state;