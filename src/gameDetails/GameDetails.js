import React from 'react';
import { Button } from 'reactstrap';
import Container from 'reactstrap/lib/Container';
import { Link } from 'react-router-dom';
import { Routes } from '../routes/routes';
import CurrentScoreHeading from '../scoreHeader/CurrentScoreHeading';

const GameDetails = () => (
  <Container>
    <Button color="secondary" tag={Link} to={Routes.HOME} value="Scorer">Game Scorer</Button>
    <CurrentScoreHeading />
  </Container>
);

export default GameDetails;
