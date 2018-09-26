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
        <h3 className="header text-align-center">CRICKET SCORER</h3>
        <div className="vertical-menu">
          <NavLink className="nav-btn" exact to={Routes.HOME} value="Game Scorer">Game Scorer</NavLink>
          <NavLink className="nav-btn" to={Routes.GAME_STATS} value="Game Stats">Game Stats&nbsp;&nbsp;</NavLink>
        </div>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.GAME_STATS} component={GameStats} />
      </div>
    </HashRouter>
  );

export default AppRouter;
