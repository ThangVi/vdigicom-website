/**
 *
 * TabPeople
 *
 */

import React from 'react';
import { TabContent, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Styled from './Styled.js';
import LogoHeader from 'components/LogoHeader';
import classnames from 'classnames';
// import { Scrollbars } from 'react-custom-scrollbars';

import Thanh from 'images/team/thanh.jpg';
import LinhK from 'images/team/linhk.jpg';
import Hieu from 'images/team/hieu.jpg';
import Thu from 'images/team/thu.jpg';
import Dat from 'images/team/dat.jpg';
import Trung from 'images/team/trung.jpg';
import Hai from 'images/team/hai.jpg';
import Khoi from 'images/team/khoi.jpg';
import HienTr from 'images/team/hientr.jpg';
import Minh from 'images/team/minh.jpg';
import Linh from 'images/team/linh.jpg';
import Nhat from 'images/team/nhat.jpg';
import HienNg from 'images/team/hienng.jpg';
import Thang from 'images/team/thang.jpg';
import Luong from 'images/team/luong.jpg';
import Dung from 'images/team/dung.jpg';
import AnhTuan from 'images/team/tuananh.jpg';
import TuanHa from 'images/team/tuan.jpg';
import Hung from 'images/team/hung.jpg';
import Duc from 'images/team/duc.jpg';
import Viet from 'images/team/viet.jpg';
import Xoa from 'images/team/xoa.jpg';
import Phong from 'images/team/phong.jpg';
import Thoa from 'images/team/default.jpg';
import Hoa from 'images/team/hoa.jpg';
import Xuan from 'images/team/Xuan.jpg';
import Thao from 'images/team/Thao.jpg';
import Tien from 'images/team/tien.jpg';
import Tran from 'images/team/default.jpg';
import Oanh from 'images/team/oanh.jpg';
import './style.scss';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';


function TabPeople(props) {
  const ourMembers = 
  [
    {
      id: 1,
      img: Thanh,
      name: "Thanh Tran",
      position: "General Manager"
    },
    {
      id: 2,
      img: LinhK,
      name: "Linh K Nguyen",
      position: "Delivery Manager"
    },
    {
      id: 3,
      img: Hieu,
      name: "Hieu Truong",
      position: "Technical Leader"
    },
    {
      id: 4,
      img: Thu,
      name: "Thu Vu",
      position: "QA Team Leader"
    },
    {
      id: 5,
      img: Dat,
      name: "Dat Nguyen",
      position: "Frontend Team Leader"
    },
    {
      id: 6,
      img: Trung,
      name: "Trung Tran",
      position: "Mobile Team Leader"
    },
    {
      id: 7,
      img: TuanHa,
      name: "Tuan Ha",
      position: "Backend Developer"
    },
    {
      id: 8,
      img: Xoa,
      name: "Xoa Tran",
      position: "QA"
    },
    {
      id: 9,
      img: HienTr,
      name: "Hien Tran",
      position: "Frontend Developer"
    },
    {
      id: 10,
      img: Hai,
      name: "Hai Bui",
      position: "Mobile Developer"
    }
  ]

  return (
    <div>
      <Container>
      <LogoHeader title="Our Members"/>
      <div className="main">
      <div className="content" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
        <Styled>
          {ourMembers.map(human => (
            <div className="block-info" key={human.id}>
              <div className="img">
                <div style={{backgroundImage: `url(${human.img})`}}></div>
              </div>
              <div className="info">
                <h2>{human.name}</h2>
                <p>{human.position}</p>
              </div>
            </div>
          ))}
        </Styled>
      </div>
      </div>
      </Container>
    </div>
  );
}

TabPeople.propTypes = {};

export default TabPeople;
