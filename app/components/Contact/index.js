/**
 *
 * Contact
 *
 */

import React from 'react';
import Styled from './Styled.js';
import ContactForm from 'containers/ContactForm';
import LogoWhite from 'components/LogoWhite';
import { Container, Row, Col} from 'reactstrap';
import ReactMapboxGl, { Layer, Feature, ZoomControl, Popup } from "react-mapbox-gl";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import AOS from 'aos'; 
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZGF0bnQiLCJhIjoiY2p1djAwcHFvMG1rZzQzbnYydGd6NTg4cCJ9.7L6RW2yxzdGb0br_PqDN4w"
});
const zoom = [17.50];
const coods = {
	HANOI: [105.7822885, 21.0314765],
	MELBOURNE: [144.973843, -37.8359532]
};

function Contact(props) {
  return (
  	<Styled>
			<Tabs>
				<TabPanel className="tab2">
					<Container>
						<LogoWhite title="Contact Us"/>
						<div className="main">
							<Row>
								<Col xs={12} sm={12} md={6} className="custom-fadein">
									<div className="contact">
										<h2>Bluebottle Digital Viet Nam</h2>
										<p>3rd floor, VMT Building, Cau Giay District, Hanoi, Vietnam</p>
										<p><a href="tel:(+84) 24 666 24320">(+84) 24 666 24320</a></p>
										<p><a href="mailto:contact@bluebottle.vn">contact@bluebottle.vn</a></p>
									</div>
									<Map
									  style="mapbox://styles/mapbox/streets-v8"
									  center={coods.HANOI}
									  zoom={[15]}
									  containerStyle={{
									    height: "250px",
									    width: "100%"
									  }}>
									    <Layer
									      type="symbol"
									      id="marker"
									      layout={{ "icon-image": "marker-15" }}>
									      <Feature coordinates={coods.HANOI}/>
									    </Layer>
									    <Popup
											  coordinates={coods.HANOI}
											  offset={{
											    'bottom': [0, -10]
											  }}>
											  <h6>Bluebottle Digital Viet Nam</h6>
												<p className="mb-0">3rd floor, VMT Building, Cau Giay District, Hanoi, Vietnam</p>
											</Popup>
									    <ZoomControl/>
									</Map>
									
								</Col>
								<Col xs={12} sm={12} md={6} className="custom-fadein">
									<ContactForm/>
								</Col>
							</Row>
							</div>
						</Container>	
					</TabPanel>
				<TabPanel className="tab1">
					<Container>
						<LogoWhite title="Contact Us"/>
						<div className="main">
							<Row>
								<Col xs={12} sm={12} md={6} className="custom-fadein">
									<div className="contact">
										<h2>Bluebottle Digital Australia</h2>
										<p>823/1 Queens Road, Melbourne, VIC 3004, Australia</p>
										<p><a href="tel:(+84) 24 666 24320">(+84) 24 666 24320</a></p>
										<p><a href="mailto:contact@bluebottle.vn">contact@bluebottle.vn</a></p>
									</div>
									<Map
									  style="mapbox://styles/mapbox/streets-v8"
									  center={coods.MELBOURNE}
									  zoom={[15]}
									  containerStyle={{
									    height: "250px",
									    width: "100%"
									  }}>
									    <Layer
									      type="symbol"
									      id="marker"
									      layout={{ "icon-image": "marker-15" }}>
									      <Feature coordinates={coods.MELBOURNE}/>
									    </Layer>
									    <Popup
											  coordinates={coods.MELBOURNE}
											  offset={{
											    'bottom': [0, -10]
											  }}>
											  <h6>Bluebottle Digital Australia</h6>
												<p className="mb-0">823/1 Queens Road, Melbourne, VIC 3004, Australia</p>
											</Popup>
									    <ZoomControl/>
									</Map>
								</Col>
								<Col xs={12} sm={12} md={6} className="custom-fadein">
									<ContactForm/>
								</Col>
							</Row>
						</div>
					</Container>	
				</TabPanel>
	
				<TabList>
        <Tab className="tabtb2 tabtitle"><span>Viet Nam</span></Tab>
        <Tab className="tabtb1 tabtitle"><span>Australia</span></Tab>
    	</TabList>
		</Tabs>
		
		</Styled>
  );
}

Contact.propTypes = {};

export default Contact;
