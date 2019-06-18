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
import News1 from 'images/news/1.jpg';
import News2 from 'images/news/2.jpg';
import News3 from 'images/news/3.jpg';
import News4 from 'images/news/4.jpg';
import Menu from 'containers/NavBar';
import MenuIsMobile from 'containers/NavBarIsMobile';
import {isMobile} from 'react-device-detect';
import { makeSelectJobsList } from './selectors';
import { API } from '../../network';

const news = [
  {
    id: 10,
    author: "QuyetLe",
    created_at: "2017-03-23T14:47:20.000Z",
    url: "bbbbbbbbbb",
    img: News1,
    publish_date: "2017-03-23T22:00:00.000Z",
    title: "Gói thầu công khai quy hoạch tỉnh Thanh Hóa",
    short_description: "Gói thầu công khai quy hoạch",
    description: "",
    updated_at: "2019-05-24T07:09:48.000Z"
  },
  {
    id: 11,
    author: "QuyetLe",
    created_at: "2017-05-23T14:47:20.000Z",
    url: "aaaaaaa",
    img: News2,
    publish_date: "2017-05-23T22:00:00.000Z",
    title: "Gói thầu hội nghị truyền hình PVI",
    short_description: "",
    description: "",
    updated_at: "2019-05-24T07:09:48.000Z"
  },
  {
    id: 12,
    author: "QuyetLe",
    created_at: "2017-05-23T14:47:20.000Z",
    url: "aaaaaaa",
    img: News3,
    publish_date: "2017-05-23T22:00:00.000Z",
    title: "Gói thầu hội nghị truyền hình VNPT",
    short_description: "",
    description: "",
    updated_at: "2019-05-24T07:09:48.000Z"
  },
  {
    id: 13,
    author: "QuyetLe",
    created_at: "2017-05-23T14:47:20.000Z",
    url: "aaaaaaa",
    img: News4,
    publish_date: "2017-05-23T22:00:00.000Z",
    title: "Gói thầu hội nghị truyền hình Ủy Ban Dân Tộc",
    short_description: "",
    description: "",
    updated_at: "2019-05-24T07:09:48.000Z"
  }
]

const jobs = [
  {
    category: "Chuyên viên dự án",
    created_at: "2019-05-03T10:20:16.000Z",
    description: "Hồ sơ thầu",
    friendly_url: null,
    id: 1,
    publish_date: "2019-05-14T10:20:15.000Z",
    short_description: "Hồ sơ thầu",
    title: "Tham gia cùng chúng tôi",
    updated_at: "2019-05-14T03:55:39.000Z"
  },
  {
    category: "Kế toán",
    created_at: "2019-05-03T10:20:16.000Z",
    description: "Kế toán tổng hợp",
    friendly_url: null,
    id: 2,
    publish_date: "2019-05-14T10:20:15.000Z",
    short_description: "Kế toán tổng hợp",
    title: "Tham gia cùng chúng tôi",
    updated_at: "2019-05-14T03:55:39.000Z"
  }
]

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
            <title>{this.state.pageTitle || 'Vdigicom - Home'}</title>
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
                      <JobPage match={match} page={currentPage} jobs={jobs}/>
                    </div>
                    <div className="section fp-auto-height-responsive" id="news">
                      <News match={match} page={currentPage} post={news}/>
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
                    <JobPage match={match} page={currentPage} navigation={this.navigation(fullpageApi)} jobs={jobs}/>
                  </div>
                  <div className="section" id="newspage">
                    <News match={match} page={currentPage} navigation={this.navigation(fullpageApi)} post={news}/>
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
