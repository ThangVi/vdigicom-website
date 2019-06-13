import { injectGlobal } from 'styled-components';
import More from 'images/icon/arrow.png';
import Moregray from 'images/icon/moregray.png';
import {media} from 'constants/theme';
import Uc from 'images/bg/uc.jpg';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  .modal-dialog {
    top: 15%;
  }
  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }
  .main {
    padding-top:30px;
    ${media.desktop`
      padding-top: 0px;    
    `}
    ${media.tablet_lg`
      padding-top: 30px;    
    `}
    ${media.phone`
      padding-top: 30px;   
      padding-left: 0px; 
    `}
  }
  #news {
    @media (max-width: 1024px){
      overflow: hidden;
      padding-bottom: 100px;
    }
  }
  .wrapper {
    height: 100%;
    position: relative;
    left: 8%;
  }
  canvas {
    position: absolute;
  }
  .icon-more {
    background:url('${More}') center center #024aa0 no-repeat;
    margin-left: 35px;
    display: inline-block;
    width: 30px;
    height: 30px;
    background-size: 65%;
    border-radius: 50%;
    padding-top: 13px;
    vertical-align: -9px;
  }
  .fp-tableCell {
    vertical-align: top !important;
  }
  .sectionhome {
   background: linear-gradient(to right, #186ccf 0%, #044592 100%)!important;
  
  }

  .btn-readmore{
    background: #fff;
    border-radius: 30px;
    color: var(--blue);
    font-weight: bold;
    text-transform: inherit;
    font-size: 15px;
    letter-spacing: 0px;
    padding: 13px 10px 13px 25px;
    &:hover {
      opacity:0.8;
    }
  }
  a:hover{
    text-decoration: none;
  }
  #fp-nav{
    &.fp-left {
      left: 30px !important;
    }
    ul {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 30px;
      padding: 6px !important;
      li {
        list-style: none;
        font-size: 14px;
        text-decoration: none;
        color: #fff;
        margin-bottom: 10px!important;
        width: 35px !important;
        height: 35px !important;
        margin-left: 0!important;
        margin-right: 0!important;
        a {
          &:hover, &.active {
            background: #024aa0;
            border-radius: 50%;
            span{
              margin: -11px 0 0 -8px !important;
            }
          }
          span {
            background: transparent !important;
            margin: -11px 0 0 -8px !important;
            color: #fff;
            &.fp-sr-only {
              overflow: inherit;
              clip: inherit;
              text-indent: -10000px;
              &+span{
                &:after{
                  display: inline-block;
                  width: 35px;
                  height: 35px;
                  color: #fff;
                }
              }
            }
          }
        }
        &:first-child{
          .fp-sr-only + span{
            &:after{
              content: '01';
            }
          }
        }
        &:nth-child(2){
          .fp-sr-only + span{
            &:after{
              content: '02';
            }
          }
        }
        &:nth-child(3){
          .fp-sr-only + span{
            &:after{
              content: '03';
            }
          }
        }
        &:nth-child(4){
          .fp-sr-only + span{
            &:after{
              content: '04';
            }
          }
        }
        &:nth-child(5){
          .fp-sr-only + span{
            &:after{
              content: '05';
            }
          }
        }
        &:nth-child(6){
          .fp-sr-only + span{
            &:after{
              content: '06';
            }
          }
        }
        &:nth-child(7){
          .fp-sr-only + span{
            &:after{
              content: '07';
            }
          }
        }
        &:nth-child(8){
          .fp-sr-only + span{
            &:after{
              content: '08';
            }
          }
        }
      }
    }
  }
  ${media.phone`
     #fp-nav{
      display: none;
    }
    #fullpage {
      overflow: hidden;
    }
  `}
 
  #app {
    div {
      .menu {
        position: relative;
        z-index: 99999;
      }
    }
    #fp-nav{
      position: absolute;
      z-index:9999;
    }
  }
    


  .fp-viewing-about-us, .fp-viewing-services, .fp-viewing-members, .fp-viewing-news, .fp-viewing-partners {
    #fp-nav{
      ul {
        background: #0e5cba;
      }
    }
    #app {
      div {
        .menu {
          div {
            div {
              div {
                .bm-burger-button {
                  span {
                    background:url('${Moregray}') 0% 0% / 11% no-repeat !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  body{
    >#fp-nav{
      display: none;
    }
  }
  .header-menu {
    ${media.desktop`
      display: none;  
    `}
    ${media.tablet_lg`
      display: none    
    `}
    ${media.phone`
      display: block;
      position: fixed;
      z-index: 999;
      background-color: white;
      width: 100%;
      padding: 5px 0;
      #Logo {
        display: inline-block;
        img {
          height: 60px;
        }
      }
      
      
    `}
  }
`;
