import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

const CurrentScoreHandling = props =>
  (
    <div className="home-component" >
      <br />
      <Row>
        <Col >
          <Row>
            <Col md="4" xs="4">
              <b>{props.battingTeam}</b>
            </Col>
            <Col sm="3" xs="4" />
            <Col className="text-align-right" md="4" xs="3">
              <p>
                <b>
                  {props.currentInningScore.runsScored}/
                  {props.currentInningScore.wicketsFallen} in&nbsp;
                  {props.currentInningScore.oversBowled}.
                  {props.currentBowlsBowled}/{props.totalOvers}
                </b>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col >
          <Row>
            <Col md="4" xs="4">
              {props.bowlingTeam}
            </Col>

            <Col sm="3" xs="4" />
            <Col className="text-align-right" md="4" xs="3">
              <p>
                {props.previousInningScore.runsScored}/
                {props.previousInningScore.wicketsFallen} in&nbsp;
                {props.previousInningScore.oversBowled}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );

CurrentScoreHandling.propTypes = {
  previousInningScore: PropTypes.instanceOf(Object).isRequired,
  currentInningScore: PropTypes.instanceOf(Object).isRequired,
  currentBowlsBowled: PropTypes.number.isRequired,
  totalOvers: PropTypes.number.isRequired,
  battingTeam: PropTypes.string.isRequired,
  bowlingTeam: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  previousInningScore: state.totalScorerReducer.previousInningScore,
  currentInningScore: state.totalScorerReducer.currentInningScore,
  currentBowlsBowled: state.totalScorerReducer.currentBowlsBowled,
  totalOvers: state.totalScorerReducer.totalOvers,
  battingTeam: state.totalScorerReducer.battingTeam,
  bowlingTeam: state.totalScorerReducer.bowlingTeam,
});

export default connect(mapStateToProps)(CurrentScoreHandling);
