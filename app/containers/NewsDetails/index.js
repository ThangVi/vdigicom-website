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
import News1 from 'images/news/1.jpg';
import News2 from 'images/news/2.jpg';
import News3 from 'images/news/3.jpg';
import News4 from 'images/news/4.jpg';

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

const newslist = [
  {
    id: 10,
    author: "QuyetLe",
    created_at: "2017-03-23T14:47:20.000Z",
    url: "bbbbbbbbbb",
    img: News1,
    publish_date: "2017-03-23T22:00:00.000Z",
    title: "Gói thầu công khai quy hoạch tỉnh Thanh Hóa",
    short_description: "Gói thầu công khai quy hoạch",
    description: "Căn cứ phương án công khai quy hoạch trên địa bàn tỉnh Thanh Hoá đã được Chủ tịch UBND tỉnh phê duyệt, Phần mềm Công khai quy hoạch đã chuyển đổi các dữ liệu về quy hoạch đang được lưu trữ dưới nhiều hình thức khác nhau như: bản giấy, các file: word, PDF, bản vẽ, ảnh…tại các địa phương, đơn vị trên địa bàn tỉnh sang định dạng chuẩn mà có thể xem, đọc, tải về… trên các hệ điều hành máy tính và điện thoại thông minh phổ biến hiện nay. Để làm được như vậy, Trung tâm Xúc tiến đầu tư, Thương mại và Du lịch đã tích cực phối hợp với các địa phương, đơn vị trong việc cung cấp tài liệu quy hoạch, cập nhật thông tin và số hoá để công khai kịp thời trên trang công  khai quy hoạch tỉnh Thanh Hóa.![Đến nay, Cổng thông tin quy hoạch tỉnh Thanh Hóa đã có trên 257 ngàn lượt truy cập, thường xuyên có trên 300 người truy cập cùng lúc](https://truyenhinhthanhhoa.vn/dataimages/201812/original/resize_images5474485_ck7.jpg)",
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
  }]

/* eslint-disable react/prefer-stateless-function */
export class NewsDetails extends React.PureComponent {
  constructor(props) { 
    super(props); 
    const { match } = this.props;  
  } 

  render() {
    const { match } = this.props;
    return (
      <NewsDetailsWrapper>
      {!isMobile && <Menu />}
      {isMobile && <MenuIsMobile/> } 
        <Container>        
          {newslist.map(news => ( 
            news.id == match.params.id && (
            <div className="news-title">
              <h1>{news.title}</h1>
               <p className="news-time">Post: { (new Date(news.publish_date)).toLocaleDateString() }</p>
               <ReactMarkdown
                source={news.description}
                escapeHtml={false}
              />
            </div>
         ) ))}
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
