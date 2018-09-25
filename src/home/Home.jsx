import React from 'react';
import { connect } from 'react-redux';
import Container from 'reactstrap/lib/Container';
import './Home.css';
import { createGameAction } from './actions';
import ThisOver from '../ThisOver/ThisOver';
import Scorer from '../scorer/scorer';
import CurrentScoreHeading from '../ScoreHeader/CurrentScoreHeading';


const Home = () =>
  (
    <Container className="h-100">
      <CurrentScoreHeading />
      <ThisOver />
      <Scorer />
    </Container>
  );

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGameAction()),
});

export default connect(undefined, mapDispatchToProps)(Home);
