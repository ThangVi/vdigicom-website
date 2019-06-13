import styled from 'styled-components';
import {media} from 'constants/theme';
const Styled = styled.div `
.custorm-scrollbar {
	height: calc(100vh - 135px) !important;
	> div:nth-child(3) {
		width: 2px !important;
    ${media.phone`
      width: 4px !important;
      background: rgba(14, 92, 186, 0.3) !important;
      display: block !important;
    `}
	}
}
.block-info {
  padding-bottom: 20px;
  width: 20%;
  float: left;
  ${media.phone`
      width: 50%;
  `}

  &:hover {
    .img div{
      transform: scale3d(1.1, 1.1, 1);
      ${media.phone`
        transform: none;
      `}
    }
  }
  .img{
    position: relative;
    width: 60%;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 50%;
    border: 5px solid #0e5cba;
    margin: 0 auto;
   
    ${media.phone`
      width: 70%;
    `}

    &:before{
      display: block;
      content: '';
      padding-bottom: 100%;
    }
    >div{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      background: transparent no-repeat scroll center center / cover;
      transition: all 1s;
    }
  }
  .info{
    padding-top: 15px;
    text-align: center;
    h2{
      color: var(--blue);
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    p{
      font-size: 16px;
      color: #2b2b2b;
    }
  }
}

`;

export default Styled;