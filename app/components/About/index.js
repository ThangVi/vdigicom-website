/**
 *
 * About
 *
 */

import React from 'react';
import Styled from './Styled.js';
import { Container, Row, Col } from 'reactstrap';
import LogoHeader from 'components/LogoHeader';
import AOS from 'aos'; 

function About() {
  return (
		<Styled>
	    <Container>
		    <LogoHeader title="About Us"/>
	      <div className="main">
	        <div className="about">
	          <div className="Block1" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
	          	<h2>Bluebottle Digital is the new name for an old hat.</h2>
	          	<p>Bluebottle Digital has been around since the start of the mobile revolution, back when Nokia was king, iPhone’s were jailbroken and Android just a twinkle in Sergey and Larrys eye.</p>
	          	<p>In that time, we have witnessed first hand the monumental shift to a mobile first society where Blue Bottle Digital has built applications for businesses of all shapes and sizes, won numerous awards and established a unique business model that allows its clients to get the trifecta of quality, speed and cost.</p>
	          </div>
	          <div className="Block2" data-aos="fade-down" data-aos-duration="700" data-aos-delay="300">
	            <p>Whether is a simple front-end website, web app or native iOS / Android App or a full enterprise grade digital platform, we work hand in hand with our clients to ensure the best possible digital solutions. </p>
				<p>We are flexible in our approach, being able to work on a project and 'build to brief' or simply provide dedicated resources under an 'in-sourcing' model. So if you have a defined idea in mind or just need some additional resources to help progress your digital development , then please get in contact with us here.</p>
	          </div>
	        </div> 
	      </div> 
	    </Container>
	  </Styled>
  );
}

About.propTypes = {};

export default About;
