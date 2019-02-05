import { combineReducers } from 'redux';

import example from './example';
import plantio from './plantio';
import manejo from './manejo';
import venda from './venda';
import variedade from './variedade';
import endereco from './endereco';
import modal from './modal';
import saldo from './saldo';

export default combineReducers({
  example,
  plantio,
  manejo,
  venda,
  variedade,
  endereco,
  modal,
  saldo,
});
