import React, { Fragment, Component } from 'react';
import { Text } from 'react-native';
import {
  SCLAlert,
  SCLAlertButton,
} from 'react-native-scl-alert';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ModalActions } from 'store/ducks/modal';

import styles from './styles';

class CustomAlert extends Component {

  handleOpen = () => {
    this.props.showModal();
  }

  handleClose = () => {
    this.props.closeModal();
  }

  handleError = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { subtitle } = this.props.modal;
    const messages = Object.keys(subtitle).map(key => (
      subtitle[key].map(msg => (
        <Text style={styles.error}>{msg}</Text>
      ))));
    return messages;
  }

  render() {
    const { modal } = this.props;
    return (
      <Fragment>
        <SCLAlert
          theme={modal.theme}
          show={modal.show}
          title={modal.title}
          subtitle={modal.error ? 'Confira as informações abaixo:' : modal.subtitle}
        >
          {
            modal.error ? this.handleError() : null
          }
          <SCLAlertButton containerStyle={styles.button} theme="info" onPress={() => this.handleClose()}>OK</SCLAlertButton>
        </SCLAlert>
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomAlert);
