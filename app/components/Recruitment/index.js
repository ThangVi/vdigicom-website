/**
 *
 * Recruitment
 *
 */

import React from 'react';
import './style.scss';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

function Recruitment(props) {
  const job = [{
    category: "Chuyên viên dự án",
    created_at: "2019-05-03T10:20:16.000Z",
    description: "Hồ sơ thầu",
    friendly_url: null,
    id: 4,
    publish_date: "2019-05-14T10:20:15.000Z",
    short_description: null,
    title: "Join Our Team",
    updated_at: "2019-05-14T03:55:39.000Z"
  }]
  const date = new Date(props.job.publish_date);
	return (
		<div>
    <Link to={`${props.match.url}job/${props.job.friendly_url}`}>
      <div className="recruitment-content">
        <div className="block-info">
            <div className="date">
             <span className="day">{date.toLocaleDateString('en-GB', { day: 'numeric'})}</span>
             <span className="year">{date.toLocaleDateString('en-GB', {month: 'short', year: 'numeric' })}</span>
            </div>
            <h2>{props.job.category}</h2>
            <p className="position">{props.job.title}</p>
             <span className="apply">Apply Now</span><i className="icon-more"></i>
        </div>        
      </div> 
      </Link>   
		</div>
	);
}

Recruitment.propTypes = {};

export default Recruitment;
