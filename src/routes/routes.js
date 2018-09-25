import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import GameDetails from '../gameDetails/GameDetails';
import Home from '../home/Home';

export const Routes = {
  HOME: '/',
  SCORER: '/scorer',
  GAME_DETAILS: '/gameDetails',
  NEW_GAME: '/newGame',
};

const AppRouter = () =>
  (
    <HashRouter>
      <Switch>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.GAME_DETAILS} component={GameDetails} />
      </Switch>
    </HashRouter>
  );

export default AppRouter;
