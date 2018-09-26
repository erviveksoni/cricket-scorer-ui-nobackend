import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
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

      const lastbowl = {};
      lastbowl.runs = run;
      lastbowl.wicket = false;
      lastbowl.incrementBall = true;
      lastbowl.extras = null;

      this.props.performaction(lastbowl);
    }
  }

  render() {
    return (
      <div className="home-component">
        <Row>
          <Col className="text-center">
            <div>
              <button className={this.state.activeRunButton === 'runbtn-0' ? 'runbtn active' : 'runbtn'} value="0" onClick={() => this.setState({ activeRunButton: 'runbtn-0' })}>0</button>
              &nbsp;
              <button className={this.state.activeRunButton === 'runbtn-1' ? 'runbtn active' : 'runbtn'} value="1" onClick={() => this.setState({ activeRunButton: 'runbtn-1' })}>1</button>
              &nbsp;
              <button className={this.state.activeRunButton === 'runbtn-2' ? 'runbtn active' : 'runbtn'} value="2" onClick={() => this.setState({ activeRunButton: 'runbtn-2' })}>2</button>
              &nbsp;
              <button className={this.state.activeRunButton === 'runbtn-3' ? 'runbtn active' : 'runbtn'} value="3" onClick={() => this.setState({ activeRunButton: 'runbtn-3' })}>3</button>
              &nbsp;
              <button className={this.state.activeRunButton === 'runbtn-4' ? 'runbtn active' : 'runbtn'} value="4" onClick={() => this.setState({ activeRunButton: 'runbtn-4' })}>4</button>
              &nbsp;
              <button className={this.state.activeRunButton === 'runbtn-5' ? 'runbtn active' : 'runbtn'} value="5" onClick={() => this.setState({ activeRunButton: 'runbtn-5' })}>5</button>
              &nbsp;
              <button className={this.state.activeRunButton === 'runbtn-6' ? 'runbtn active' : 'runbtn'} value="6" onClick={() => this.setState({ activeRunButton: 'runbtn-6' })}>6</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <button className="submitbtn" onClick={this.nextball}>Next Ball</button>
            </div>
          </Col>
        </Row>
      </div >);
  }
}

Scorer.propTypes = {
  performaction: PropTypes.func.isRequired,
};

const mapStatetoProps = () => null;

const mapDispatcherAsProps = dispatch => ({
  performaction: (lastbowl) => {
    dispatch(getNextBallAction(lastbowl));
  },
});

export default connect(mapStatetoProps, mapDispatcherAsProps)(Scorer);
