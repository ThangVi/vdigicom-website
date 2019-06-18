/**
 *
 * News
 *
 */

import React from 'react';
import {imageLink} from 'constants/appconfig';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

function News(props) {  
  const newsImg = props.news.img;
  const date = new Date(props.news.publish_date);
  return (
    <Link to={`${props.match.url}news/${props.news.id}`}>
      <div className="block-news">
        <div  className="news-item">
          <div className="news-img">
            <div className="img" style={{ backgroundImage: `url(${newsImg})` }} />
            <div className="news-time">
             <span className="day">{ date.toLocaleDateString('en-GB', { day: 'numeric'})}</span>
             <span className="year">{ date.toLocaleDateString('en-GB', {month: 'short', year: 'numeric' })}</span>
            </div>
          </div>
          <div className="info">
           <h4 className="news-title">{props.news.title}</h4>
            <p className="news-content">{props.news.short_description}</p>
          </div>
        </div>
      </div>
    </Link>
         

  );
}

News.propTypes = {};

export default News;
