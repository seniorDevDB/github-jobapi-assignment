import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';

const JobCard = ({ item, index }) => {
  console.log("here is item", {item})
    return (
      <div className="job-card">
        <div className="job-container">
          <Link to={`/detail/${index}`}>
            <img src={item.company_logo} alt={item.title} className="job-card-company-logo" />
            <Moment fromNow>{item.created_at}</Moment>
            <p>{item.type}</p>
            <h4 className="job-card-title">{item.title}</h4>
            <p className="job-card-campany">
              {item.company}
            </p>
            <p className="job-card-location">
              {item.location}
            </p>
          </Link>
        </div>
      </div>
    );
  };

  export default JobCard;