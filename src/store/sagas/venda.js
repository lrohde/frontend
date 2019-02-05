import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as VendaActions } from '../ducks/venda';
import { Creators as ModalActions } from '../ducks/modal';

export function* postVendaRequest(action) {
  try {
    const response = yield call(api.post, '/api/venda', action.payload.data);
    yield [
      put(VendaActions.postSuccess(response.data.message)),
      put(ModalActions.showModal('Cadastro realizado!', 'Obrigado por informar sua venda', 'success')),
    ];
  } catch (error) {
    yield put(VendaActions.postFailure(error.response.data.message));
  }
}

export function* getVendaRequest(action) {
  try {
    const response = yield call(api.get, '/api/demanda', action.payload.data);
    yield put(VendaActions.getSuccess(response.data.message));
  } catch (error) {
    yield put(VendaActions.postFailure(error.response.data.message));
  }
}
