import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as VariedadeActions } from '../ducks/variedade';

export function* getVariedadeRequest(action) {
  try {
    const response = yield call(api.get, '/api/variedade');
    yield put(VariedadeActions.getSuccess(response.data.message));
  } catch (error) {
    yield put(VariedadeActions.getFailure(error.response.data.message));
  }
}
