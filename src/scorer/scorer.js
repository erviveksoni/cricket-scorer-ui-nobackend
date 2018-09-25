import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import PropTypes from 'prop-types';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import getRecordBatsmanScoreAction from '../store/actions';

const Scorer = props => (
  <Container className="h-100">
    <Row>
      <Col className="text-center">
        {/* Buttons for Runs */}
        <ButtonToolbar>
          <ButtonGroup>
            <Button bsStyle="info" name="runButton" value={0} onClick={props.performaction}>0</Button>
            <Button bsStyle="info" name="runButton" value={1} onClick={props.performaction}>1</Button>
            <Button bsStyle="info" name="runButton" value={2} onClick={props.performaction}>2</Button>
            <Button bsStyle="info" name="runButton" value={3} onClick={props.performaction}>3</Button>
            <Button bsStyle="info" name="runButton" value={4} onClick={props.performaction}>4</Button>
            <Button bsStyle="info" name="runButton" value={5} onClick={props.performaction}>5</Button>
            <Button bsStyle="info" name="runButton" value={6} onClick={props.performaction}>6</Button>
          </ButtonGroup>
        </ButtonToolbar>
        {/* Buttons for Next */}
        <ButtonGroup>
          <Button name="runButton" value="submit" onChange={props.performaction}>Next Ball</Button>
        </ButtonGroup>
      </Col>
      <Col className="text-center" />
    </Row>
  </Container>
);

Scorer.propTypes = {
  performaction: PropTypes.number.isRequired,
};

const mapStatetoProps = state => ({
  products: state.products,
  showInStockOnly: state.showInStockOnly,
  productfiltertext: state.productfiltertext,
  currentPage: state.currentPage,
  totalPage: state.totalPage,
});

const mapDispatcherAsProps = dispatch => ({
  performaction: (e) => {
    dispatch(getRecordBatsmanScoreAction(e.target.id));
  },
});

export default connect(mapStatetoProps, mapDispatcherAsProps)(Scorer);
