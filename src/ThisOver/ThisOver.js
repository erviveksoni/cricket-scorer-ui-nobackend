import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import './ThisOver.css';

class ThisOver extends Component {
  render() {
    const getBowlerName = function getBowlerName(bowlerId, playersArr) {
      for (let i = 0; i < playersArr.length; i += 1) {
        if (bowlerId === playersArr[i].id) {
          return playersArr[i].name;
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
          <Col className="text-center" />
        </Row>
      </Container>
    );
  }
}
const mapStateAsProps = state => ({
  currentBowlerId: state.thisOver.currentBowlerId,
  playersArr: state.thisOver.players,
});

export default connect(mapStateAsProps)(ThisOver);

