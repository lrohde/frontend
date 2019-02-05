import React, { Component } from 'react';
import { Text, ScrollView, Platform, TouchableOpacity, View, Image, StatusBar, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { Item, Input, Picker, DatePicker } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlantioActions } from 'store/ducks/plantio';

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
          <Text style={styles.label}>Cultura (Variedade)</Text>
          <Item style={styles.item}>
            {/* <Icon style={styles.inputIcon} name='ios-person' color={colors.white} size={20} /> */}
            <Input
              style={styles.input}
              placeholder="Cultura"
              autoCapitalize={false}
              inlineImageLeft='assets/img/person-icon.png'
              selectionColor={colors.white}
              placeholderTextColor={colors.white}
              underlineColorAndroid={colors.transparent}
              value={values.email}
              onChangeText={text => setFieldValue('email', text)}
            />
          </Item>
          { errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text> }
          <Text style={styles.label}>Data Plantio</Text>
          <Item style={styles.item}>
            {/* <Icon style={styles.inputIcon} name='ios-mail' color={colors.white} size={20} /> */}
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
          { errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text> }
          <Text style={styles.label}>Data Prevista Colheita</Text>
          <Item style={styles.item}>
            {/* <Icon name='ios-lock' style={styles.inputIcon} color={colors.white} size={15} /> */}
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
            <Text style={styles.label}>Quantidade</Text>
            <Item style={styles.item}>
              {/* <Icon style={styles.inputIcon} name='ios-person' color={colors.white} size={20} /> */}
              <Input
                style={styles.input}
                placeholder="Quantidade"
                autoCapitalize={false}
                inlineImageLeft='assets/img/person-icon.png'
                selectionColor={colors.white}
                placeholderTextColor={colors.white}
                underlineColorAndroid={colors.transparent}
                value={values.email}
                onChangeText={text => setFieldValue('email', text)}
              />
            </Item>
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
  plantio: state.plantio,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlantioActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedForm);
