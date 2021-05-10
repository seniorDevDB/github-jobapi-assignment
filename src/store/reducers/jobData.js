import {FETCH_JOBDATA_PENDING, FETCH_JOBDATA_SUCCESS, FETCH_JOBDATA_FAILED} from './action';

export default function jobData(state = {}, action) {
    let newState = {...state};
    switch(action.type) {
        case FETCH_JOBDATA_PENDING:
            newState.pending = true;
            return newState;
        case FETCH_JOBDATA_SUCCESS:
            newState.success = true;
            newState.data = [ ...newState.data, ...action.payload.data];
            return newState;
        case FETCH_JOBDATA_FAILED:
            newState.error = true;
            return newState;
        default:
            return state;
    }
}