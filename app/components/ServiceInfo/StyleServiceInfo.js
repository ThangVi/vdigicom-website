import styled from 'styled-components';
import {media} from 'constants/theme';
const StyleServiceInfo = styled.div`
	
	.row{
		div {
			&:nth-child(2), &:nth-child(3) {
				.wrapper-icon {
					.icon {
						img {
					    margin-left: 3px;
					    margin-top: -5px;
					    width: 90%;
						}
					}
				}
			}
		}

		>div{
			display: table;
			width: 100%;
			${media.phone`
				padding-left: 0;
		  `}
			${media.tablet`
				padding-left: 0;
		  `}
			.wrapper-icon{
				display: table-cell;
				vertical-align: top; 
				${media.phone`
					position: relative;
			    left: 38%;
			    margin-bottom: 30px;
			    display: block;
			  `}
				.icon{					
					padding-right: 15px;
					width: 65px;
					height: 65px;
					border: 3px solid #ccdbec;
			    padding: 14px;
			    border-radius: 5px;
			    transform: rotate(45deg);
					img {
						width: 95%;
						transform: rotate(-45deg);
					}
				}
			}
			.sometext-info{
				float: left;
				padding-left: 30px;
				${media.tablet`
					padding-left: 0;
			  `}
				${media.phone`
					margin-left: 0;
			  `}
				h2{
					color: #0e5cba;
					font-size: 30px;
					margin-bottom: 30px;
					line-height: 30px;
					font-weight: bold;
					@media (min-width: 1441px) {
			    	margin-bottom: 10px;
			    }
					${media.desktop`
						font-size: 20px;
						margin-bottom: 15px;
						line-height: 20px;
				  `}
					${media.tablet`
						font-size: 20px;
						margin-bottom: 15px;
						line-height: 20px;
					`}
					${media.phone`
					  font-size: 18px;
				    margin-bottom: 10px;
				    line-height: 20px;
				    text-align: center;
				  `}
				}
				p{
					font-size: 15px;
					color: #333;
					${media.phone`
					  font-size: 14px;
				  `}
				}
			}
			&:nth-child(even){
				padding-left: 30px;
				padding-bottom: 30px;
				@media (min-width: 1441px) {
			    	padding-left: 0px;
						padding-bottom: 0px;
			    }
				${media.desktop`
					padding-left: 15px;
					padding-bottom: 0px;
			  `}
				${media.tablet`
					padding-left: 15px;
					padding-bottom: 15px;
			  `}
			  ${media.phone`
					padding-left: 20px;
					padding-bottom: 30px;
			  `}
			}
			&:nth-child(odd){
				@media (min-width: 1441px) {
			    	padding-left: 0px;
						padding-bottom: 0px;
			    }
				${media.desktop`
					padding-right: 15px;
					padding-bottom: 0px;
			  `}
				${media.tablet`
					padding-right: 15px;
					padding-bottom: 15px;
			  `}
			  ${media.phone`
					padding-left: 20px;
					padding-bottom: 30px;
					padding-right: 15px;
			  `}
			}
			&:nth-child(5){
				padding-bottom: 0;
				p {
					margin-bottom: 0;
				}
				${media.phone`
					padding-bottom: 30px;
			  `}
			}
		}
	}
	
`; 

export default StyleServiceInfo;