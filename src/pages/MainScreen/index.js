import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ExampleActions } from 'store/ducks/example';

import styles from './styles';


class Example extends Component {
  componentDidMount() {
    
  }

  static navigationOptions = {
    header: {
      title: 'TITLE',
      titleStyle: {
        color: 'black',
        textAlign:'center',
        alignSelf: 'center',
        fontWeight: '500',
      },
    },
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('PlantingScreen')}}>
            <Text style={styles.buttonText}>PLANTIO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('HandlingScreen')}}>
            <Text style={styles.buttonText}>MANEJO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('SaleScreen')}}>
            <Text style={styles.buttonText}>VENDA</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  exmaples: state.example,
});

const mapDispatchToProps = dispatch => bindActionCreators(ExampleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Example);
