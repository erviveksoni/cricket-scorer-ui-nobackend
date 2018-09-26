import React from 'react';
import { Route, HashRouter, NavLink } from 'react-router-dom';
import GameStats from '../gameStats/GameStats';
import Home from '../home/Home';
import './routes.css';

export const Routes = {
  HOME: '/',
  SCORER: '/scorer',
  GAME_STATS: '/gameStats',
  NEW_GAME: '/newGame',
};

const AppRouter = () =>
  (
    <HashRouter>
      <div className="inherit-height w-75 wrapper">
        <ul className="header">
          <li><NavLink exact to={Routes.HOME}>Game Scorer</NavLink></li>
          <li><NavLink to={Routes.GAME_STATS}>Game Stats</NavLink></li>
        </ul>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.GAME_STATS} component={GameStats} />
      </div>
    </HashRouter>
  );

export default AppRouter;
