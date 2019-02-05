import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as VendaActions } from '../ducks/venda';

export function* postVendaRequest(action) {
  try {
    const response = yield call(api.post, '/api/v1/venda', action.payload.data);
    yield put(VendaActions.postSuccess(response.data));
  } catch (error) {
    yield put(VendaActions.postFailure(error.response.data.message));
  }
}
