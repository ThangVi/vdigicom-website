import styled from 'styled-components';
import {media} from 'constants/theme';
import More from 'images/icon/arrow.png';
import PreImg from 'images/icon/job_icon-prev.png';
import NextImg from 'images/icon/job_icon-next.png';
const StyledRecruitment = styled.div `
	${media.phone`
		width: 100%;
	`} 
	${media.tablet`
      	margin-bottom: 50px;
    `}
	.slick-slide {
		margin-bottom: 25px;
		${media.desktop`
			max-width: 500px !important;
			`}
	 ${media.tablet_lg`
      max-width: 400px !important;
    `}

    @media (min-width: 1441px) {
    		max-width: 500px !important;
    }
    ${media.tablet`
      	max-width: 330px !important;
    `}
	}
	.slick-list{
		width: 100%;
		@media (min-width: 1024px){
			height: 500px !important;
		}
		@media (max-width: 768px){
			height: 460px !important;
		}
		@media (max-width: 411px){
			height: 515px !important
		}
		 ${media.phone`
		 		margin-top: 50px;
		 		padding-left: 0 !important;

		 	`}
		 	${media.tablet_lg`
      	padding-left: 60px;
    `}
    ${media.tablet`
      	padding-left: 0px;
    `}

	}

  .slick-prev{
  	  display: block;
	    position: relative;
	    right: 100%;
	    width: 100%;
	    z-index: 9999;
	    top: 40px;
    ${media.phone`
      left: 0;
      z-index: 1;
    `}
    &:before{
      background: url(${PreImg}) no-repeat;
			content: '';
	    display: block;
	    width: 50px;
	    height: 50px;
	    background-size: 100%;
	    position: absolute;
	    right: -20px;
     ${media.phone`    
     	right: auto;
	    top: -30px;
	    left: 11px;
	    `}
	     ${media.tablet`
	    	right: -50px;
	    `}
    }
  }
  .slick-next{
    &:before{
      background: url(${NextImg}) no-repeat;
	    content: '';
	    display: block;
	    width: 50px;
	    height: 50px;
	    background-size: 100%;
	    position: absolute;
	    right: 30px;
	    bottom: -200px;
      ${media.phone`
	      right: 40px !important;
    		top: -282px;
	    `}
	    ${media.tablet`
	    	right: 0px;
	    `}
    }
  }
	.recruitment-content {
		width: 100%;
		${media.phone`
			margin-top: 30px;
		`}
		.block-info {
			.apply {
				text-transform: uppercase;
			}
			.icon-more {
		    margin-left: 10px;
		    background-size: 50%;
			}
			float: left;
			position: relative;
	    width: 95%;
	    min-height: 200px;
			color: #000;
			background-color: #fff;
			box-shadow: 7px 7px 15px #0b399b;
			padding: 20px 25px;
			border-radius: 10px;
			${media.phone`
				width: 100%;
			`}
			.date{
				position: absolute;
				top: 0;
				right: 10px;
				background-color: #0d42b2;
				padding: 8px 10px;
				color: #fff;
				span{
					width: 100%;
					text-align: center;
					&.day{
						font-size: 25px;
						font-weight: bold;
						margin-bottom: 0px;
						line-height: 25px;
						display: block;
					}
					&.year{
						font-size: 12px;
						margin-bottom: 0;
					}
				}
			}
			h2{
		    margin-top: 35px;
		    font-size: 23px;
		    margin-bottom: 8px;	
			}
			.position{
				font-size: 19px;
				color: #666;
			}
			>a{
				position: absolute;
				bottom: 20px;
				cursor: pointer;
				font-size: 15px;
				text-transform: uppercase;
				&:hover, &:focus {
					opacity:0.8;
			}
		}
	}
`;

export default StyledRecruitment;