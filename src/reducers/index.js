import { landingReducer } from './landingReducer';
import { debunksReducer } from './debunksReducer';

export const rootReducer = () => ({
  landing: landingReducer,
  debunks: debunksReducer
})