import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SaldoActions } from 'store/ducks/saldo';

import { colors } from 'styles';
import styles from './styles';


class Example extends Component {
  componentDidMount() {
    this.props.saldoActions.getRequest();
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
    const { navigation, saldo } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer} backgrounColor={colors.transparent}>
          <Image style={styles.logo} source={require('assets/img/logo.png')} />
        </View>
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
        <View style={styles.saldo}>
          <Text style={styles.span}>Saldo: </Text>
          {
            !saldo.loading ? (
              <Text style={styles.value}>{saldo.data}</Text>
            )
              : (
                <ActivityIndicator size="small" color={colors.primary} />
              )
          }
          
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  saldo: state.saldo,
});

const mapDispatchToProps = dispatch => ({
  saldoActions: bindActionCreators(SaldoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
