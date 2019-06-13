/**
 *
 * JobDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Menu from 'containers/NavBar';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectJobDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styled from 'styled-components';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';
import LogoHeader from 'components/LogoHeader';
import ReactMarkdown from 'react-markdown'
import BGJOB from 'images/bg/bg_job.png';
import Styled from './Styled.js';
import { API } from '../../network';
import _ from 'lodash';
import Files from 'react-files';
import {media} from 'constants/theme';
import {isMobile} from 'react-device-detect';
import MenuIsMobile from 'containers/NavBarIsMobile';
import { showAlert } from 'containers/App/actions';
import messages from 'constants/messages';

const JobDetail = styled.div`
  background: rgb(14, 92, 186);
  ${media.phone`
      padding-top: 100px;
    `}
  
  .fbicon {
    color: #fff !important;
    border: 1px solid #fff !important;
    a {
      color: #fff !important;
    }
    ${media.phone`
      display: none;
    `}
  }
  .container {
    padding: 30px 0;
    ${media.phone`
      padding: 0px;
    `}
  }
 
  .jobs-container{
    background:url('${BGJOB}') no-repeat top center / cover;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 7px 7px 15px #0b399b;
    background-color: white;
    background-size: 100%;
    font-size: 100%;
    ${media.phone`
      margin: 0 15px;
      padding: 20px;
    `}
    h2 {
      text-align: center;
      text-transform: uppercase;
      color: rgb(14, 92, 186);
      font-weight: bold;
      margin-bottom: 40px;
      ${media.phone`
        font-size: 20px;
      `}
    }
   @media 
    (-webkit-min-pixel-ratio: 1.25), 
    (min-resolution: 192dpi) { 
      background:url('${BGJOB}') no-repeat top center / cover;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 7px 7px 15px #0b399b;
      background-color: white;
      background-size: 100%;
      font-size: 100%;
  }

`;
/* eslint-disable react/prefer-stateless-function */
export class JobDetailPage extends React.PureComponent {
    constructor(props) { 
    super(props); 
    const { match } = this.props;
    this.state = {
      jobsDetails: [],
      name: '',
      phone: '',
      email: '',
      file: null,
      disableSubmit: true,
      ref: 'candidate',
      field: 'attachments'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
    this.deleteCV = this.deleteCV.bind(this);
    if (match && match.params.friendly_url){
      API.getJobInfo(match.params.friendly_url)
      .then(resp => {
        this.setState({
          jobsDetails: resp.data[0]
        });
      });
    } 
  } 

   handleChange(files) {
    console.log(files)
    this.setState({
      file: files[0]
    });
  }

  deleteCV() {
    this.setState({
      file: null
    });
  }

  validateSubmit(state) {
    const { name, phone, email } = state;
    this.setState({
      disableSubmit: _.isEmpty(name) || _.isEmpty(phone) || _.isEmpty(email),
    });
  }

   onInputChange = e => {
    this.setState({ [e.target.id]: e.target.value }, () => {
      this.validateSubmit(this.state);
    });
  };

  resetForm() {
    this.setState({
      name: '',
      phone: '',
      email: '',
      file: null,
      disableSubmit: true
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { disableSubmit } = this.state;
    if (!disableSubmit){
      const { name, email, phone, file } = this.state;
      const postData = { name, email, phone }; 
      API.sendCV(postData)
        .then(resp=>{
          const { file, ref, field } = this.state;
          const postAttachment = { 
            "files": file, 
            "refId": resp.id, 
            "ref": ref, 
            "field": field 
          };
          API.submitCV(postAttachment);
          
          })
        .then(resp=>{
          this.props.showAlertMessage({ type: 'success', message: messages.sendCVSuccess });
          this.resetForm();
        }, (resp)=>{
          this.props.showAlertMessage({ type: 'error', message: messages.sendCVFail });
        });
    }
  };



  render() {
    const { jobsDetails, file } = this.state;
    const { match } = this.props;
    return (
      <JobDetail>
      {!isMobile && <Menu />}
      {isMobile && <MenuIsMobile/> } 
        <Container>
        <div className="jobs-container">
         {jobsDetails && 
          <div className="recruitment-content" key={jobsDetails.id}>
            <div className="block-info">
              <h2>{jobsDetails.title}</h2>
              <ReactMarkdown
                source={jobsDetails.description}
                escapeHtml={false}
              />
            </div>    
          </div>  
        }
        <Row>
         <Styled>
         <div className="contact-form">
          <Form 
            onSubmit={ this.handleSubmit }
            noValidate
            >
            <h2>Submit Your Application Now</h2>
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    value={this.state.name}
                    onChange={this.onInputChange}
                    required
                  />
                 
                </FormGroup>
                </Col>
              </Row>
               <Row>
              <Col xs={12}>
                <FormGroup>
                  <Input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    value={this.state.email}
                    onChange={this.onInputChange}
                    required
                  />
                  
                </FormGroup>
                </Col>
              </Row>
               <Row>
                <Col xs={12}>
                  <FormGroup>
                    <Input 
                      type="text" 
                      name="phone" 
                      id="phone" 
                      placeholder="Phone" 
                      value={this.state.phone}
                      onChange={this.onInputChange}
                      required
                    />
                   
                  </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <div className="attach-file">
                     <Files
                        className='files-dropzone'
                        onChange={this.handleChange}
                        onError={this.onFilesError}
                        accepts={['image/*', 'video/mp4', 'audio/*', '.pdf']}
                        maxFiles={1}
                        maxFileSize={10000000}
                        minFileSize={0}
                        clickable
                      >
                        ATTACH YOUR CV
                      </Files>
                      {file && 
                          <div className="file-name">{file.name}<span onClick={this.deleteCV}>X</span></div>
                      }
                      </div>
                  </Col>
                  <Col sm={6}>
                    <div className="form-submit">
                      <input className="btn btn-submit" type="submit" value="Send" disabled={this.state.disableSubmit}/>
                    </div>
                  </Col>
                </Row>
              </Form>
              </div>
              </Styled>
            </Row>
          </div>
         </Container>
      </JobDetail>
    );

  }
}

JobDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  jobdetailpage: makeSelectJobDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    showAlertMessage: params => {
      dispatch(showAlert(params));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'jobDetailPage', reducer });
const withSaga = injectSaga({ key: 'jobDetailPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(JobDetailPage);
