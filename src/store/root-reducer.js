import { combineReducers } from 'redux';

import { positionsReducer } from './positions/postions-reducer';
import { filterReducer } from './filters/filters-reducer';

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filterReducer,
});
