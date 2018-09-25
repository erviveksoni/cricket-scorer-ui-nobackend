import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import './ThisOver.css';


class ThisOver extends Component {
  render() {
    const getBowlerName = function getBowlerName(bowlerId, players) {
      for (let i = 0; i < players.length; i += 1) {
        if (bowlerId === players[i].id) {
          return players[i].name;
        }
      }
      return '';
    };
    return (
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col className="text-center">
            <Row className="align-items-center h-100"><span>This Over</span></Row>
            <Row className="align-items-center h-100"><span>Bowler:</span><span>{getBowlerName(this.props.currentBowlerId, this.props.playersArr)}</span></Row>
          </Col>
          <Col className="text-center">
            <Row className="align-items-center h-100">{this.props.currentOver}</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateAsProps = state => (
  {
    currentBowlerId: state.thisOver.currentBowlerId,
    playersArr: state.bowlerScorer.bowlingTeamPlayers,
    currentOver: state.thisOver.currentOver,
  });

ThisOver.propTypes = {
  currentBowlerId: PropTypes.number.isRequired,
  playersArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentOver: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default connect(mapStateAsProps)(ThisOver);

