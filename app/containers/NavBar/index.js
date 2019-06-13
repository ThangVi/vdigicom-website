/**
 *
 * NavBar
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Container,
  Row,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,Collapse,
  DropdownItem, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand 
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectAccount } from 'containers/App/selectors';
import { navBarBackground } from 'constants/theme';
import reducer from './reducer';
import saga from './saga';
import Styled from'./Styled.js';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'images/logo/logo.png';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
/* eslint-disable react/prefer-stateless-function */
export class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      menuOpen: false
    };
  }

  toggle() {
    if (isMobile){
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }

  render() {
    const { navigation, menuOpen } = this.props;
    return (
      <Styled>
        <Menu
          isOpen={menuOpen}
        >
          <a id="Logo" href="/">
            <img src={Logo} />  
          </a>
          <a id="home-page" className="menu-item" href="/#home" onClick={() => { $('.section ').animate({duration:5000}); navigation.moveTo(1)}} >Home</a>
          <a id="about" className="menu-item" href="/#about-us" onClick={() => {navigation.moveTo(2)}} >About Us</a>
          <a id="service" className="menu-item" href="/#services" onClick={() => {navigation.moveTo(3)}} >Our Services</a>
          <a id="team" className="menu-item" href="/#members" onClick={() => {navigation.moveTo(4)}} >Our Members</a>
          <a id="job" className="menu-item" href="/#join-us" onClick={() => {navigation.moveTo(5)}} >Join Us</a>
          <a id="news-page" className="menu-item" href="/#news" onClick={() => {navigation.moveTo(6)}} >News</a>
          <a id="partner" className="menu-item" href="/#partners" onClick={() => {navigation.moveTo(7)}} >Partners</a>
          <a id="contact" className="menu-item" href="/#contact-us" onClick={() => {navigation.moveTo(8)}} >Contact Us</a>
          <div className="footer">
            <ul className="social-networking-list">
              <li>
                <a href="https://www.facebook.com/prismhorse" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF}/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/prism_horse" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
              </li>
              <li>
                <a href="https://www.instagram.com/prism_horse" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC-seV-zqNrz-UVCp3DPpjkw" target="_blank"><FontAwesomeIcon icon={faYoutube}/></a>
              </li>
            </ul>
            <p>© Bluebottle Digital 2018</p>
          </div>

        </Menu>
        <p className="fbicon">
        <a href="https://twitter.com/prism_horse" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></p>
      </Styled>
    );
  }
}

NavBar.propTypes = {
  currentUser: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectAccount(),
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

const withReducer = injectReducer({ key: 'navBar', reducer });
const withSaga = injectSaga({ key: 'navBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavBar);
