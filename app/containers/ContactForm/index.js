/**
 *
 * ContactForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContactForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Recaptcha from 'react-grecaptcha';
import Styled from './Styled.js';
import _ from 'lodash';
import { sendContact } from './actions';
/* eslint-disable react/prefer-stateless-function */
export class ContactForm extends React.PureComponent {
   constructor(props) {
    super(props);
    this.state={
      name: '',
      phone: '',
      email: '',
      enquiry: 'bluebottle-contact',
      message: '',
      domain: 'bluebottle.vn',
      captcha: '',
      captchaValid: false,
      valid: {},
      disableSubmit: true,
    }
    this.validateSubmit = this.validateSubmit.bind(this);
  }

  onInputChange = e => {
    const { valid } = this.state;
    valid[e.target.id] = !_.isEmpty(e.target.value);
    this.setState({ 
        [e.target.id]: e.target.value,
        valid
      }, () => {
      this.validateSubmit(this.state);
    });
  };

  onEmailChange = e => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { valid } = this.state;
    valid.email = emailRex.test(e.target.value);
    this.setState({
      email: e.target.value, 
      valid
    }, () => {
      this.validateSubmit(this.state);
    });
  }

  onPhoneChange = e => {
    const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const { valid } = this.state;
    valid.phone = phoneRegex.test(e.target.value);
    this.setState({
      phone: e.target.value, 
      valid
    }, () => {
      this.validateSubmit(this.state);
    });
  }

  validateSubmit(state) {
    const { valid, captchaValid } = state;
    this.setState({
      disableSubmit: !valid.name || !valid.email || !valid.phone || !valid.message || !captchaValid,
    });
  }

  verifyCallback = (response) => {
    this.setState({
      captcha: response,
      captchaValid: true,
    }, () => {
      this.validateSubmit(this.state);
    });
  }

  expiredCallback = () => {
    this.setState({
      captcha: '',
      captchaValid: false,
    }, () => {
      this.validateSubmit(this.state);
    });
  }

  resetForm(){
    this.setState({
      name: '',
      phone: '',
      email: '',
      enquiry: 'bluebottle-contact',
      message: '',
      domain: 'bluebottle.vn',
      captcha: '',
      captchaValid: false,
      valid: {},
      disableSubmit: true,
    })
     window.grecaptcha.reset();
  }

  handleValidSubmit = e => {
    e.preventDefault();
    const { disableSubmit } = this.state;
    if (!disableSubmit){
      const { name, email, enquiry, phone, message, domain, captcha } = this.state;
      const postData = { name, email, enquiry, phone, message, domain, captcha }; 
      this.props.onSubmitForm(postData);
      this.resetForm();
    }
  };
  render() {
    const { valid } = this.state;
    return (
      <div>
        <Styled>
            <div className="contact-form content">
              <Container>
                <Form 
                  onSubmit={ this.handleValidSubmit }
                  noValidate
                >
                  <Row>
                    <Col sm={6} xs={12} >
                      <FormGroup>
                        <Input 
                          type="text" 
                          name="name" 
                          id="name" 
                          placeholder="Name" 
                          value={this.state.name}
                          onChange={this.onInputChange}
                          invalid={!valid.name}
                          required
                        />
                        { valid.name !== undefined && <FormFeedback invalid>This field is required</FormFeedback> }
                      </FormGroup>
                    </Col>
                    <Col  sm={6} xs={12}>
                       <FormGroup>
                        <Input
                          type="text" 
                          name="phone" 
                          id="phone" 
                          placeholder="Phone" 
                          value={this.state.phone}
                          onChange={this.onPhoneChange}
                          invalid={!valid.phone}
                          required
                        />
                        { valid.phone !== undefined && <FormFeedback invalid>Invalid Phone Number</FormFeedback> }
                      </FormGroup>
                    </Col>
                    <Col sm={12} xs={12} >
                      <FormGroup>
                        <Input 
                          type="email" 
                          name="email" 
                          id="email" 
                          placeholder="Email" 
                          value={this.state.email}
                          onChange={this.onEmailChange}
                          invalid={!valid.email}
                          required
                        />
                        { valid.email !== undefined && <FormFeedback invalid>Invalid Email</FormFeedback> }
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} xs={12} >
                      <FormGroup>
                        <Input 
                          type="textarea" 
                          name="message" 
                          id="message" 
                          placeholder="Message" 
                          value={this.state.message}
                          onChange={this.onInputChange}
                          invalid={!valid.message}
                          required
                        />
                        { valid.message !== undefined && <FormFeedback invalid>This field is required</FormFeedback> }
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="swap-block col-sm-12 col-xs-12"> 
                      <Row>
                        <Col lg={4} md={6} sm={8} xs={12} className="second-div">
                          <Recaptcha 
                            sitekey="6LeN86EUAAAAAEX0or-fLm-5bUT4pnTcmICPbbk1" 
                            callback={this.verifyCallback} 
                            expiredCallback={this.expiredCallback} 
                            data-theme="light"
                          />
                        </Col>
                        <Col>
                          <div className="form-submit">
                            <input className="btn btn-submit" type="submit" value="Send" disabled={this.state.disableSubmit}/>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                </Form>
              </Container>
            </div>
        </Styled>
      </div>
    );
  }
}

ContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contactform: makeSelectContactForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmitForm: (values) => {
      dispatch(sendContact(values));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'contactForm', reducer });
const withSaga = injectSaga({ key: 'contactForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactForm);
