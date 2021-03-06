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
      activeOutButton: false,
      bownlingTeam: null,
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
      const bowlerObj = this.state.bownlingTeam.filter(i => i.id === rowid)[0];
      const bowler = {
        id: bowlerObj.id,
        name: bowlerObj.name,
      };
      this.setState({ openModal: false, modalTitle: null });
      this.props.addNewBowlerAction(bowler);
    }
  }

  nextball() {
    let lastBowlerId = 0;
    if (this.props.currentBowlerId !== null) {
      lastBowlerId = this.props.currentBowlerId;
    }

    if (this.state.bownlingTeam === null) {
      this.setState({
        bownlingTeam: this.props.teams.filter(team =>
          team.name === this.props.bowlingTeamName)[0].players,
      });
    }

    if (this.props.currentBowlerId === null) {
      this.onOpenModal('Next Bowler Selection', this.state.bownlingTeam.filter(i => i.id !== lastBowlerId));

      return;
    }

    if (this.props.oversBowled < this.props.totalOvers) {
      if (this.state.activeRunButton || this.state.activeExtraButton ||
        this.state.activeOutButton) {
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
          wicket: this.state.activeOutButton,
          incrementBall: incrementball,
          extras: extra,
        };
        this.props.performaction(
          lastbowl,
          this.props.currentBowlerId,
          isOverComplete,
          this.props.teams[0],
        );
        this.setState({ activeRunButton: null, activeExtraButton: null, activeOutButton: false });
        if (isOverComplete) {
          this.onOpenModal('Next Bowler Selection', this.state.bownlingTeam.filter(i => i.id !== lastBowlerId));
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
        <div className="home-component scorer-wrapper">
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
            <Col md="10" sm="10">
              <Row>
                <Col md="3" sm="3">
                  <Button className={this.state.activeExtraButton === 'WD' ? 'extraBtn active' : 'extraBtn'} value="WD" onClick={() => this.setState({ activeExtraButton: 'WD' })}>WD</Button>
                </Col>
                <Col md="3" sm="3">
                  <Button className={this.state.activeExtraButton === 'NB' ? 'extraBtn active' : 'extraBtn'} value="NB" onClick={() => this.setState({ activeExtraButton: 'NB' })}>NB</Button>
                </Col>
                <Col md="3" sm="3">
                  <Button className={this.state.activeExtraButton === 'B' ? 'extraBtn active' : 'extraBtn'} value="B" onClick={() => this.setState({ activeExtraButton: 'B' })}>B</Button>
                </Col>
                <Col md="3" sm="3">
                  <Button className={this.state.activeExtraButton === 'LB' ? 'extraBtn active' : 'extraBtn'} value="LB" onClick={() => this.setState({ activeExtraButton: 'LB' })}>LB</Button>
                </Col>
              </Row>
            </Col>

          </Row>
          <Row className="scorer-rows">
            <Col>
              <div>
                <Button className={this.state.activeOutButton === true ? 'active out-btn' : 'out-btn'} value={this.state.activeOutButton} onClick={() => this.setState({ activeOutButton: !this.state.activeOutButton })}>Out</Button>
              </div>
            </Col>
          </Row>
          <Row className="scorer-rows">
            <Col md="4" sm="4" className="float-right next-ball-col">
              <Button className="next-ball-btn" onClick={this.nextball}>Next Ball</Button>
            </Col>
          </Row>
        </div >
      </div>);
  }
}

Scorer.propTypes = {
  performaction: PropTypes.func.isRequired,
  currentBowlerId: PropTypes.number.isRequired,
  noOfValidBallsInCurrentOver: PropTypes.number.isRequired,
  oversBowled: PropTypes.number.isRequired,
  totalOvers: PropTypes.number.isRequired,
  bowlingTeamPlayers: PropTypes.instanceOf(Object).isRequired,
  addNewBowlerAction: PropTypes.instanceOf(Object).isRequired,
  modalTitle: PropTypes.string.isRequired,
  teams: PropTypes.instanceOf(Object).isRequired,
  bowlingTeamName: PropTypes.string.isRequired,
};

const mapStateAsProps = state => (
  {
    currentBowlerId: state.thisOver.currentBowlerId,
    noOfValidBallsInCurrentOver: state.thisOver.noOfValidBallsInCurrentOver,
    oversBowled: state.totalScorerReducer.currentInningScore.oversBowled,
    totalOvers: state.totalScorerReducer.totalOvers,
    bowlingTeamPlayers: state.bowlerScorer.bowlingTeamPlayers,
    bowlingTeamName: state.totalScorerReducer.bowlingTeam,
    teams: state.playerList.Teams,
  });

const mapDispatcherAsProps = dispatch => ({
  performaction: (lastbowl, currentBowlerId, isOverComplete, batsmenList) => {
    dispatch(getNextBallAction(lastbowl, currentBowlerId, isOverComplete, batsmenList));
  },
  addNewBowlerAction: (bowler) => {
    dispatch(getAddNewBowlerAction(bowler));
  },
});

export default connect(mapStateAsProps, mapDispatcherAsProps)(Scorer);
