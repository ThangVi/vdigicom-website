/**
 *
 * Home
 *
 */

import React from 'react';
import Styled from './Styled.js';
import AOS from 'aos'; 
import Particles from 'react-particles-js';
import { Container, Row, Col } from 'reactstrap';
import Logo from 'images/logo/logo.png';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Home(props) {
  
  return (
    <Styled>
      {props.page === 0 && <Particles className="canvas"
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
      />}
      <Container>
        <div className="container-home">
          <div className="home-wrapper wrapper">
            <div className="home-content">
              <Row>
                <div className="logo" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200"> 
                  <img href="/" src={Logo} />    
                </div>
                <Col xs={11} sm={10} lg={9}>
                  <h1 data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">Công Ty TNHH Mạng Viễn Thông Số Việt Nam - VDIGICOM CO.,LTD</h1>
                  <p data-aos="fade-up-right">Lập trình máy vi tính, dịch vụ tư vấn và các hoạt động khác liên quan đến máy vi tính</p>
                   <a data-aos="fade-left" className="btn-readmore" href="#02" onClick={() => {props.navigation.moveTo(2)}}><span>XEM THÊM</span><i className="icon-more"></i></a>
                 </Col> 
              </Row>
            </div>
            <div className="copyright">
              <p>© VDIGICOM CO.,LTD 2019</p>
            </div>
          </div>
        </div>
      </Container> 
      
    </Styled>
  );
}

Home.propTypes = {};

export default Home;
