/**
 *
 * Portfolio
 *
 */

import React from 'react';
import Styled from './Styled.js';
import LogoHeader from 'components/LogoHeader';
import { Container, Row, Col } from 'reactstrap';
import Porfolio1 from 'images/porfolio/racing.png';
import Porfolio2 from 'images/porfolio/amazon.png';
import Porfolio3 from 'images/porfolio/tanda.png';
import Porfolio4 from 'images/porfolio/thoroughbred.png';
import Porfolio5 from 'images/porfolio/xero.png';


function Portfolio() {
	const PorfolioList = [
  {
    id: 1,
    img: Porfolio1,
    title: 'Racing Victoria',
    link:'https://www.racing.com/'
  },
  {
    id: 2,
    img: Porfolio2,
    title: 'AMAZON AURORA',
    link:'www.aws.amazon.com/rds/aurora'
  },
  {
    id: 3,
    img: Porfolio3,
    title: 'TANDA',
    link:'www.tanda.co'
  },
  {
    id: 4,
    img: Porfolio4,
    title: 'THOROUGHBRED PAYMENTS',
    link:'www.thoroughbredpayments.com.au'
  },
  {
    id: 5,
    img: Porfolio5,
    title: 'XERO',
    link:'https://www.xero.com/'
  }
]
  return (

    <Container>
	   <LogoHeader title="Partners"/>
			<div className="main" id="porfoliopage">
      	<div className="content">
        <Styled>
	        <Row>
	            {PorfolioList.map(porfolio => (
                <Col xs={6} sm={4} key={porfolio.id} >
                <a href={porfolio.link} target="_blank">
                  <div className="wrapper-porfolio" data-aos="fade-up">
  	                <div className="item-wrapper">
  		                <div className="item">
  		                  <div className="porfolio-img">
  		                    <div className="img" style={{ backgroundImage: `url(${porfolio.img})` }} />
  		                  </div>
  		                </div>  
                    </div>
                    <div className="title">
                      {porfolio.title}
                    </div>
  	               </div>
                  </a>
                </Col>
	              
	            ))}
	        </Row>
          </Styled>
      </div>
    </div>
    </Container>   
  );
}

Portfolio.propTypes = {};

export default Portfolio;
