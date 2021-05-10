import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchJobData from '../store/fetchJobData';

import Button from 'react-bootstrap/Button';

class JobDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobIndex: 0
        }
    }

    componentDidMount() {   
        let data = {
            pageNumber: this.props.pageNumber
        }
        this.props.fetchJobData(data)

        const index = parseInt(this.props.match.params.id)
        this.setState({jobIndex: index})
    }

    handleApplyNow (url) {

    }

    render() {
        console.log("HIHI", this.props.jobData, this.state.jobIndex);
        const job_data = this.props.jobData[this.state.jobIndex]
        return (
            <>
                { (this.props.jobData && job_data) ? (
                <div className="job-detail-page">
                    <div className="job-company-detail-section">
                        <div className="job-company-logo">
                            <img src={job_data.company_logo}></img>
                        </div>
                        <div className="job-company-title-section">
                            <h1>{job_data.company}</h1>
                            <p>{job_data.location}</p>
                        </div>
                        <Button className="job-company-button" style={{paddingRight: "0px"}}>Company Site</Button>
                    </div>
                    <div className="job-detail-section">
                        <div>
                            <h3>{job_data.title}</h3>
                            <p>{job_data.location}</p>
                        </div>
                        <Button onClick={this.handleApplyNow(job_data.url)}>Apply Now</Button>
                        <div style={{marginTop: "20px"}} dangerouslySetInnerHTML={{__html: job_data.description}}></div> 
                    </div>
                    <div className="job-detail-howtoapply-section">
                        <h3>How to Apply?</h3>
                        <div dangerouslySetInnerHTML={{__html: job_data.how_to_apply}}></div>
                    </div>
                </div>)
                : <div></div>
                }
            </>
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
)(JobDetail);