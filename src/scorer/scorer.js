import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import getRecordBatsmanScoreAction from '../store/actions';


const Scorer = props => (
  <Container className="h-100">
    <Row>
      <Col className="text-center">
        <input type="button" value="0" onClick={props.performaction} />
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
