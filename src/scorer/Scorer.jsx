import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScoreBoard from './Scoreboard';

class Scorer extends Component {
  renderBasedOnCurrentInning() {
    if (this.props.isFirstInning) {
      return (
        <ScoreBoard
          currentInning={this.props.firstInning}
          previousInning={undefined}
          totalOvers={this.props.totalOvers}
          isFirstInning={this.props.isFirstInning}
        />);
    }
    return (
      <ScoreBoard
        currentInning={this.props.secondInning}
        previousInning={this.props.firstInning}
        totalOvers={this.props.totalOvers}
        isFirstInning={this.props.isFirstInning}
      />);
  }

  render() {
    return (
      <div>
        {this.renderBasedOnCurrentInning()}
      </div>);
  }
}

Scorer.propTypes = {
  isFirstInning: PropTypes.bool.isRequired,
  firstInning: PropTypes.instanceOf(Object).isRequired,
  secondInning: PropTypes.instanceOf(Object).isRequired,
  totalOvers: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  isFirstInning: state.gameInformation.isFirstInning,
  firstInning: state.gameInformation.firstInning,
  secondInning: state.gameInformation.secondInning,
  totalOvers: state.gameInformation.totalOvers,
});


const connectedScorerComponent = connect(mapStateToProps)(Scorer);

export default connectedScorerComponent;
