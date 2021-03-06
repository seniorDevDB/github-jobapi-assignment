import axios from 'axios';
import {fetchJobDataPending, fetchJobDataSuccess, fetchJobDataFailed} from './reducers/action';

function fetchJobData(data) {
    return dispatch => {
        dispatch(fetchJobDataPending());
        const url = process.env.REACT_APP_API_URL;
        console.log("url", url)
        axios.get(url, {
            headers: { 'Access-Control-Allow-Origin': '*'},
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