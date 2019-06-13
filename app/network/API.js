import axios from 'axios';
import Fingerprint2 from 'fingerprintjs2';
import md5 from 'md5';

import * as AccessTokenInterceptor from './interceptors/accessToken';
import * as UnauthorizeInterceptor from './interceptors/unauthorize';
import { AppConfig, Env, Endpoints } from '../constants';

const getInstance = env => {
  const instance = axios.create({
    baseURL: AppConfig.API_BASE_URL[env],
    timeout: 30000,
  });

  instance.interceptors.response.use(
    UnauthorizeInterceptor.onFullfilled,
    UnauthorizeInterceptor.onRejected,
  );

  // instance.interceptors.request.use(
  //   LogInterceptor.requestLog,
  //   LogInterceptor.requestError,
  // );

  // instance.interceptors.response.use(
  //   LogInterceptor.responseLog,
  //   LogInterceptor.responseError,
  // );

  instance.interceptors.request.use(
    AccessTokenInterceptor.addAccessToken,
    AccessTokenInterceptor.onRejected,
  );
  return instance;
};

const API = {
  env: Env.bluebottle,
  instance: getInstance(Env.bluebottle),
};

/**
 * Auth API
 */
API.getDeviceId = () =>
  new Promise(resolve => {
    new Fingerprint2().get(result => {
      resolve(result);
    });
  });

API.login = (loginInfo, deviceId) => {
  const headers = {
    'X-Auth-Username': loginInfo.username,
    'X-Auth-Password': md5(loginInfo.password),
  };
  const data = {
    platformType: AppConfig.platformType,
    platformVersion: AppConfig.platformVersion,
    deviceToken: deviceId,
    deviceId,
  };
  return API.instance
    .post(Endpoints.LOGIN_URL, data, {
      headers: { ...headers },
    })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

API.sendContact = postData =>
  API.instance
    .post(Endpoints.CONTACT_URL, postData)
    .then(response => response.data.responseData)
    .catch(error => {
      throw error;
    });
/**
 * News API
 */
API.getNewsList = () =>
  API.instance
    .get(`${Endpoints.NEWS_LIST_URL}?_sort=publish_date:DESC`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

API.getNewsInfo = (friendly_url) =>
  API.instance
    .get(`${Endpoints.NEWS_LIST_URL}?friendly_url=${friendly_url}`)
    .then(response => response)
    .catch(error => {
      throw error;
    });
/**
 * JOBs API
 */
API.getJobsList = () =>
  API.instance
    .get(`${Endpoints.JOBS_LIST_URL}?_sort=publish_date:DESC`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });

API.getJobInfo = (friendly_url) =>
  API.instance
    .get(`${Endpoints.JOBS_LIST_URL}?friendly_url=${friendly_url}`)
    .then(response => response)
    .catch(error => {
      throw error;
    });

/**
 * News API
 */
API.sendCV = postData =>
  API.instance
    .post(Endpoints.CANDIDATES_URL, postData)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });


API.submitCV = request => {
  let formData = new FormData();
  formData.append('files', request.files);   //append the values with key, value pair
  formData.append('refId', request.refId);
  formData.append('ref', request.ref);
  formData.append('field', request.field);

  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
  }
  API.instance
    .post(Endpoints.UPLOAD_URL, formData, config)
    .then(response => response)
    .catch(error => {
      throw error;
    });
};



export default API;
