import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import '../strikeRotator/strikeRotator.css';

const StrikeRotator = (props) => {
  const currentBatsmanPair = props.battingTeamPlayers
    .filter(item => item.id === props.strikerBatsmanId ||
      item.id === props.nonstrikerBatsmanId);

  return (
    <div className="strikewrapper">
      <h6><b>This Ball</b></h6>
      <Row className="strikeOuter w-75">
        <Col md="6" className={currentBatsmanPair[0].id === props.strikerBatsmanId ? 'strikeActive' : 'nonstrike'}>{currentBatsmanPair[0].name}</Col>
        <Col md="6" className={currentBatsmanPair[1].id === props.strikerBatsmanId ? 'strikeActive' : 'nonstrike'}>{currentBatsmanPair[1].name}</Col>
      </Row>
    </div>);
};

StrikeRotator.propTypes = {
  strikerBatsmanId: PropTypes.number.isRequired,
  nonstrikerBatsmanId: PropTypes.number.isRequired,
  battingTeamPlayers: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  strikerBatsmanId: state.batsManScorer.strikerBatsmanId,
  nonstrikerBatsmanId: state.batsManScorer.nonstrikerBatsmanId,
  battingTeamPlayers: state.batsManScorer.battingTeamPlayers,
});

export default connect(mapStateToProps)(StrikeRotator);
