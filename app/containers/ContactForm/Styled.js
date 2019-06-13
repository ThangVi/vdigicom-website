import styled from 'styled-components';
import {media} from 'constants/theme';

const Styled= styled.div`
  .contact-form {
    ${media.phone`
        margin-bottom: 115px;
        margin-top: 50px;
     `}
    .title {
      width: 100%;
      margin-bottom: 20px;
      .form-title {
        position: relative;
        h3{
          text-transform: uppercase;
          font-size: 20px;
        }
      }
    }
    .form-group {
      margin-bottom: 30px;
    }
    .form-control {
      background-color: transparent;
      border-color:#fff;
      border-radius: 30px;
      height: calc(2.25rem + 7px);
      color: #fff !important;
      padding: 10px 20px;
      outline:0;
      &:focus, &hover {
        box-shadow: none;
      }
      ::placeholder {
        color: #fff;
      }

      :-ms-input-placeholder { 
        color: #fff;
      }

      ::-ms-input-placeholder { 
        color: #fff;
      }
    }
    textarea.form-control {
      height:145px;
    }
    .form-submit{
      margin: 15px 0;
      float:right;
       ${media.phone`
        float:inherit;
         input.btn-submit {
          width: 100% !important;
         }
        `}
        @media (width: 768px) {
          float:left;
        }
      input.btn-submit {
        position: relative;
        display: block;
        width: 145px;
        height: 45px;
        background-color: #024aa0;
        color: #fff;
        font-size: 15px;
        text-transform: uppercase;
        border: 1px solid #024aa0;
        border-radius:30px;
        .transition-animation(background-color 0.5s linear);
        &:focus, &:active {
          background-color: transparent;
          color:#024aa0;
        }
      }
      ${media.phone`
        margin-top: 30px;
      `}
    }
  }
`;

export default Styled;