import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { Button } from 'reactstrap';
import getNextBallAction from '../store/actions';
import './scorer.css';


class Scorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRunButton: null,
    };

    this.nextball = this.nextball.bind(this);
  }

  nextball() {
    if (this.state.activeRunButton !== null) {
      let run = this.state.activeRunButton.replace('runbtn-', '');
      run = parseInt(run, 0);
      const incrementball = true;

      const isOverComplete = (incrementball && this.props.noOfValidBallsInCurrentOver === 5);

      const lastbowl = {
        runs: run,
        wicket: false,
        incrementBall: incrementball,
        extras: null,
      };
      this.props.performaction(lastbowl, this.props.currentBowlerId, isOverComplete);
      this.setState({ activeRunButton: null });
    }
  }

  render() {
    return (
      <div className="home-component">
        <Row>
          <Col className="text-center">
            <div>
              <Button className={this.state.activeRunButton === 'runbtn-0' ? 'runbtn active' : 'runbtn'} value="0" onClick={() => this.setState({ activeRunButton: 'runbtn-0' })}>0</Button>
              &nbsp;
              <Button className={this.state.activeRunButton === 'runbtn-1' ? 'runbtn active' : 'runbtn'} value="1" onClick={() => this.setState({ activeRunButton: 'runbtn-1' })}>1</Button>
              &nbsp;
              <Button className={this.state.activeRunButton === 'runbtn-2' ? 'runbtn active' : 'runbtn'} value="2" onClick={() => this.setState({ activeRunButton: 'runbtn-2' })}>2</Button>
              &nbsp;
              <Button className={this.state.activeRunButton === 'runbtn-3' ? 'runbtn active' : 'runbtn'} value="3" onClick={() => this.setState({ activeRunButton: 'runbtn-3' })}>3</Button>
              &nbsp;
              <Button className={this.state.activeRunButton === 'runbtn-4' ? 'runbtn active' : 'runbtn'} value="4" onClick={() => this.setState({ activeRunButton: 'runbtn-4' })}>4</Button>
              &nbsp;
              <Button className={this.state.activeRunButton === 'runbtn-5' ? 'runbtn active' : 'runbtn'} value="5" onClick={() => this.setState({ activeRunButton: 'runbtn-5' })}>5</Button>
              &nbsp;
              <Button className={this.state.activeRunButton === 'runbtn-6' ? 'runbtn active' : 'runbtn'} value="6" onClick={() => this.setState({ activeRunButton: 'runbtn-6' })}>6</Button>
              &nbsp;&nbsp;
              <Button className="submitbtn" onClick={this.nextball}>Next Ball</Button>
            </div>
          </Col>
        </Row>
      </div >);
  }
}

Scorer.propTypes = {
  performaction: PropTypes.func.isRequired,
  currentBowlerId: PropTypes.number.isRequired,
  noOfValidBallsInCurrentOver: PropTypes.number.isRequired,
};

const mapStateAsProps = state => (
  {
    currentBowlerId: state.thisOver.currentBowlerId,
    noOfValidBallsInCurrentOver: state.thisOver.noOfValidBallsInCurrentOver,
  });

const mapDispatcherAsProps = dispatch => ({
  performaction: (lastbowl, currentBowlerId, isOverComplete) => {
    dispatch(getNextBallAction(lastbowl, currentBowlerId, isOverComplete));
  },
});

export default connect(mapStateAsProps, mapDispatcherAsProps)(Scorer);
