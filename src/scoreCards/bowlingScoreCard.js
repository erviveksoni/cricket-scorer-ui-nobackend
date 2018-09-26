import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

const BowlingScoreCard = props =>
  (
    <div className="home-component" >
      <br />
      <Row>
        <Col >
          <Row>
            <Col md="5" xs="4">
              <b>Test</b>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col >
          <Row>
            <Col md="5" xs="4" />
            {props.bowlingTeamPlayers}
            <Col sm="1" xs="2" />
            <Col className="text-align-right">
          Test
            </Col>
          </Row>
        </Col>
      </Row>
    </div>);

BowlingScoreCard.propTypes = {
  bowlingTeamPlayers: PropTypes.instanceOf(Object).isRequired,
};


const mapStateToProps = state => ({
  bowlingTeamPlayers: state.bowlerScorerReducer.bowlingTeamPlayers,
});

export default connect(mapStateToProps)(BowlingScoreCard);
