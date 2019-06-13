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
import { fallDown as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from 'images/logo/logo-black.png';
/* eslint-disable react/prefer-stateless-function */ 

export class NavBar extends React.PureComponent {
   constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      prevScrollpos: window.pageYOffset,
      visible: false
    };
  }
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos < currentScrollPos;

    this.setState({
      visible
    });
  };
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
      hidden: false
    });
  }

  render() {
    const { navigation, menuOpen } = this.props;
    const { hidden } = this.state;
    return (
      <Styled>
        <div>
          <Navbar color="faded" light hidden={hidden} className={("navbar", {
          "navbar--hidden": !this.state.visible
        })}>
            <NavbarBrand href="/" className="mr-auto">
              <div id="Logo">
                <img src={Logo} />  
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar id="myMenu">
                <NavItem data-menuanchor="home">
                  <NavLink href="/#home"  onClick={this.toggleNavbar}>Home</NavLink>
                </NavItem>
                <NavItem data-menuanchor="about-us">
                  <NavLink href="/#about-us" onClick={this.toggleNavbar}>About Us</NavLink>
                </NavItem>
                <NavItem data-menuanchor="services">
                  <NavLink href="/#services" onClick={this.toggleNavbar}>Our Services</NavLink>
                </NavItem>
                <NavItem data-menuanchor="members">
                  <NavLink href="/#members" onClick={this.toggleNavbar}>Our Members</NavLink>
                </NavItem>
                <NavItem data-menuanchor="join-us">
                  <NavLink href="/#join-us" onClick={this.toggleNavbar}>Join Us</NavLink>
                </NavItem>
                <NavItem data-menuanchor="news">
                  <NavLink href="/#news" onClick={this.toggleNavbar}>News</NavLink>
                </NavItem>
                <NavItem data-menuanchor="partners">
                  <NavLink href="/#partners" onClick={this.toggleNavbar}>Partners</NavLink>
                </NavItem>
                <NavItem data-menuanchor="contact-us">
                  <NavLink href="/#contact-us" onClick={this.toggleNavbar}>Contact Us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
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
