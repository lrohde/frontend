import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ManejoActions } from '../ducks/manejo';

export function* postManejoRequest(action) {
  try {
    const response = yield call(api.post, '/api/v1/manejo', action.payload.data);
    yield put(ManejoActions.postSuccess(response.data));
  } catch (error) {
    yield put(ManejoActions.postFailure(error.response.data.message));
  }
}
