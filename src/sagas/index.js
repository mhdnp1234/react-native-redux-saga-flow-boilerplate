import {all} from 'redux-saga/effects';

import HomeContainerSaga from '../container/HomeContainer/sagas';

export const rootSaga =  function* rootSagas() {
    yield all([
    ...HomeContainerSaga,
    ]);
}
