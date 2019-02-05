import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ExampleActions } from 'store/ducks/example';

import styles from './styles';


class SaleScreen extends Component {
  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  componentDidMount() {
    
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._toggleModal}>
        <View style={styles.contentItem}>
          <View style={styles.contentItemHeader}>
            <Text style={styles.itemHeaderTitle}>Alface</Text>
          </View>
          <View style={styles.contentItemBody}>
            <View style={styles.row}>
              <Text style={styles.span}>Data: 04/02/2018</Text>
              <Text style={styles.itemText}>R$ 5,00</Text> 
            </View>
            <View style={styles.row}>
              <Text style={styles.span}>Quantidade: 20</Text>
              <TouchableOpacity style={styles.itemButton} onPress={this._toggleModal}>
                <Text style={styles.itemButtonText}>Vender</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemHeader}>
            <Text style={styles.itemHeaderTitle}>Alface</Text>
          </View>
          <View style={styles.contentItemBody}>
            <View style={styles.row}>
              <Text style={styles.span}>Data: 04/02/2018</Text>
              <Text style={styles.itemText}>R$ 5,00</Text> 
            </View>
            <View style={styles.row}>
              <Text style={styles.span}>Quantidade: 20</Text>
              <TouchableOpacity style={styles.itemButton} onPress={this._toggleModal}>
                <Text style={styles.itemButtonText}>Vender</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemHeader}>
            <Text style={styles.itemHeaderTitle}>Alface</Text>
          </View>
          <View style={styles.contentItemBody}>
            <View style={styles.row}>
              <Text style={styles.span}>Data: 04/02/2018</Text>
              <Text style={styles.itemText}>R$ 5,00</Text> 
            </View>
            <View style={styles.row}>
              <Text style={styles.span}>Quantidade: 20</Text>
              <TouchableOpacity style={styles.itemButton} onPress={this._toggleModal}>
                <Text style={styles.itemButtonText}>Vender</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.containerModal}>
           <Text style={styles.label}>Quantidade à vender</Text> 
            <TextInput style={styles.input} placeholder="Quantidade"/>
            <TouchableOpacity onPress={this._toggleModal} style={styles.submit}>
              <Text style={styles.submitText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  exmaples: state.example,
});

const mapDispatchToProps = dispatch => bindActionCreators(ExampleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SaleScreen);
