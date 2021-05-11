import {FETCH_SEARCHJOBDATA_SUCCESS} from './action';

export default function jobData(state = {}, action) {
    let newState = {...state};
    switch(action.type) {
        case FETCH_SEARCHJOBDATA_SUCCESS:
            newState.success = true;
            newState.data = [action.payload.data];
            return newState;
        default:
            return state;
    }
}