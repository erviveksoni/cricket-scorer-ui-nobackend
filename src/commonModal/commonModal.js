import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import BootstrapTable from 'reactjs-bootstrap-table';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '200px',
};

class CommonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: {},
      id: 0,
    };

    this.onCloseModal = this.onCloseModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDeselect = this.onDeselect.bind(this);
  }

  onChange(newSelection) {
    this.setState({ selection: newSelection });
  }

  onDeselect() {
    this.setState({ selection: null });
  }

  onCloseModal() {
    if (this.state.selection !== null) {
      const rowobject = this.state.selection;
      const idstring = Object.keys(rowobject)[0];
      const rowid = parseInt(idstring, 0);
      this.setState({ selection: this.state.selection[rowid].id });
      this.onDeselect();
    }

    this.props.onCloseModal(this.state.id);
  }

  render() {
    const columns = [
      { name: 'name', display: 'Name' },
    ];
    const displayHeaders = true;

    return (
      <div style={styles}>
        <h2>{this.props.modalTite}</h2>
        <Modal open={this.props.openModal} onClose={this.onCloseModal} center>
          <h2>{this.props.modalTite}</h2>
          <BootstrapTable
            selected={this.state.selection}
            select="single"
            columns={columns}
            data={this.props.modalData}
            headers={displayHeaders}
            onChange={this.onChange}
          >
            <div style={{ margin: '3em', border: '1px solid gray', padding: '1em' }} className="well well-success">
              <p>No data to display</p>
            </div>
          </BootstrapTable>
          <button onClick={this.onCloseModal}>OK</button>
          <button onClick={this.onDeselect}>Deselect</button>
        </Modal>
      </div>
    );
  }
}

CommonModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  modalTite: PropTypes.string.isRequired,
  modalData: PropTypes.instanceOf(Object).isRequired,
};

export default CommonModal;
