/**
 *
 * ServiceInfo
 *
 */

import React from 'react';
import StyleServiceInfo from './StyleServiceInfo';
import StyleScroll from './StyleScroll';
import { Row, Container, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoHeader from 'components/LogoHeader';
// import CustomScrollbarsService from './CustomScrollbarsService';
import ANALYTICS from 'images/icon/ANALYTICS MONITORING.png';
import LAUNCH from 'images/icon/APP LAUNCH PACKAGE.png';
import RESCUE from 'images/icon/APP RESCUE PACKAGE.png';
import INSOURCING from 'images/icon/INSOURCING.png';
import UPGRADE from 'images/icon/UX_UI UPGRADE PACKAGE.png';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ServiceInfo(props) {
	const ServiceList = [
  {
    id: 1,
    img: UPGRADE,
    title: 'UX/UI UPGRADE PACKAGE',
    decs:'Have your existing development reviewed against the latest UX/UI principle with a full blueprint for optimization. Our in house UX experts will review your existing development against your objectives and provide full hi fidelity solutions for you app.'
  },
  {
    id: 2,
    img: RESCUE,
    title: 'APP RESCUE PACKAGE',
    decs:'For all of those existing apps that are not quite right – and there is puuu-lenty of them! Let Bluebottle Digital right past wrongs and book your app in for a full app servicing. This Package includes full app audit, bug fixing, code clean up, redesign, feature enhancement and resubmission.'
  },
  {
    id: 3,
    img: LAUNCH,
    title: 'APP LAUNCH PACKAGE',
    decs:'Get your apps launched the right way with our App Launch program. This program will help you set your keyword strategy optimize your screenshots, get it reviewed and featured by relevant media outlets.'
  },
  {
    id: 4,
    img: ANALYTICS,
    title: 'ANALYTICS MONITORING',
    decs:'Measurement and analysis of the performance of your development is key to success. Let Fruitful take the headache out of monitoring your app with this program whereby you will not only receive monthly usage data, but also any issues or customer feedback as well as future recommendations and suggestions.'
  },
  {
    id: 5,
    img: INSOURCING,
    title: 'INSOURCING',
    decs:'Get your own ongoing development team by hiring a pod of Bluebottle Digital developers for longer-term projects. This is a good option for those who have mobile as their core product and will be undertaking ongoing updates and reviews. They can either be managed directly by you via the offshore project manager or via one of our Account Managers in your terrority.'
  }
]
  return (  
  <Container>	
    <LogoHeader title="Our Services"/>
    <div className="main" id="">
     	<StyleServiceInfo className="content">
     	<Row>
     	 {ServiceList.map(service => (
			  	<Col xs="12" sm="6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" key={service.id}>
			  		<div className="wrapper-icon">
			  			<div className="icon"><img src={service.img}/></div>
			  		</div>
			  		<div className="sometext-info">
			  			<h2>{service.title}</h2>
			  			<p>{service.decs}</p>
			  		</div>
			  	</Col>
			  ))}
	  		</Row>
			  	
	  	</StyleServiceInfo>
	 
	  </div>
  </Container>
  );
}

ServiceInfo.propTypes = {};

export default ServiceInfo;
