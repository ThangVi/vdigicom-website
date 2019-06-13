import styled from 'styled-components';
import {media} from 'constants/theme';
const StyleScroll = styled.div`
	display: none;
	${media.phone`
		display: block !important;
		color: #000;
		h2 {
			text-transform: uppercase;
			color: #0e5cba;
	    font-size: 18px;
	    margin-bottom: 20px;
	    font-weight: bold;
	    margin-top: 30px;
		}
  `}
  .view {
			padding-right: 17px;
		}
  .scroll-bar{
  	height: 500px !important;
	  .scroll-content{
	    width: 100%;
	    height: 100%;
	    padding-right: 20px;
	  }
	  .track-vertical{
	    background-color: transparent;
	    right: 0;
	    width: 2px !important;
	    height: 100%;
	    display: block !important;
	  }

	  .thumb-vertical{
	    position: absolute !important;
	    width: 6px !important;
	    background-color: rgba(0,0,0,0.2);
	    display: block !important;
	  }
	}
`;

export default StyleScroll;