/**
 *
 * LogoHeader
 *
 */

import React from 'react';
import Styled from './Styled.js';
import Logo from 'images/logo/logo.png';
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos'; 
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function LogoHeader(props) {

  return (
  	<Styled className="header">
			<a id="Logo" href="/">
	     	<img src={Logo} />  
		  </a>
		  <div className="titleHeader">
			    <p>{props.title}</p>
			  </div>
    </Styled> 
  );
}

LogoHeader.propTypes = {};

export default LogoHeader;