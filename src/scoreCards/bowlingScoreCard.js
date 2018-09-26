import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BootstrapTable from 'reactjs-bootstrap-table';

const BowlingScoreCard = (props) => {
  const displayHeaders = true;

  function mRenderer(row) {
    if (row.id === props.currentBowlerId) {
      return (<span className="bst-no-select">{row.name}*</span>);
    }

    return (<span className="bst-no-select">{row.name}</span>);
  }

  const columns = [
    { name: 'name', display: 'Bowler', renderer: mRenderer },
    { name: 'totalOversBowled', display: 'Overs' },
    { name: 'madins', display: 'Maiden' },
    { name: 'runs', display: 'Run' },
    { name: 'wickets', display: 'Wickets' },
  ];

  return (
    <div>
      <div>
        <h6><b>Bowling Team</b></h6>
      </div>
      <BootstrapTable
        select="single"
        columns={columns}
        data={props.bowlingTeamPlayers}
        headers={displayHeaders}
        activeClass="active"
      >
        <div className="well">There are no items to show</div>
      </BootstrapTable>
    </div>);
};

BowlingScoreCard.propTypes = {
  bowlingTeamPlayers: PropTypes.instanceOf(Object).isRequired,
  currentBowlerId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  bowlingTeamPlayers: state.bowlerScorer.bowlingTeamPlayers,
  currentBowlerId: state.thisOver.currentBowlerId,
});

export default connect(mapStateToProps)(BowlingScoreCard);
