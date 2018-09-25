import React from 'react';
import {Container,Row,Col} from 'reactstrap';


const ScoreBoard = () =>
  <Container>
    <br/>
    <Row>
      <Col md= {{size:6,offset:3}}>
        <Row>
          <Col md="5" xs="4">
            <b>Team 1</b>
          </Col>
          <Col sm="1" xs="2" />
          <Col style ={{textAlign:"right"}}>
            <b>120/5 in 12.1/20</b>
          </Col>
        </Row>
      </Col>
    </Row>
    <br/>
    <Row>
      <Col md= {{size:6,offset:3}} sm="12">
        <Row>
          <Col>
            Team 2 scored
          </Col>
          <Col style ={{textAlign:"right"}}>
            <b>120/5 in 12.1/20</b>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>;

export default ScoreBoard;