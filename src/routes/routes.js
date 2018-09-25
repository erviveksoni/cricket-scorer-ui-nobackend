import React from 'react';
import { Route, HashRouter, NavLink } from 'react-router-dom';
import GameDetails from '../gameDetails/GameDetails';
import Home from '../home/Home';
import './routes.css';

export const Routes = {
  HOME: '/',
  SCORER: '/scorer',
  GAME_DETAILS: '/gameDetails',
  NEW_GAME: '/newGame',
};

const AppRouter = () =>
  (
    <HashRouter>
      <div className="inherit-height">
        <ul className="header">
          <li><NavLink exact to={Routes.HOME}>Game Scorer</NavLink></li>
          <li><NavLink to={Routes.GAME_DETAILS}>Game Details</NavLink></li>
        </ul>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.GAME_DETAILS} component={GameDetails} />
      </div>
    </HashRouter>
  );

export default AppRouter;
