import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import './ThisOver.css';

class ThisOver extends Component {
    getBowlerName(bowlerId, playersArr) {
        for (let i = 0; i < playersArr.length; i++) {
            if (bowlerId === playersArr[i].id) {
                return playersArr[i].name;
            }
        }
        // return playersArr.filter((item) => {item.id === bowlerId}).reduce((acc, item) => {acc = item.name});
    }
    render() {
        return (
            <Container className="h-100">
                <Row className="align-items-center h-100">
                    <Col className="text-center">
                        <Row className="align-items-center h-100"><span>This Over</span></Row>
                        <Row className="align-items-center h-100"><span>Bowler:</span><span>{this.getBowlerName(this.props.currentBowlerId, this.props.playersArr)}</span></Row>
                    </Col>
                    <Col className="text-center" />
                </Row>
            </Container>
        );
    }
}
const mapStateAsProps = (state) => {
    currentBowlerId: state.thisOver.currentBowlerId,
        playersArr: state.thisOver.players
};
export default connect(mapStateAsProps)(ThisOver);
