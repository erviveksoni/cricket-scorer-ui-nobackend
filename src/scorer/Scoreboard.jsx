import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

class ScoreBoard extends Component {
  renderPreviousTeamScoreDetails() {
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }} sm="12">
          <Row>
            <Col>
              <p>
                {this.props.previousInning.bowlingCard.name} scored
                {this.props.previousInning.runsScored}/
                {this.props.previousInning.wicketsFallen} in
                {this.props.previousInning.oversBowled}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Row>
              <Col md="5" xs="4">
                <b>{this.props.currentInning.battingCard.name}</b>
              </Col>
              <Col sm="1" xs="2" />
              <Col style={{ textAlign: 'right' }}>
                <b>
                  {this.props.currentInning.runsScored}/
                  {this.props.currentInning.wicketsFallen} in
                  {this.props.currentInning.oversBowled}.
                  {this.props.currentInning.validBallsInCurrentOver}/{this.props.totalOvers}
                </b>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        {!(this.props.isFirstInning) ?
          this.renderPreviousTeamScoreDetails() :
          null
        }
      </Container>
    );
  }
}

ScoreBoard.propTypes = {
  isFirstInning: PropTypes.bool.isRequired,
  previousInning: PropTypes.instanceOf(Object).isRequired,
  currentInning: PropTypes.instanceOf(Object).isRequired,
  totalOvers: PropTypes.number.isRequired,
};

export default ScoreBoard;
