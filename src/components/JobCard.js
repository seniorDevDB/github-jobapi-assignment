import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ item, index }) => {
  console.log("here is item", {item})
    return (
      <div className="job-card">
        <div className="job-container">
          <Link to={`/detail/${index}`}>
            <img src={item.company_logo} alt={item.title} className="job-card-company-logo" />
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