import styled from 'styled-components';
import {media} from 'constants/theme';

const Styled= styled.div`
  margin: 30px auto;
  .contact-form {
    ${media.phone`
        margin-bottom: 115px;
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
      border-color: var(--blue);
      border-radius: 30px;
      height: calc(2.25rem + 7px);
     
      padding: 10px 20px;
      outline:0;
      &:focus, &hover {
        border-color: #024aa0;
        box-shadow: none;
      }
      

      :-ms-input-placeholder { 
        color: var(--blue);
      }

      ::-ms-input-placeholder { 
        color: var(--blue);
      }
    }
    textarea.form-control {
      height:215px;
    }
    .form-submit{
      float:right;
       ${media.phone`
        float:inherit;
         input.btn-submit {
          width: 100% !important;
         }
        `}
      input.btn-submit {
        position: relative;
        display: block;
        width: 200px;
        height: 45px;
        background-color: #33baaf;
        color: #fff;
        font-size: 15px;
        text-transform: uppercase;
        border: 1px solid #33baaf;
        border-radius:30px;
        .transition-animation(background-color 0.5s linear);
        &:focus, &:active {
          background-color: transparent;
          color:#33baaf;
          box-shadow: none;
        }
      }
      ${media.phone`
        margin-top: 30px;
      `}
    }
    .attach-file{
      position: relative;
      display: block;
      height: 45px;
      background-color: var(--blue);
      color: #fff;
      font-size: 15px;
      text-transform: uppercase;
      border: 1px solid var(--blue);
      border-radius: 30px;
      .transition-animation(background-color 0.5s linear): ;
      text-align: center;
      cursor: pointer;
      .files-dropzone {
        padding: 10px;
      }
    }
  }
  .file-name {
    color: #333;
    padding: 7px 10px;
    text-align: left;
    >span {
      font-size: 10px;
      font-weight: 600;
      color: red;
      display: block;
      float: right;
      line-height: 20px;
    }
  }
`;

export default Styled;