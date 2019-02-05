import { all, takeLatest } from 'redux-saga/effects';
import { Types as ManejoTypes } from '../ducks/manejo';
import { Types as VendaTypes } from '../ducks/venda';
import { Types as PlantioTypes } from '../ducks/plantio';
import { Types as EnderecoTypes } from '../ducks/endereco';
import { Types as VariedadeTypes } from '../ducks/variedade';
import { Types as SaldoTypes } from '../ducks/saldo';

import { postVendaRequest, getVendaRequest } from './venda';
import { postPlantioRequest, getPlantioRequest } from './plantio';
import { postManejoRequest, getManejoRequest } from './manejo';
import { getVariedadeRequest } from './variedade';
import { getEnderecoRequest } from './endereco';
import { getSaldo } from './saldo';

export default function* rootSaga() {
  yield all([
    takeLatest(ManejoTypes.POST_REQUEST, postManejoRequest),
    takeLatest(ManejoTypes.GET_REQUEST, getManejoRequest),
    takeLatest(VendaTypes.POST_REQUEST, postVendaRequest),
    takeLatest(VendaTypes.GET_REQUEST, getVendaRequest),
    takeLatest(PlantioTypes.POST_REQUEST, postPlantioRequest),
    takeLatest(PlantioTypes.GET_REQUEST, getPlantioRequest),
    takeLatest(VariedadeTypes.GET_REQUEST, getVariedadeRequest),
    takeLatest(EnderecoTypes.GET_REQUEST, getEnderecoRequest),
    takeLatest(SaldoTypes.GET_REQUEST, getSaldo),
  ]);
}
