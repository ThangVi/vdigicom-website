/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SystemAlert from 'components/SystemAlert';
import Footer from 'components/Footer';
import NewsDetails from 'containers/NewsDetails/Loadable';
import JobDetailPage from 'containers/JobDetailPage/Loadable';
import Menu from 'containers/NavBar';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectAlert, makeSelectLocation } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Styled from'./Styled.js';
import About from 'components/About';
import NavBar from 'containers/NavBar';


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;


export class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.navigation = this.navigation.bind(this);
  }
 navigation = fullpageApi => {
    return {
      moveTo: (index) => {
        fullpageApi.moveTo(index);
      }
    };
  }
  render() {
    const { alerts, location } = this.props;
    const { navigation, fullpageApi } = this.props;
    const alertsProps = {
      alerts,
    };
    return (
      <ThemeProvider theme={{ mode: 'default' }}>
        <AppWrapper>
          <SystemAlert {...alertsProps} />
          <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/news/:id" component={NewsDetails} />
            <Route path="/job/:id" component={JobDetailPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
          </div>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  alerts: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  alerts: makeSelectAlert(),
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'app', saga });
const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
