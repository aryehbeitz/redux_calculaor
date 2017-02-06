import { DevTools } from './devToolConfig';
import rootReducer from './rootReducer.js';
import thunk from 'redux-thunk';
export const storeConfig = $ngReduxProvider => {
  'ngInject';

  $ngReduxProvider.createStoreWith(rootReducer, [thunk], [DevTools.instrument()]);
};