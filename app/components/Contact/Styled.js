import styled from 'styled-components';
import {media} from 'constants/theme';
import uc from 'images/bg/uc.jpg';
import vn from 'images/bg/vn.jpg';
import thumbuc from 'images/bg/thumbuc.jpg';
import thumbvn from 'images/bg/thumbvn.jpg';
const Styled = styled.div `
	.tab1 {
		background:url('${uc}')  center center/cover no-repeat;
	}
	.tab2 {
		background:url('${vn}')  center center/cover no-repeat;
	}
	.react-tabs__tab-panel--selected {
		
		@media (width: 1024px) {
    	height: 55vh;
    }	
    @media (width: 768px) {
    	height: 75vh;
    }	
    @media (min-width: 1025px) {
    	height: 100vh;
    }	
    ${media.phone`
    	height: auto;
    `}
	}

	.tabtb2 {
		background:url('${thumbuc}')  center center/cover no-repeat;
	}
	.tabtb1 {
		background:url('${thumbvn}')  center center/cover no-repeat;
	}
  .react-tabs__tab-panel--selected { 
  	.custom-fadein{
  		animation-name: fadeIn; animation-duration: 1300ms; animation-timing-function: ease-in-out;
  	}
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
	ul {
	position: absolute;
    text-align: center;
    /* left: 40%; */
    display: inline-block;
    border-bottom: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 0;
    padding-top: 30px;
    li {
    	display: inline-block;
    	width: 100px;
    	height: 60px;
    	cursor: pointer;
    	margin: 0 10px;
    	margin-bottom: 8px;
    	span{
    		position: relative;
		    top: -28px;
		    color: white;
		    text-transform: uppercase;
		    font-size: 13px;
    	}
    }
	}

	.contact {
		color: #fff;
		h2 {
	    text-transform: uppercase;
	    font-size: 25px;
	    margin-bottom: 15px;
	    font-weight: bold;
		}
		p {
			margin-bottom: 10px;
			a {
				color: #fff;
				&:hover, &:focus {
					color: var(--blue);
				}
			}
		}
		${media.phone`
   	 padding-left: 10px;
   	 margin-bottom: 20px;
   	  margin-top: 0;
   	 p{
   	 	margin-bottom: 5px;
   	 }
  `}
	}
`;

export default Styled;