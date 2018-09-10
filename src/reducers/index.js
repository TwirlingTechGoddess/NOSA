import { combineReducers } from 'redux';
import { imagesReducer } from './imagesReducer';
import { debunksReducer } from './debunksReducer';


export const rootReducer = combineReducers({
  images: imagesReducer,
  debunks: debunksReducer
})