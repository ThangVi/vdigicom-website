import styled from 'styled-components';
import PreImg from 'images/icon/b.png';
import NextImg from 'images/icon/a.png';
import {media} from 'constants/theme';
import More from 'images/icon/arrow.png';
const Styled = styled.div `
	cursor: pointer;
	.slick-track{
		.slick-slide {
	    padding-right: 35px;
	    ${media.phone`
				padding: 5px;
			`}
		}
	}		
	.slick-list {
		width: 120%;
		${media.phone`
      width: 100%;
    `}
	}
	.block-news{
		min-height: 250px;
		&:hover, &:focus {
			h4 {
				color: var(--blue);
			}
		}
		.news-img{
			position: relative;
	    width: 100%;
	    overflow: hidden;
	    box-sizing: border-box;
			&:before{
		    content: "";
		    display: block;
		    padding-bottom: 68%;
			}
			.img{
				position: absolute;
		    top: 0;
		    left: 0;
		    bottom: 0;
		    right: 0;
		    text-align: center;
		    background: transparent no-repeat scroll center center / cover;
			}
			.news-time{
				position: absolute;
				top: 0;
				right: 10px;
				background-color: #0d42b2;
				padding: 5px 10px;
				color: #fff;
				span{
					width: 100%;
					text-align: center;
					display: block;
					&.day{
						font-size: 25px;
						font-weight: bold;
						margin-bottom: 0px;
						line-height: 25px;
					}
					&.year{
						font-size: 12px;
						margin-bottom: 0;
					}
				}
			}
		}

		.info{
			padding-top: 20px;
			color: #000;
			h4{
				font-size: 18px;
				font-weight: bold;
				padding-bottom: 5px;
				text-transform: uppercase;
			}
			.news-content{
				font-size: 16px;
				color: #333;
				height: 75px;
    		overflow: hidden;
    		text-overflow: ellipsis;
			}

		}
	}
	.slick-prev, .slick-next{
		height: auto;
    width: auto;
    top: 105%;
    z-index: 1000;
  }
  .slick-prev{
    ${media.phone`
      left: 0;
      z-index: 1;
    `}
    &:before{
      background: url(${PreImg}) no-repeat;
	    content: '';
	    display: block;
	    width: 110px;
	    height: 110px;
	    background-size: 100%;
	    position: relative;
	    margin-left: 25px;
     ${media.phone`
	      display: none;
	    `}
    }
  }
  .slick-next{
    &:before{
      background: url(${NextImg}) no-repeat;
	    content: '';
	    display: block;
	    width: 110px;
	    height: 110px;
	    background-size: 100%;
	    position: relative;
	    margin-left: 25px;
      ${media.phone`
	      display: none;
	    `}
    }
  }
  .slick-dots{
  	li{
  		button{
  			&:before{
  				${media.phone`
	      		content: '';
				    position: absolute;
				    top: 0;
				    left: 0;
	  				width: 10px;
				    height: 10px;
				    border-radius: 50%;
				    background-color: var(--blue);
				    opacity: 0.25;
	    		`}
	    		&:hover, &:focus{
	    			background-color: var(--blue);
				    opacity: 1;
	    		}
  			}
  		}
  		&.slick-active{
  			button{
  				&:before{
  					${media.phone`
				      background-color: var(--blue);
				    	opacity: 1;
				    `}
  				}
  			}
  		} 
  	}
  }
`;

export default Styled;