import React from "react";
import JobCard from "./JobCard";

const JobList = ({ list }) => {
    return (
      <ul className="list">
        {list.items.map((item, index) => {
          return <JobCard key={index} item={item}/>;
        })}
      </ul>
    );
  };

  export default JobList;