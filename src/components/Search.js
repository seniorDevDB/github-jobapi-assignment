import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import fetchJobData from '../store/fetchJobData';
import fetchSearchJobData from '../store/fetchSearchJobData';

import Button from 'react-bootstrap/Button';

import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';

import Checkbox from '@material-ui/core/Checkbox';


function Search(props) {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [full_time, setFullTime] = useState(false);

    useEffect(() => {

    })

    const handleSearch = () => {
        console.log("ddd", title)
        const data = {
            description: title,
            location: location,
            full_time: full_time
        }
        props.fetchSearchJobData(data);
    }

    return (
        <div>
            <div className="searchbar">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                            <SearchIcon/>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Filter by title, companies, expertise..." aria-label="FilterByTitle" aria-describedby="basic-addon" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                            <RoomIcon/>
                        </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Filter by location" aria-label="FilterByLocation" aria-describedby="basic-addon" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend checkbox">
                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value= {full_time} onChange={(e) => setFullTime(!full_time)}/>          
                    </div>
                    <b>Full Time Only</b>
                    <Button onClick = {() => handleSearch()}>Search</Button>
                </div>
            </div>
            
            <div className="searchbar-mobile">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Filter by title..." aria-label="FilterByTitle" aria-describedby="basic-addon" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon" onClick={() => handleSearch()}>
                                <SearchIcon/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    error: state.jobData.error,
    success: state.jobData.success,
    pending: state.jobData.pending,
    jobData: state.jobData.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchJobData,
    fetchSearchJobData,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);