import React from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
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
        <ul className="nav-list">
          <li>
            <Button className="nav-btn" color="secondary" tag={Link} to={Routes.HOME} value="Game Scorer">Game Scorer</Button>
          </li>
          <li>
            <Button className="nav-btn" color="secondary" tag={Link} to={Routes.GAME_STATS} value="Game Stats">Game Stats&nbsp;&nbsp;</Button>
          </li>
        </ul>
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.GAME_STATS} component={GameStats} />
      </div>
    </HashRouter>
  );

export default AppRouter;
