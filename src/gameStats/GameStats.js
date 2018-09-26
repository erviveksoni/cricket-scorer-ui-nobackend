import React from 'react';
import Container from 'reactstrap/lib/Container';
import CurrentScoreHeading from '../scoreHeader/CurrentScoreHeading';
import BowlingScoreCard from '../scoreCards/bowlingScoreCard';
import '../home/Home.css';

const GameStats = () => (
  <Container className="page-width">
    <h3 className="text-align-center">GAME STATS</h3>
    <CurrentScoreHeading />
    <BowlingScoreCard />
  </Container>
);

export default GameStats;
