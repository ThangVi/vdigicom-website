import styled from 'styled-components';
import {media} from 'constants/theme';
const Styled = styled.div `
.wrapper-porfolio{
  &:hover {
    .title {
      color:#024aa0;
    }
  }
}
.title{
    text-align: center;
    text-transform: uppercase;
    color: #333;
    font-weight: bold;
    margin-bottom:30px;
     ${media.phone`
      margin-bottom:15px;
    `}
  }
.item-wrapper{
  margin: 0 15px;
  border: 2px solid #f8f8f8;
  border-radius:10px;
  transition-delay: 0.4s;
  margin-bottom: 15px;
  position: relative;
  &:nth-child(odd){
    ${media.phone`
      margin-left: 0;
      margin-right: 0;
    `}
  }
  &:nth-child(even){
    ${media.phone`
      margin-left: 0;
      margin-right: 0;
    `}
  }

  .porfolio-img {
    position: relative;
    width: 100%;
    overflow: hidden;
    .box-sizing();
    &:before {
      content: "";
      display: block;
      padding-bottom: 55%;
      ${media.phone`
        padding-bottom: 100%;
      `}
    }
    div.img {
      position: absolute;
      top: 20px;
      left: 0;
      bottom: 20px;
      right: 0;
      text-align: center;
      background: no-repeat scroll center center / cover;
      background-size: 55%;
      transition: transform 2s;
      ${media.phone`
        bottom: 10px;
        top: 10px;
        background-size: 70%;
      `}
    }
  } 
}
.item-wrapper{
  position: relative;
  &:before, &:after {
  	content:"";
	  width: 0;
	  height: 2px;
	  position: absolute;
	  transition: all 0.2s linear;
	  background: #024aa0;
	  transition-delay: 0s;
	  &:before{
		  right: 0;
		  top: 0;
		}
		&:after{
		  left: 0;
		  bottom: 0;
		}
  }
  &:hover {
  	border:0;
  	
  	&:before, &:after {
  		transition-delay: 0.2s;
  		width: 100%;
  	}
    .overlay {
      opacity: 1;
    }
  }
}
.item {
	display: block;
	 &:before, &:after {
	 content:"";
	  width:2px;
	  height:0;
	  position: absolute;
	  transition: all 0.2s linear;
	  background: #024aa0;
	  transition-delay: 0.2s;
	 }
	  &:before{
		  left: 0;
  		top: 0;
		}
		&:after{
		  right: 0;
  		bottom: 0;
		}

  &:hover {
  	border:0;
  	&:before, &:after {
  		transition-delay: 0s;
  		height: 100%;
  	}
  }
}

`;

export default Styled;