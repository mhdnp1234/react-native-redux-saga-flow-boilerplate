import {
	FETCH_LIST,
	FETCH_LIST_SUCCESS,
	LIST_IS_LOADING,
} from './constants';

export function listIsLoading(bool: boolean) {
	return {
		type: LIST_IS_LOADING,
		isLoading: bool,
	};
}

export function fetchListSuccess(list: Object) {
	return {
		type: FETCH_LIST_SUCCESS,
		list,
	};
}

export function fetchList() {
	return {
		type: FETCH_LIST,
	};
}
