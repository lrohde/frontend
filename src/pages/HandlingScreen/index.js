import React, { Component } from 'react';
import { Text, ScrollView, Platform, TouchableOpacity, View, Image, StatusBar, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { Item, Input, Picker, DatePicker } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlantioActions } from 'store/ducks/plantio';
import { Creators as ManejoActions } from 'store/ducks/manejo';

import styles from './styles';
import { colors, metrics } from 'styles';

const offset = (Platform.OS === 'android') ? -500 : 0;

class HandlingScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.backgroundLight,
      borderBottomWidth: 0,
    },
    headerLeftContainerStyle: {
      paddingLeft: metrics.basePadding,
    },
    headerTintColor: colors.dark,
  }

  componentDidMount() {
    this.props.plantioActions.getRequest();
    this.props.manejoActions.getRequest();
  }

  render() {
    const { navigation, values, setFieldValue, touched ,errors, handleSubmit, plantio, manejo } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={offset} style={styles.container}>
        <StatusBar barStyle="dark-content" backgrounColor={colors.transparent} />

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.form}>
        <View style={styles.logoContainer}>
          {/* <Image style={styles.logo} source={require('assets/img/logo.png')} /> */}
        </View>
          <Text style={styles.label}>Selecione o Plantio</Text>
          <Item style={styles.item}>
            {/* <Icon style={styles.inputIcon} name='ios-person' color={colors.white} size={20} /> */}
            <Picker
                mode="dropdown"
                iosIcon={<Icon color="#f5f5f5" name="ios-arrow-down" />}
                style={{ width: 300 }}
                placeholder="Selecione"
                placeholderStyle={{ color: "#f5f5f5" }}
                placeholderIconColor="#007aff"
                selectedValue={values.plantio_id}
                onValueChange={value => setFieldValue('plantio_id', value)}
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
          </Item>
          { errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text> }
          <Text style={styles.label}>Selecione o Manejo</Text>
          <Item style={styles.item}>
            {/* <Icon style={styles.inputIcon} name='ios-mail' color={colors.white} size={20} /> */}
            <Picker
                mode="dropdown"
                iosIcon={<Icon color="#f5f5f5" name="ios-arrow-down" />}
                style={{ width: 300 }}
                placeholder="Selecione"
                placeholderStyle={{ color: "#f5f5f5" }}
                placeholderIconColor="#007aff"
                selectedValue={values.manejo_id}
                onValueChange={value => setFieldValue('manejo_id', value)}
              >
               {
                manejo.data ? manejo.data.map(vari => {
                  return (
                    <Picker.Item label={vari.nome} value={vari.id} />
                  )
                })
                : null
              }
              </Picker>
          </Item>
          { errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text> }
          <Text style={styles.label}>Data</Text>
          <Item style={styles.item}>
            {/* <Icon name='ios-lock' style={styles.inputIcon} color={colors.white} size={15} /> */}
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Selecionar data"
              textStyle={{ color: "#f5f5f5"}}
              placeHolderTextStyle={{ color: "#f5f5f5" }}
              onDateChange={value => setFieldValue('data', moment(value).format('YYYY-MM-DD'))}
              disabled={false}
            />
            </Item>
          { errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text> }
          {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            {
            client.loading ? (
              <ActivityIndicator size="small" color={colors.white} />
            )
              : (
                <Text style={styles.buttonText}>CADASTRAR</Text>
              )
          }
          </TouchableOpacity> */}
           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
           {
                  manejo.loading ? (
                    <ActivityIndicator size="small" color={colors.white} />
                  )
                    : (
                      <Text style={styles.buttonText}>SALVAR</Text>
                    )
                }
            </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    plantio_id: '',
    manejo_id: '',
    data: '',
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
    props.manejoActions.postRequest(values);
  },
})(HandlingScreen);

const mapStateToProps = state => ({
  plantio: state.plantio,
  manejo: state.manejo,
});

const mapDispatchToProps = dispatch => ({
  plantioActions: bindActionCreators(PlantioActions, dispatch),
  manejoActions: bindActionCreators(ManejoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedForm);
