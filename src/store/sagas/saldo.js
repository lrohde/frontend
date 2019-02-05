import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as SaldoActions } from '../ducks/saldo';

export function* getSaldo(action) {
  try {
    const response = yield call(api.get, '/api/saldo');
    yield put(SaldoActions.getSuccess(response.data.message));
  } catch (error) {
    yield put(SaldoActions.getFailure(error.response.data.message));
  }
}
