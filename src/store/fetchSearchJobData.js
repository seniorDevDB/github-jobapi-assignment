import axios from 'axios';
import {fetchSearchJobDataSuccess} from './reducers/action';

function fetchSearchJobData(data) {
    return dispatch => {
        const url = process.env.REACT_APP_API_URL + '/getSearchJobs';
        console.log("url", url, data)
        axios.post(url, {
            description: data.description,
            location: data.location,
            full_time: data.full_time
        }).then(res => {
            console.log("search result", res.data)
            dispatch(fetchSearchJobDataSuccess(res.data))
        }).catch(err => {
            console.log("error")
        })
    }
}

export default fetchSearchJobData;