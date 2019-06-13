import styled from 'styled-components';
import More from 'images/icon/more.png';
import {media} from 'constants/theme';
const Styled = styled.div `
/* Position and sizing of burger button */
  .navbar--hidden {
    display:none;
  }
  >div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    background-color: #fff;
    transition: all 0.2s linear;
  }
  .fbicon {
    ${media.phone`
      display:none;
    `}
  }

  #Logo {
    img {
      height: 65px;
    }
  }

  .navbar-nav {
    padding: 50px 0;
    height: 100vh;
    .nav-item {
      text-align: center;
      padding: 10px 0;
      a {
        padding: 7px 0;
        border-radius: 20px;
      }
      &.active {
        a {
          color: #fff;
          padding: 5px 25px;
          border-radius: 20px;
          background-color: var(--blue);
        }
      }
      .nav-link {
        color: #000;
      }
    }
  }
  .navbar-toggler {
    border: none;
  }
  
  .navbar {
    padding: 0 15px;
    
  }
  .navbar-collapse {
    border-top: 1px solid rgba(0,0,0,0.3);
  }
`;

export default Styled;