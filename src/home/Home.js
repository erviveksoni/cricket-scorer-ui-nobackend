import React from 'react';
import Container from 'reactstrap/lib/Container';
import { connect } from 'react-redux';
import './Home.css';
import ThisOver from '../ThisOver/ThisOver';
import Scorer from '../scorer/scorer';
import CurrentScoreHeading from '../scoreHeader/CurrentScoreHeading';
import { createGameAction } from './actions';

const Home = () =>
  (
    <Container className="h-100 w-75 wrapper">
      <CurrentScoreHeading />
      <ThisOver />
      <Scorer />
    </Container>
  );

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGameAction()),
});

export default connect(undefined, mapDispatchToProps)(Home);
