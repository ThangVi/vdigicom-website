import styled from 'styled-components';
import {media} from 'constants/theme';
import Homebg from 'images/bg/homebg.jpg';
const Styled = styled.div `
  background: url('${Homebg}') center bottom/ 100% no-repeat;
	  .container-home {
    position: relative;
    height: 100vh;
    overflow: hidden; 
    z-index: 999;	
    .home-wrapper{
      .home-content {
        margin-top: -25px;
        color: #fff;
        position: absolute;
        z-index: 1;
        height: 100%;
        display: flex;
        align-items: center;
        .logo {
          display: block;
          margin-bottom: 30px;
          img {
            height: 130px;
          }
        }
        h1{
          font-size: 40px;
          text-transform: uppercase;
          font-weight: bold;
          color: #fff;
        }
        p {
          color: rgba(255,255,255,0.8);
          font-size: 20px;
          padding: 20px 0;
          line-height: 22px;
        }
      }
      .copyright{
        position: absolute;
        font-size: 14px;
        bottom: 0;
        z-index: 21;
        color: #171616;
        p {
          ${media.phone` margin-bottom: 2px;`}
        }
      }    
    }
  }

  ${media.phone`
    .home-content {
      .logo {

        margin-bottom: 0!important;
        img {
          height: 100px!important;
        }
      }
      h1 {
        font-size: 22px!important;
      }
    }
  `}

`;

export default Styled;