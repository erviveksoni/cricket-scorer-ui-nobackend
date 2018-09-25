import React from 'react';
import Container from 'reactstrap/lib/Container';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Home.css';
import ThisOver from '../ThisOver/ThisOver';
import Scorer from '../scorer/scorer';
import CurrentScoreHeading from '../scoreHeader/CurrentScoreHeading';
import { createGameAction } from './actions';
import { Routes } from '../routes/routes';

const Home = () =>
  (
    <Container className="h-100">
      <Button tag={Link} to={Routes.GAME_DETAILS} color="secondary" value="Game Details">Game Score Report</Button>
      <CurrentScoreHeading />
      <ThisOver />
      <Scorer />
    </Container>
  );

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGameAction()),
});

export default connect(undefined, mapDispatchToProps)(Home);
