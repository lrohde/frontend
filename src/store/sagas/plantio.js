import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as PlantioActions } from '../ducks/plantio';

export function* postPlantioRequest(action) {
  try {
    const response = yield call(api.post, '/api/v1/plantio', action.payload.data);
    yield put(PlantioActions.postSuccess(response.data));
  } catch (error) {
    yield put(PlantioActions.postFailure(error.response.data.message));
  }
}
