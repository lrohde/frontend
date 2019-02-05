import React, { Component } from 'react';

import { Text} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import styles from './styles';

class ProfileScreen extends Component {
  render() {
    return (
      <Text>Teste</Text>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(ProfileScreen);
