import { all, takeLatest } from 'redux-saga/effects';
import { Types as ManejoTypes } from '../ducks/manejo';
import { Types as VendaTypes } from '../ducks/venda';
import { Types as PlantioTypes } from '../ducks/plantio';

import { postVendaRequest } from './venda';
import { postPlantioRequest } from './plantio';
import { postManejoRequest } from './manejo';


export default function* rootSaga() {
  yield all([
    takeLatest(ManejoTypes.POST_REQUEST, postVendaRequest),
    takeLatest(VendaTypes.POST_REQUEST, postPlantioRequest),
    takeLatest(PlantioTypes.POST_REQUEST, postManejoRequest),
  ]);
}
