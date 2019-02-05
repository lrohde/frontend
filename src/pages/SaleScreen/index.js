import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import Modal from "react-native-modal";
import { Picker, Icon } from 'native-base';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as VendaActions } from 'store/ducks/venda';
import { Creators as PlantioActions } from 'store/ducks/plantio';

import styles from './styles';
import { colors } from 'styles';


class SaleScreen extends Component {
  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  componentDidMount() {
    this.props.vendaActions.getRequest();
    this.props.plantioActions.getRequest();
  }

  openModal = (vend) => {
    this.props.setFieldValue('demanda_id', vend.id)
    this._toggleModal()
  }

  setValues = (value) => {
    this.props.setFieldValue('plantio_id', value)
   
  }
 
  render() {
    const { setFieldValue, values, plantio, venda, handleSubmit } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => {}}>
        {
         venda.data && !venda.loading ? venda.data.map( vend => {

          return (
            
              <View style={styles.contentItem}>
              <View style={styles.contentItemHeader}>
                <Text style={styles.itemHeaderTitle}>Alface</Text>
              </View>
              <View style={styles.contentItemBody}>
                <View style={styles.row}>
                  <Text style={styles.span}>Data: {moment(vend.data).format('DD/MM/YYYY')}</Text>
                  <Text style={styles.itemText}>R$ {vend.valor}</Text> 
                </View>
                <View style={styles.row}>
                  <Text style={styles.span}>Quantidade: {vend.quantidade}</Text>
                  <TouchableOpacity style={styles.itemButton} onPress={() => this.openModal(vend)}>
                    <Text style={styles.itemButtonText}>Vender</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
             
          )
         })
         : (
           <ActivityIndicator size="large" color={colors.primary} />
         )
       }
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.containerModal}>
           <Text style={styles.label}>Quantidade à vender</Text> 
           <Picker
                mode="dropdown"
                iosIcon={<Icon color="#f5f5f5" name="ios-arrow-down" />}
                style={{ width: 300, backgroundColor: '#EEE', marginBottom: 10 }}
                placeholder="Selecione"
                placeholderStyle={{ color: "#fff" }}
                placeholderIconColor="#007aff"
                selectedValue={values.plantio_id}
                onValueChange={value => this.setValues(value)}
              >
              {
                plantio.data ? plantio.data.map(plant => {
                  return (
                    <Picker.Item label={plant.variedade.nome} value={plant.id} />
                  )
                })
                : null
              }
                
                
              </Picker>
            <TextInput style={styles.input} placeholder="Quantidade" onChangeText={(value) => setFieldValue('quantidade', value)}/>
            <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
            {
                  venda.loading ? (
                    <ActivityIndicator size="small" color={colors.white} />
                  )
                    : (
                      <Text style={styles.submitText}>SALVAR</Text>
                    )
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={this._toggleModal} style={styles.submit, { backgroundColor: '#fff', marginTop: 20 }}>
              <Text style={styles.submitText, { fontColor: '#000', textAlign: 'center' }}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </TouchableOpacity>
    );
  }
}

const EnhancedForm = withFormik({
  mapPropsToValues: ({ props }) => ({
    demanda_id: '',
    plantio_id: '',
    quantidade: '',
  }),

  validationSchema: Yup.object().shape({
    // name: Yup.string()
    //   .required('Preencha o campo nome'),
    // // cellphone: Yup.string()
    // //   .required('Preencha o campo celular'),
    // cpf: Yup.string()
    //   .required('Preencha o campo cpf'),
    // email: Yup.string()
    //   .email('Digite um e-mail válido')
    //   .required('Preencha o campo e-mail'),
    // password: Yup.string()
    //   .min(6, 'A senha deve ter no mínimo 6 caracteres')
    //   .required('Preencha o campo de senha'),
    // password_confirmation: Yup.string()
    //   .min(6, 'A senha deve ter no mínimo 6 caracteres')
    //   .required('Preencha o campo confirmar senha'),
    // terms: Yup.boolean()
    //   .test('isTrue', 'Aceite os termos', value => value),
  }),

  handleSubmit: (values, { props }) => {
    props.vendaActions.postRequest(values);
  },
})(SaleScreen);

const mapStateToProps = state => ({
  venda: state.venda,
  plantio: state.plantio,
});

const mapDispatchToProps = dispatch => ({
  vendaActions: bindActionCreators(VendaActions, dispatch),
  plantioActions: bindActionCreators(PlantioActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedForm);
