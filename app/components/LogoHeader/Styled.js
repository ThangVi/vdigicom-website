import styled from 'styled-components';
import {media} from 'constants/theme';
const Styled = styled.div `
  position: relative;
  top: 0;
  display: block;
  height: 135px;
  ${media.phone`
    text-align: center;
    height: 70px;
    `}
  .titleHeader {
    position: relative;
    top: -6px;
    display: inline-block;
    margin-left: 100px;
    &:before {
      content: '';
      position: absolute;
      left: -65px;
      top: 15px;
      height: 3px;
      width: 30px;
      background-color: #d7d7d7;
    }
    p {
      font-size: 28px;
      font-weight: bold;
      line-height: 27px;
    }
  }
  ${media.phone`
    .titleHeader  {
      text-transform: uppercase;
      margin-left: 0px;
      top: 40px;
     &:after {
      content: '';
      position: absolute;
      right: -65px;
      top: 15px;
      height: 3px;
      width: 30px;
      background-color: #d7d7d7;
      }
      p {
      	font-size: 25px!important;
      }
    }
    #Logo  {
      display: none !important;
    }
  `}
	#Logo {
		padding: 20px 0;
		display: inline-block;
		img {
			height: 95px;
		}
	}
`;

export default Styled;