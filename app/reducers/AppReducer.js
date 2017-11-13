import { Types } from 'actions/AppActions';

const initialState = {
	formation: null,
	players: [],
	team: null,
	isFetching: false,
	isFailure: false,
};

const AppReducer = (state = initialState, action) => {
	switch(action.type){
	case Types.FETCH_INITIAL_DATA_ATTMEPT:
		return {
			...state,
			isFetching: true
		};
	case Types.FETCH_INITIAL_DATA_SUCCESS:
		return {
			...state,
			...action.payload,
			isFetching: false
		};
	case Types.ON_RECEIVE_UPDATE:
		return {
			...state,
			...action.payload,
		};
	default:
		return state;
	}
};

export default AppReducer;
