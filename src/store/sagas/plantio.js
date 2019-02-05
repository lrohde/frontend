import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as PlantioActions } from '../ducks/plantio';
import { Creators as ModalActions } from '../ducks/modal';

export function* postPlantioRequest(action) {
  try {
    const response = yield call(api.post, '/api/plantio', action.payload.data);
    yield [
      put(PlantioActions.postSuccess(response.data)),
      put(ModalActions.showModal('Cadastro realizado!', 'Obrigado por informar seu plantio!', 'success')),
    ];
  } catch (error) {
    yield put(PlantioActions.postFailure(error.response.data.message));
  }
}

export function* getPlantioRequest(action) {
  try {
    const response = yield call(api.get, '/api/plantio', action.payload.data);
    yield put(PlantioActions.getSuccess(response.data.message));
  } catch (error) {
    yield put(PlantioActions.postFailure(error.response.data.message));
  }
}
