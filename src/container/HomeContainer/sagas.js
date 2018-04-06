import {put, call, takeLatest} from 'redux-saga/effects';
import {
	FETCH_LIST,
} from './constants';

import {
    fetchListSuccess,
    listIsLoading,
} from './actions';
import axios from 'axios';

const gitHubApi = axios.create({
    baseURL: 'https://api.github.com',
});

export function fetchUser() {
    return gitHubApi.get('/users')
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            return null;
        });
}

export function* fetchListFlow(action) {
    const result = yield call(fetchUser);
    if (result) {
        yield put(fetchListSuccess(result));
    }
    yield put(listIsLoading(false));
}
// All sagas to be loaded
export default [
    takeLatest(FETCH_LIST, fetchListFlow),
];
