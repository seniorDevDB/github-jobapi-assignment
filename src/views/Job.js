import React, { Component } from "react";
import Search from "../components/Search";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import JobCard from '../components/JobCard';

import fetchJobData from '../store/fetchJobData';
import Button from 'react-bootstrap/Button';


class Job extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        console.log("page number", this.props.pageNumber)
        let data = {
            pageNumber: this.props.pageNumber
        }
        this.props.fetchJobData(data)
    }

    handleLoadMore = () => {
        let data = {
            pageNumber: this.props.pageNumber + 1
        }
        this.props.fetchJobData(data)
    }

    render() {

        if( this.props.success !== true ) {
            return (
              <div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              </div>
            )
        }
        
        const jobData = this.props.jobData;
        console.log("jobDatae", jobData)

        return (
            
            <div className="job-page">
                <Search />
                <div className="job-page-cards">
                    {
                        jobData.map((list, index) => (
                            list != null ? (
                                <JobCard item={list} index={index} key={index}></JobCard>
                            ) : (<div></div>)
                        ))
                    }
                </div>
                <div style={{textAlign: 'center',marginTop: "20px"}}>
                    <Button onClick={this.handleLoadMore}>Load More</Button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    error: state.jobData.error,
    success: state.jobData.success,
    pending: state.jobData.pending,
    jobData: state.jobData.data,
    pageNumber: state.jobData.page_number
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchJobData,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Job);