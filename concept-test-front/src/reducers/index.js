import { combineReducers } from 'redux';

// import chars from './char';
import page from './page';
import fetchChars from './fetchChars';
import fetchCharSelected from './fetchCharSelected';

const rootReducer = combineReducers({
  page: page,
  fetchChars : fetchChars,
  fetchCharSelected :fetchCharSelected
})

export default rootReducer;