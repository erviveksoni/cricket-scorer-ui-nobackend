import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

    const overData = this.props.currentOver.map((item) => {
      const extraStr = item.extra ? `-${item.extra}` : '';
      return <span>{item.byBat + extraStr},&nbsp;</span>;
    });
    return (
      <div className="home-component">
        <Row>
          <Col>
            <Row ><span>This Over</span></Row>
            <Row >
              <span>Bowler: </span>
              <span>{getBowlerName(this.props.currentBowlerId, this.props.playersArr)}</span>
            </Row>
          </Col>
          <Col >
            <Row >
              {overData}
            </Row>
          </Col>
        </Row>
      </div>
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

