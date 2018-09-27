import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { Button } from 'reactstrap';
import { getNextBallAction, getAddNewBowlerAction } from '../store/actions';
import CommonModal from '../commonModal/commonModal';
import './scorer.css';

class Scorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRunButton: null,
      activeExtraButton: null,
      openModal: false,
      modalTitle: null,
    };

    this.nextball = this.nextball.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal(modalTitle, modalData) {
    this.setState({
      openModal: true,
      modalTitle,
      modalData,
    });
  }

  onCloseModal(rowid) {
    if (rowid > 0) {
      const bowler = {
        id: rowid,
        name: 'Shoib',
      };
      this.setState({ openModal: false, modalTitle: null });
      this.props.addNewBowlerAction(bowler);
    }
  }

  nextball() {
    if (this.props.currentBowlerId === null) {
      this.onOpenModal('Next Bowler Selection', this.props.bowlingTeamPlayers);

      return;
    }

    if (this.props.oversBowled < this.props.totalOvers) {
      if (this.state.activeRunButton || this.state.activeExtraButton) {
        let run = 0;
        if (this.state.activeRunButton !== null) {
          run = this.state.activeRunButton.replace('runbtn-', '');
        }

        run = parseInt(run, 0);
        const extra = this.state.activeExtraButton ? this.state.activeExtraButton : null;

        const incrementball = !(extra === 'WD' || extra === 'NB');
        const isOverComplete = (incrementball && this.props.noOfValidBallsInCurrentOver === 5);

        const lastbowl = {
          runs: run,
          wicket: false,
          incrementBall: incrementball,
          extras: extra,
        };
        this.props.performaction(lastbowl, this.props.currentBowlerId, isOverComplete);
        this.setState({ activeRunButton: null, activeExtraButton: null });

        if (isOverComplete) {
          this.onOpenModal('Next Bowler Selection', this.props.bowlingTeamPlayers);
        }
      }
    } else {
      // alert('Inning over!');
    }
  }

  render() {
    return (
      <div>
        <CommonModal
          modalData={this.state.modalData}
          modalTite={this.state.modalTitle}
          openModal={this.state.openModal}
          onCloseModal={this.onCloseModal}
        />
        <div className="home-component">
          <Row className="scorer-rows">
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
              </div>
            </Col>
          </Row>
          <Row className="scorer-rows">
            <Col md="2" sm="2">
              <span>Extras: &nbsp;</span>
            </Col>
            <Col md="2" sm="2">
              <Button className={this.state.activeExtraButton === 'WD' ? 'extraBtn active' : 'extraBtn'} value="WD" onClick={() => this.setState({ activeExtraButton: 'WD' })}>WD</Button>
            </Col>
            <Col md="2" sm="2">
              <Button className={this.state.activeExtraButton === 'NB' ? 'extraBtn active' : 'extraBtn'} value="NB" onClick={() => this.setState({ activeExtraButton: 'NB' })}>NB</Button>
            </Col>
            <Col md="2" sm="2">
              <Button className={this.state.activeExtraButton === 'B' ? 'extraBtn active' : 'extraBtn'} value="B" onClick={() => this.setState({ activeExtraButton: 'B' })}>B</Button>
            </Col>
            <Col md="2" sm="2">
              <Button className={this.state.activeExtraButton === 'LB' ? 'extraBtn active' : 'extraBtn'} value="LB" onClick={() => this.setState({ activeExtraButton: 'LB' })}>LB</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <Button className="submitbtn" onClick={this.nextball}>Next Ball</Button>
              </div>
            </Col>
          </Row>
        </div >
      </div>);
  }
}

Scorer.propTypes = {
  performaction: PropTypes.func.isRequired,
  noOfValidBallsInCurrentOver: PropTypes.number.isRequired,
  oversBowled: PropTypes.number.isRequired,
  totalOvers: PropTypes.number.isRequired,
  bowlingTeamPlayers: PropTypes.instanceOf(Object).isRequired,
  addNewBowlerAction: PropTypes.instanceOf(Object).isRequired,
  modalTitle: PropTypes.string.isRequired,
};

const mapStateAsProps = state => (
  {
    currentBowlerId: state.thisOver.currentBowlerId,
    noOfValidBallsInCurrentOver: state.thisOver.noOfValidBallsInCurrentOver,
    oversBowled: state.totalScorerReducer.currentInningScore.oversBowled,
    totalOvers: state.totalScorerReducer.totalOvers,
    bowlingTeamPlayers: state.bowlerScorer.bowlingTeamPlayers,
  });

const mapDispatcherAsProps = dispatch => ({
  performaction: (lastbowl, currentBowlerId, isOverComplete) => {
    dispatch(getNextBallAction(lastbowl, currentBowlerId, isOverComplete));
  },
  addNewBowlerAction: (bowler) => {
    dispatch(getAddNewBowlerAction(bowler));
  },
});

export default connect(mapStateAsProps, mapDispatcherAsProps)(Scorer);
