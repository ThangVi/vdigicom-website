import styled from 'styled-components';
import {media} from 'constants/theme';
const Styled = styled.div `
	.about{
		position: relative;
		p{
			 margin-bottom: 25px;
		}
		.Block1, .Block2 {
			width: 52%;
	    display: inline-block;
	    padding: 25px 40px;
	    border-radius: 20px;
	    ${media.phone`
	    	width: 100%;
	    	margin-bottom: 10px;
	    	display:block !important;
	    `}
		}
		.Block1 {
	    background-color: #f8f8f8;
	    position: relative;
	    margin-top: 5%;
	    padding-right: 10%;
	    h2 {
				text-transform: uppercase;
		    font-size: 16px;
		    font-weight: bold;
		    margin-bottom:15px;
			}
			p:last-child {
				margin-bottom: 0;
			}
		}
		.Block2 {
			background-color:var(--blue);
			color:#fff;
			position: absolute;
			margin-left: -5%;
			 ${media.phone`
			 	position: relative;
			 	margin-left: 0;
			 	`}
			h2 {
				text-transform: uppercase;
		    font-size: 16px;
		    font-weight: bold;
		    margin-bottom:15px;
			}
		}
	}
	

`;

export default Styled;