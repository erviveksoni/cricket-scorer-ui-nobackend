import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BootstrapTable from 'reactjs-bootstrap-table';

const BattingScoreCard = (props) => {
  const displayHeaders = true;

  function currentPlayers(row) {
    if (row.id === props.strikerBatsmanId || row.id === props.nonstrikerBatsmanId) {
      return (<span className="bst-no-select">{row.name}*</span>);
    }

    return (<span className="bst-no-select">{row.name}</span>);
  }

  function strikeRate(row) {
    let calcStrikeRate = 0;
    if (row.ballsplayed !== 0) {
      calcStrikeRate = ((row.runs / row.ballsplayed) * 100).toFixed(2);
    }
    return (<span className="bst-no-select">{calcStrikeRate}</span>);
  }

  const columns = [
    { name: 'name', display: 'Batsman', renderer: currentPlayers },
    { name: 'runs', display: 'Runs' },
    { name: 'ballsplayed', display: 'Balls' },
    { name: 'fours', display: 'Fours' },
    { name: 'sixes', display: 'Sixes' },
    { name: '', display: 'Strike Rate', renderer: strikeRate },
  ];

  return (
    <div>
      <div>
        <h6><b>Batting Team</b></h6>
      </div>
      <BootstrapTable
        select="single"
        columns={columns}
        data={props.battingTeamPlayers}
        headers={displayHeaders}
        activeClass="active"
      >
        <div className="well">There are no items to show</div>
      </BootstrapTable>
    </div>);
};

BattingScoreCard.propTypes = {
  battingTeamPlayers: PropTypes.instanceOf(Object).isRequired,
  strikerBatsmanId: PropTypes.number.isRequired,
  nonstrikerBatsmanId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  battingTeamPlayers: state.batsManScorer.battingTeamPlayers,
  strikerBatsmanId: state.batsManScorer.strikerBatsmanId,
  nonstrikerBatsmanId: state.batsManScorer.nonstrikerBatsmanId,
});

export default connect(mapStateToProps)(BattingScoreCard);
