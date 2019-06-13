/**
 *
 * New
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import LogoHeader from 'components/LogoHeader';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNew, {makeNewsList} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Markdown from 'react-markdown';
import { getNewsList } from './actions';
import NewsDetails from 'containers/NewsDetails/Loadable';
import News from 'components/News';
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Styled from './Styled.js';
import { API } from '../../network';

/* eslint-disable react/prefer-stateless-function */
export class New extends React.PureComponent {
  constructor(props) { 
    super(props); 
    this.state = {
      id: 0,
      newsDetails: [],
    };
  }           

  render() {
    const { match, post } = this.props;
    const settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

    return (
      <div>
        <Container>
        <LogoHeader title="News"/>
        <div className="main">
        <Styled className="content aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <Slider {...settings}>
          {post && post.map(news => (
            <News key={news.id} news={news} match={match}/>
          ))}
          </Slider>
          <Route path={`${match.path}/:friendly_url`} component={NewsDetails} />
          
        </Styled>
        </div>
        </Container>
      </div>
    );
  }
}

New.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getNewsList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  new: makeSelectNew(),
  newsList: makeNewsList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getNewsList: () => {
      dispatch(getNewsList());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'new', reducer });
const withSaga = injectSaga({ key: 'new', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(New);
