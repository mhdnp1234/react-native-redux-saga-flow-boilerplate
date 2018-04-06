// @flow
// import { AsyncStorage } from "react-native";
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas';
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    devTools({
      name: 'nativestarterkit',
      realtime: true
    })
  );

  const store = createStore(reducer, enhancer);

  store.runSaga = sagaMiddleware.run;
  store.runSaga(rootSaga);

  persistStore(store, onCompletion);
  return store;
}
