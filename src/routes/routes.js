import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Scorer from '../scorer/Scorer';
import GameDetails from '../gameDetails/GameDetails';
import Home from '../home/Home';
import history from './history';

import NewGame from '../newGame/NewGame';

export const Routes = {
  HOME: '/',
  SCORER: '/scorer',
  GAME_DETAILS: '/gameDetails',
  NEW_GAME: '/newGame',
};

const AppRouter = () =>
  (
    <Router history={history}>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route exact path={Routes.NEW_GAME} component={NewGame} />
        <Route exact path={Routes.SCORER} component={Scorer} />
        <Route path={Routes.GAME_DETAILS} component={GameDetails} />
      </Switch>
    </Router>
  );

export default AppRouter;
