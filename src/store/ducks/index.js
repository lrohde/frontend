import { combineReducers } from 'redux';

import example from './example';
import plantio from './plantio';
import manejo from './manejo';
import venda from './venda';

export default combineReducers({
  example,
  plantio,
  manejo,
  venda,
});
