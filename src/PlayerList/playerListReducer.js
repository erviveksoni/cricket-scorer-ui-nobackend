
const Teams = {
  Teams: [
    {
      name: 'Team 1',
      players: [
        {
          name: 'Player 1',
          id: '1',
        },
        {
          name: 'Player 2',
          id: '2',
        },
        {
          name: 'Player 3',
          id: '3',
        },
        {
          name: 'Player 4',
          id: '4',
        },
        {
          name: 'Player 5',
          id: '5',
        },
        {
          name: 'Player 6',
          id: '6',
        },
        {
          name: 'Player 7',
          id: '7',
        },
        {
          name: 'Player 8',
          id: '8',
        },
        {
          name: 'Player 9',
          id: '9',
        },
        {
          name: 'Player 10',
          id: '10',
        },
        {
          name: 'Player 11',
          id: '11',
        },
      ],
    },
    {
      name: 'Team 2',
      players: [
        {
          name: 'Player 21',
          id: '1',
        },
        {
          name: 'Player 22',
          id: '2',
        },
        {
          name: 'Player 23',
          id: '3',
        },
        {
          name: 'Player 24',
          id: '4',
        },
        {
          name: 'Player 25',
          id: '5',
        },
        {
          name: 'Player 26',
          id: '6',
        },
        {
          name: 'Player 27',
          id: '7',
        },
        {
          name: 'Player 28',
          id: '8',
        },
        {
          name: 'Player 29',
          id: '9',
        },
        {
          name: 'Player 30',
          id: '10',
        },
        {
          name: 'Player 31',
          id: '11',
        },
      ],
    },
  ],
};

const playerListReducer = function playerListReducer(state = Teams, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default playerListReducer;
