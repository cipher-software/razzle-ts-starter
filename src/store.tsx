import { createStore } from 'redux';
import rootReducer from './reducers';

const configureStore = (preloadedState: any) => {
  const store = createStore(rootReducer, preloadedState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
