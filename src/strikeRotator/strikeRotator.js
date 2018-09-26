import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StrikeRotator = (props) => {
  const currentBatsmanPair = props.battingTeamPlayers
    .filter(item => item.id === props.strikerBatsmanId ||
      item.id === props.nonstrikerBatsmanId);

  return (
    <div>
      <h6><b>This Ball</b></h6>
      <div>
        <span>{currentBatsmanPair[0].name}</span>&nbsp;&nbsp;
        <span>{currentBatsmanPair[1].name}</span>
      </div>
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
