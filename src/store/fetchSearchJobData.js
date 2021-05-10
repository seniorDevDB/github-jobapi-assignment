import axios from 'axios';
import {fetchJobDataPending, fetchJobDataSuccess, fetchJobDataFailed} from './reducers/action';

function fetchSearchJobData(data) {
    return dispatch => {
        const url = process.env.REACT_APP_API_URL + '/getSearchJobs';
        console.log("url", url, data)
        axios.post(url, {
            description: data.description,
            location: data.location,
            full_time: data.full_time
        }).then(res => {
            console.log("ressss", res.data)
            dispatch(fetchJobDataSuccess(res.data))
        }).catch(err => {
            console.log("error")
        })
    }
}

export default fetchSearchJobData;