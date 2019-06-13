/**
 *
 * Recruitment
 *
 */

import React from 'react';
import './style.scss';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

function Recruitment(props) {
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
