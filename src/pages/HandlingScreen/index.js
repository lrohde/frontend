import React, { Component } from 'react';
import { Text, ScrollView, Platform, TouchableOpacity, View, Image, StatusBar, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { Item, Input, Picker, DatePicker } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ExampleActions } from 'store/ducks/example';

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
    // this.props.getRequest('lrohde/TCC_2017');
  }

  render() {
    const { navigation, values, setFieldValue, touched ,errors, handleSubmit, client } = this.props;
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
                // selectedValue={this.state.selected2}
                // onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
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
                // selectedValue={this.state.selected2}
                // onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
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
              // onDateChange={this.setDate}
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
              <Text style={styles.buttonText}>SALVAR</Text>
            </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    name: '',
    cellphone: '',
    cpf: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Preencha o campo nome'),
    // cellphone: Yup.string()
    //   .required('Preencha o campo celular'),
    cpf: Yup.string()
      .required('Preencha o campo cpf'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo e-mail'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
    password_confirmation: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo confirmar senha'),
    terms: Yup.boolean()
      .test('isTrue', 'Aceite os termos', value => value),
  }),

  handleSubmit: (values, { props }) => {
    // props.postRequest(values);
  },
})(HandlingScreen);

const mapStateToProps = state => ({
  example: state.exmple,
});

const mapDispatchToProps = dispatch => bindActionCreators(ExampleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedForm);
