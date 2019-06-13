/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import AOS from 'aos'; 

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import NavBar from '../NavBar';
import LogoHeader from 'components/LogoHeader';
import ServiceInfo from 'components/ServiceInfo';
// import Recruitment from 'components/Recruitment';
import TabPeople from 'components/TabPeople';
// import News from 'components/News';
import About from 'components/About';
import News from 'containers/NewsPage';
import JobPage from 'containers/JobPage';
import Home from 'components/Home';
import Contact from 'components/Contact';
import Portfolio from 'components/Portfolio';
import reducer from './reducer';
import saga from './saga';
import ReactFullpage from '@fullpage/react-fullpage';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import uc from 'images/bg/uc.jpg';
import Img from 'images/test/1.jpg';
import Img2 from 'images/test/2.jpg';
import Img3 from 'images/test/3.jpg';
import Menu from 'containers/NavBar';
import MenuIsMobile from 'containers/NavBarIsMobile';
import {isMobile} from 'react-device-detect';
import { makeSelectJobsList } from './selectors';
import { API } from '../../network';

const fullPageOptions = {
  anchors: ['home','about-us','services','members','join-us','news','partners','contact-us'],
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  navigation: true,
  navigationPosition: 'left',
  responsiveWidth: 1025,
  scrollOverflow: false,
  // responsiveHeight: 600,
  sectionsColor: ['#0e5cba', '#FFF', '#fff', '#fff', '#0e5cba', '#fff','#fff','#fff'],
};
const fullPageOptions2 = {
  anchors: ['home','about-us','services','members','join-us','news','partners','contact-us'],
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  navigation: true,
  navigationPosition: 'left',
  responsiveWidth: 1025,
  scrollOverflow: false,
  // responsiveHeight: 600,
  sectionsColor: ['#0e5cba', '#FFF', '#fff', '#fff', '#0e5cba', '#fff','#fff','#fff'],
  menu: '#myMenu',
};

const pageTitle = {
  'home': 'BLUEBOTTLE VIETNAM - Home Page',
  'about-us': 'BLUEBOTTLE VIETNAM - About Us',
  'services': 'BLUEBOTTLE VIETNAM - Our Services',
  'members': 'BLUEBOTTLE VIETNAM - Our Members',
  'join-us': 'BLUEBOTTLE VIETNAM - Join Us',
  'news': 'BLUEBOTTLE VIETNAM - News',
  'partners': 'BLUEBOTTLE VIETNAM - Partners',
  'contact-us': 'BLUEBOTTLE VIETNAM - Contact us',
};


export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) { 
    super(props); 
    AOS.init(); 
    this.state = {
      modal: false,
      isOpen: [],
      toggle: false,
      openNews: [],
      menuOpen: false,
      currentPage: 0,
      jobsData: [],
      newsData: []
    };
    this.popup = this.popup.bind(this);
    this.toggle = this.toggle.bind(this);
  } 

  popup(id) {
    this.setState({
      isOpen: {
        [id]: true
      },
      modal: !this.state.isOpen[id]
    });
  }

  toggle(id) {
    this.setState({
      openNews: {
        [id]: true
      },
      toggle: !this.state.openNews[id]
    });
  }

  navigation = fullpageApi => {
    return {
      moveTo: (index) => {
        fullpageApi.moveTo(index);
      }
    };
  }
  onLeave(origin, destination, direction) {
    var alignTop = destination.index*100+'vh';
    var top=destination.index*100+50+'vh';
    $('.menu').css('top', alignTop);
    $('#fp-nav').css('top', top);
    $('.bm-item-list a').click(function(){
        menuOpen: false
    });
    this.setState({
      pageTitle: pageTitle[destination.anchor],
      currentPage: destination.index
    },()=> {
      if (this.state.currentPage === 4) {
        API.getJobsList()
        .then(resp => {
          this.setState({
            jobsData: resp
          });
        });
      }
      else if(this.state.currentPage === 5) {
        API.getNewsList()
        .then(resp => {
          this.setState({
            newsData: resp
          });
        });
      }
    });
  }

  afterLoad () {
    if ($(window).width() > 320) {
      $('.fp-section.active [data-aos]').each(function () {
        $(this).addClass("aos-animate")
      });
    }
      //$('.overlay-bg').hide();
  }

  render() {
    const { currentPage, newsData, jobsData } = this.state;
    const { match } = this.props;
    return (
      isMobile ?
        <div>
          <MenuIsMobile />
          <Helmet>
            <title>{this.state.pageTitle || 'BLUEBOTTLE VIETNAM - Home'}</title>
          </Helmet>
          <ReactFullpage
            {...fullPageOptions2}
            onLeave={this.onLeave.bind(this)}
            afterLoad={this.afterLoad.bind(this)}
            render={({ state, fullpageApi }) => {
              return (
                <div>         
                  <ReactFullpage.Wrapper>
                    <div className="section sectionhome" id="home">
                      <Home page={currentPage} />
                      <div id="fp-nav" className="fp-left"><ul></ul></div>     
                    </div>
                    <div className="section fp-auto-height-responsive" id="about-us" >
                      <About/>
                    </div>
                    <div className="section fp-auto-height-responsive" id="services" >
                      <ServiceInfo />
                    </div>
                    <div className="section fp-auto-height-responsive" id="members" >
                      <TabPeople /> 
                    </div>
                    <div className="section fp-auto-height-responsive" id="join-us">
                      <JobPage match={match} page={currentPage} jobs={jobsData}/>
                    </div>
                    <div className="section fp-auto-height-responsive" id="news">
                      <News match={match} page={currentPage} post={newsData}/>
                    </div>
                    <div className="section fp-auto-height-responsive" id="partners">
                      <Portfolio />
                    </div>
                     <div className="section fp-auto-height-responsive" id="contact-us" >
                      <Contact/>
                    </div>
                  </ReactFullpage.Wrapper>
                </div>
              );
            }}
          />
        </div>  
      : 
      <div>
        <Helmet>
          <title>{this.state.pageTitle || 'BLUEBOTTLE VIETNAM - Home'}</title>
        </Helmet>
        <ReactFullpage
          {...fullPageOptions}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div>         
                <ReactFullpage.Wrapper>
                  <div className="menu">
                    <Menu navigation={this.navigation(fullpageApi)} menuOpen={this.state.menuOpen}/>
                  </div>
                 
                  <div className="section sectionhome">
                    <Home page={currentPage} navigation={this.navigation(fullpageApi)}/>
                    <div id="fp-nav" className="fp-left"><ul></ul></div>     
                  </div>
                  <div className="section" id="aboutpage" navigation={this.navigation(fullpageApi)}>
                    <About/>
                  </div>
                  <div className="section" id="servicepage" navigation={this.navigation(fullpageApi)}>
                    <ServiceInfo />
                  </div>
                  <div className="section" id="peoplepage" navigation={this.navigation(fullpageApi)}>
                    <TabPeople /> 
                  </div>
                  <div className="section" id="jobpage">
                    <JobPage match={match} page={currentPage} navigation={this.navigation(fullpageApi)} jobs={jobsData}/>
                  </div>
                  <div className="section" id="newspage">
                    <News match={match} page={currentPage} navigation={this.navigation(fullpageApi)} post={newsData}/>
                  </div>
                  <div className="section" id="portfoliopage">
                    <Portfolio  navigation={this.navigation(fullpageApi)}/>
                  </div>
                   <div className="section" id="contactpage" navigation={this.navigation(fullpageApi)}>
                    <Contact/>
                  </div>
                </ReactFullpage.Wrapper>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
