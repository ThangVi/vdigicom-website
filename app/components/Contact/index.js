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
	HANOI: [105.7971166, 21.0432193],
};

function Contact(props) {
  return (
  	<Styled className="tab">
			<Container>
				<LogoWhite title="Contact Us"/>
				<div className="main">
					<Row>
						<Col xs={12} sm={12} md={12} className="custom-fadein">
							<div className="contact">
								<Row>
									<Col xs={12} sm={12} md={12}>
										<h2>Công ty TNHH Mạng viễn thông số Việt Nam</h2>
									</Col>
									<Col xs={12} sm={12} md={4} className="text-center">
										<h3>Địa chỉ</h3>
										<p>134 Hoàng Sâm, Nghĩa Đô, Cầu Giấy, Hà Nội, Việt Nam</p>
									</Col>
									<Col xs={12} sm={12} md={4} className="text-center">
										<h3>Điện thoại</h3>
										<p><a href="tel:(+84) 24 3767 3162">(+84) 24 3767 3162</a></p>
									</Col>
									<Col xs={12} sm={12} md={4} className="text-center">
										<h3>Email</h3>
										<p><a href="mailto:vdigicom@gmail.com">vdigicom@gmail.com</a></p>
									</Col>
								</Row>
							</div>
							<Map
							  style="mapbox://styles/mapbox/streets-v8"
							  center={coods.HANOI}
							  zoom={[15]}
							  containerStyle={{
							    height: "350px",
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
									  <h6>Công ty TNHH Mạng viễn thông số Việt Nam</h6>
										<p className="mb-0">134 Hoàng Sâm, Nghĩa Đô, Cầu Giấy, Hà Nội, Việt Nam</p>
									</Popup>
							    <ZoomControl/>
							</Map>
						</Col>
					</Row>
				</div>
			</Container>			
		</Styled>
  );
}

Contact.propTypes = {};

export default Contact;
