import styled from 'styled-components';
import More from 'images/icon/more.png';
import {media} from 'constants/theme';
const Styled = styled.div `
/* Position and sizing of burger button */
.bm-burger-button {
  position: absolute;
  width: 100px;
  height: 33px;
  top: 50px;
  ${media.phone`
    right: 15px;
    top: 20px;
    width: 86px;
    height: 28px;
  `}
  span {
    background:url('${More}') 0% 0% / 11% no-repeat !important;
    margin-left: 50px;
    ${media.phone`
      background:var(--blue) !important;
  `}
  }
}
.fbicon {
  display: inline-block;
  position: fixed;
  bottom: 0;
  color: #fff;
  z-index: 1000;
  left: 35px;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 6px 9px;
  ${media.phone`
    display:none;
  `}
  a {
    color: #fff;
  }
  &:hover {
     border: 1px solid var(--blue);
     a{
       color:var(--blue);
     }
  }
}
.bm-burger-bars {
  background:var(--blue);
}

.bm-cross-button {
  height: 24px;
  width: 24px;
  left: 20px;
  top: 20px!important;
  &>span{
    .bm-cross{
      &:first-child{
        width: 2px!important;
        height: 20px!important;
      }
      &:last-child{
        width: 2px!important;
        height: 20px!important;
      }
    }
  }
}

.bm-cross {
  background: #fff;
}

.bm-menu-wrap {
  width: 30% !important;
  height: 100vh !important;
  overflow: hidden;
   ${media.phone`
     width: 100% !important;
  `}
}
.bm-menu {
  background: #024aa0;
  padding: 50px 0;
  font-size: 1.15em;
  height: 150% !important;
  border-radius: 0 0 100% 0;
  animation: movein 0.2s ease-in-out;
}

.bm-morph-shape {
  fill: #373a47;
}


.bm-item-list {
  color: #fff;
  margin-left: 70px;
  a {
    color: #fff;
    margin-bottom: 10px;
    font-size: 22px;
    &:hover, &.active {
      color:#0e5cba;
    }
    &.menu-item{
      padding-left: 65px;
    }
  }
}

.bm-item {
  display: inline-block;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
#Logo {
  img {
    height: 90px;
    margin-bottom: 35px;
  }
}
.footer {
  position: absolute;
  width: 50%;
  bottom: 0;
   ${media.phone`
     width: 55%;
  `}
  p{
    font-size: 16px;
    color: #fff;
    border-top: 1px solid rgba(255,255,255,0.3);
    padding: 12px 0;
    text-align: center;
  }
  .social-networking-list{
    width: 100%;
    position: relative;
    text-align: center;
    padding: 0;
    li{
      display: inline-block;
      a{    
      text-align: center;  
        svg{
          width: 30px;
          height: 36px;
          margin: 0 9px;
          border-radius: 50%;
          padding: 5px;
          color: #fff;
          opacity: 0.5;
          &:hover{
            opacity: 1;
          }
        }
      }
    }
  }
}
`;

export default Styled;