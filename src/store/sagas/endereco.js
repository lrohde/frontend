import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as EnderecoActions } from '../ducks/endereco';

export function* getEnderecoRequest(action) {
  try {
    const response = yield call(api.get, '/api/endereco');
    yield put(EnderecoActions.getSuccess(response.data.message));
  } catch (error) {
    yield put(EnderecoActions.getFailure(error.response.data.message));
  }
}
