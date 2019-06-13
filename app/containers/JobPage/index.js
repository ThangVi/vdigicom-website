/**
 *
 * JobPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import JobDetailPage from 'containers/JobDetailPage/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectJobPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Recruitment from 'components/Recruitment';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import LogoWhite from 'components/LogoWhite';
import StyledRecruitment from './StyledRecruitment.js';
import Slider from "react-slick";
import Particles from 'react-particles-js';
import { API } from '../../network';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
/* eslint-disable react/prefer-stateless-function */
export class JobPage extends React.PureComponent {
  constructor(props) { 
    super(props); 
    this.state = {
      id: 0,
    }; 
  }

  render() {
    const { match, jobs } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 1500,
      vertical: true,
      pauseOnHover: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      centerPadding: "60px",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
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
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
          }
        }
      ]
    }
    return (
      <div>
      {this.props.page === 4 &&  <Particles className="canvas"
          height="100vh"
          params={{
            "particles": {
              "number": {
                "value": 60,
                "density": {
                  "enable": true,
                  "value_area": 850
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
              },
              "opacity": {
                "value": 0.2,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3.5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 158,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1.5
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
            },
            "retina_detect": true
          }} 
        />
      }
        <Container>
          <LogoWhite title="Join Us"/>
          <div className="main">
            <StyledRecruitment data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Slider {...settings}>
              {jobs && jobs.map(job => (
                <Recruitment key={job.friendly_url} job={job} match={match}/>
              ))}
            </Slider>
            <Route path={`${match.path}/:friendly_url`} component={JobDetailPage} />
          </StyledRecruitment>
          </div>
        </Container>
      </div>
    );
  }
}

JobPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  jobpage: makeSelectJobPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'jobPage', reducer });
const withSaga = injectSaga({ key: 'jobPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(JobPage);
