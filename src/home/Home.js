import React from 'react';
import Container from 'reactstrap/lib/Container';
import { connect } from 'react-redux';
import './Home.css';
import ThisOver from '../ThisOver/ThisOver';
import Scorer from '../scorer/scorer';
import CurrentScoreHeading from '../scoreHeader/CurrentScoreHeading';
import StrikeRotator from '../strikeRotator/strikeRotator';
import { createGameAction } from './actions';

const Home = () =>
  (
    <Container className="page-width">
      <h3 className="text-align-center">GAME SCORER</h3>
      <CurrentScoreHeading />
      <ThisOver />
      <StrikeRotator />
      <Scorer />
    </Container>
  );

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGameAction()),
});

export default connect(undefined, mapDispatchToProps)(Home);
