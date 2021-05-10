import axios from 'axios';
import { GET } from '../api/api';
import {fetchJobDataPending, fetchJobDataSuccess, fetchJobDataFailed} from './reducers/action';

function fetchJobData(data) {
    return dispatch => {
        dispatch(fetchJobDataPending());
        const url = process.env.REACT_APP_API_URL + '/getJobsPerPage';
        console.log("url", url)
        axios.post(url, {
            pageNumber: data.pageNumber
        }).then(res => {
            console.log("ressss", res.data)
            dispatch(fetchJobDataSuccess(res.data))
        }).catch(err => {
            console.log("error")
            dispatch(fetchJobDataFailed(err));
        })
    }
}

export default fetchJobData;