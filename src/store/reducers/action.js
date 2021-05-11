export const FETCH_JOBDATA_PENDING = 'FETCH_JOBDATA_PENDING';
export const FETCH_JOBDATA_SUCCESS = 'FETCH_JOBDATA_SUCCESS';
export const FETCH_JOBDATA_FAILED = 'FETCH_JOBDATA_FAILED';

export const FETCH_SEARCHJOBDATA_PENDING = 'FETCH_SEARCHJOBDATA_PENDING';
export const FETCH_SEARCHJOBDATA_SUCCESS = 'FETCH_SEARCHJOBDATA_SUCCESS';
export const FETCH_SEARCHJOBDATA_FAILED = 'FETCH_SEARCHJOBDATA_FAILED';

export function fetchJobDataPending() {
    return {
        type: FETCH_JOBDATA_PENDING
    };
}

export function fetchJobDataSuccess(data) {
    return {
        type: FETCH_JOBDATA_SUCCESS,
        payload: data
    };
}

export function fetchJobDataFailed(error) {
    return {
        type: FETCH_JOBDATA_FAILED,
        payload: error
    };
}

// export function fetchSearchJobDataPending() {
//     return {
//         type: FETCH_SEARCHJOBDATA_PENDING
//     };
// }

export function fetchSearchJobDataSuccess(data) {
    return {
        type: FETCH_SEARCHJOBDATA_SUCCESS,
        payload: data
    };
}

// export function fetchSearchJobDataFailed(error) {
//     return {
//         type: FETCH_SEARCHJOBDATA_FAILED,
//         payload: error
//     };
// }