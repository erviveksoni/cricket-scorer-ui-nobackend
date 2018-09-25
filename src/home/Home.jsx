import React from 'react';
import { connect } from 'react-redux';
import Container from 'reactstrap/lib/Container';
import './Home.css';
import { createGameAction } from './actions';
import ThisOver from '../ThisOver/ThisOver';


const Home = () =>
  (
    <Container className="h-100">
      <ThisOver />
    </Container>
  );

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGameAction()),
});

export default connect(undefined, mapDispatchToProps)(Home);
