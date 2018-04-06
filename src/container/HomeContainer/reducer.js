import {
	FETCH_LIST_SUCCESS,
	LIST_IS_LOADING,
} from './constants';

const initialState = {
	list: [],
	isLoading: true,
};

export default function(state: any = initialState, action: object) {
	switch (action.type) {
		case FETCH_LIST_SUCCESS:
			return {
				...state,
				list: action.list,
			};
		case LIST_IS_LOADING:
		return {
			...state,
			isLoading: action.isLoading,
		};
		default:
			return state;
	}
}
