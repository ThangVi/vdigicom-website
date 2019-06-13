/**
 *
 * NewsDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNewsDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import Menu from 'containers/NavBar';
import AOS from 'aos'; 
import { Helmet } from 'react-helmet';
import ReactFullpage from '@fullpage/react-fullpage';
import {Container } from 'reactstrap';
import LogoHeader from 'components/LogoHeader';
import ReactMarkdown from 'react-markdown'
import Moregray from 'images/icon/moregray.png';
import { API } from '../../network';
import {isMobile} from 'react-device-detect';
import MenuIsMobile from 'containers/NavBarIsMobile';
import {media} from 'constants/theme';

const NewsDetailsWrapper = styled.div`
.container {
  padding: 30px 0;
  ${media.phone`
    padding: 100px 15px 30px;
  `}
  p, h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0;
  }
  code {
    padding: 10px 30px;
    width: 80%;
    background: #1d1e22;
    border-radius: 6px;
    color: #fff;
    display: block;
    font-size: 12px;
    margin-bottom: 10px;
    a{
     color: #c5d5e8;
    }
  }
}
.fbicon {
    color: #999999 !important;
    border: 1px solid #999999 !important;
    a {
      color: #999999 !important;
    }
  }
  .bm-burger-button {
    span {
      background:url('${Moregray}') 0% 0% / 11% no-repeat !important;
    }
  }

`;

/* eslint-disable react/prefer-stateless-function */
export class NewsDetails extends React.PureComponent {
  constructor(props) { 
    super(props); 
    const { match } = this.props;
    if (match && match.params.friendly_url){
      this.state = {
        newsDetails: [],
      };
    }    
    API.getNewsInfo(match.params.friendly_url)
      .then(resp => {
        this.setState({
          newsDetails: resp.data[0]
        });
      });
  } 

  render() {
     const { newsDetails } = this.state;
     const { match } = this.props;
    return (
      <NewsDetailsWrapper>
      {!isMobile && <Menu />}
      {isMobile && <MenuIsMobile/> } 
        <Container>        
           {newsDetails && 
            <div className="news-title">
              <h1>{newsDetails.title}</h1>
               <p className="news-time">Post: { (new Date(newsDetails.publish_date)).toLocaleDateString() }</p>
               <ReactMarkdown
                source={newsDetails.description}
                escapeHtml={false}
              />
            </div>
          }
         </Container>
      </NewsDetailsWrapper>
    );
  }
}

NewsDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newsdetails: makeSelectNewsDetails(),
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

const withReducer = injectReducer({ key: 'newsDetails', reducer });
const withSaga = injectSaga({ key: 'newsDetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewsDetails);
