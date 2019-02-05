import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ManejoActions } from '../ducks/manejo';
import { Creators as ModalActions } from '../ducks/modal';

export function* postManejoRequest(action) {
  try {
    const response = yield call(api.post, '/api/plantio/manejo', action.payload.data);
    yield [
      put(ManejoActions.postSuccess(response.data.message)),
      put(ModalActions.showModal('Cadastro realizado!', 'Obrigado por informar seu manejo!', 'success')),
    ];
  } catch (error) {
    yield put(ManejoActions.postFailure(error.response.data.message));
  }
}

export function* getManejoRequest(action) {
  try {
    const response = yield call(api.get, '/api/manejo', action.payload.data);
    yield put(ManejoActions.getSuccess(response.data.message));
  } catch (error) {
    yield put(ManejoActions.postFailure(error.response.data.message));
  }
}

