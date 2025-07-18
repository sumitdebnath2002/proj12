import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <span className="title">Comments</span>
        <div className="comments">
          <div className="comment-react">
            <button>
              <svg fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                <path fill="#707277" strokeLinecap="round" strokeWidth={2} stroke="#707277" d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" />
              </svg>
            </button>
            <hr />
            <span>14</span>
          </div>
          <div className="comment-container">
            <div className="user">
              <div className="user-pic">
                <svg fill="none" viewBox="0 0 24 24" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinejoin="round" fill="#707277" strokeLinecap="round" strokeWidth={2} stroke="#707277" d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" />
                  <path strokeWidth={2} fill="#707277" stroke="#707277" d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" />
                </svg>
              </div>
              <div className="user-info">
                <span>Yassine Zanina</span>
                <p>Wednesday, March 13th at 2:45pm</p>
              </div>
            </div>
            <p className="comment-content">
              I've been using this product for a few days now and I'm really impressed! The interface is intuitive and easy to
              use, and the features are exactly what I need to streamline my workflow.
            </p>
          </div>
        </div>
        <div className="text-box">
          <div className="box-container">
            <textarea placeholder="Reply" defaultValue={""} />
            <div>
              <div className="formatting">
                <button type="button">
                  <svg fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M5 6C5 4.58579 5 3.87868 5.43934 3.43934C5.87868 3 6.58579 3 8 3H12.5789C15.0206 3 17 5.01472 17 7.5C17 9.98528 15.0206 12 12.5789 12H5V6Z" clipRule="evenodd" fillRule="evenodd" />
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M12.4286 12H13.6667C16.0599 12 18 14.0147 18 16.5C18 18.9853 16.0599 21 13.6667 21H8C6.58579 21 5.87868 21 5.43934 20.5607C5 20.1213 5 19.4142 5 18V12" />
                  </svg>
                </button>
                <button type="button">
                  <svg fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M12 4H19" />
                    <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M8 20L16 4" />
                    <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M5 20H12" />
                  </svg>
                </button>
                <button type="button">
                  <svg fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M5.5 3V11.5C5.5 15.0899 8.41015 18 12 18C15.5899 18 18.5 15.0899 18.5 11.5V3" />
                    <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M3 21H21" />
                  </svg>
                </button>
                <button type="button">
                  <svg fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M4 12H20" />
                    <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M17.5 7.66667C17.5 5.08934 15.0376 3 12 3C8.96243 3 6.5 5.08934 6.5 7.66667C6.5 8.15279 6.55336 8.59783 6.6668 9M6 16.3333C6 18.9107 8.68629 21 12 21C15.3137 21 18 19.6667 18 16.3333C18 13.9404 16.9693 12.5782 14.9079 12" />
                  </svg>
                </button>
                <button type="button">
                  <svg fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                    <circle strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" r={10} cy={12} cx={12} />
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" />
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="#707277" d="M8.00897 9L8 9M16 9L15.991 9" />
                  </svg>
                </button>
                <button type="submit" className="send" title="Send">
                  <svg fill="none" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#ffffff" d="M12 5L12 20" />
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#ffffff" d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 450px;
    height: fit-content;
    background-color: white;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 17px 17px 27px 27px;
  }

  .title {
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #f1f1f1;
    font-weight: 700;
    font-size: 13px;
    color: #47484b;
  }

  .title::after {
    content: '';
    width: 8ch;
    height: 1px;
    position: absolute;
    bottom: -1px;
    background-color: #47484b;
  }

  .comments {
    display: grid;
    grid-template-columns: 35px 1fr;
    gap: 20px;
    padding: 20px;
  }

  .comment-react {
    width: 35px;
    height: fit-content;
    display: grid;
    grid-template-columns: auto;
    margin: 0;
    background-color: #f1f1f1;
    border-radius: 5px;
  }

  .comment-react button {
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    outline: none;
  }

  .comment-react button:after {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    left: -2.5px;
    top: -2.5px;
    background-color: #f5356e;
    border-radius: 50%;
    z-index: 0;
    transform: scale(0);
  }

  .comment-react button svg {
    position: relative;
    z-index: 9;
  }

  .comment-react button:hover:after {
    animation: ripple 0.6s ease-in-out forwards;
  }

  .comment-react button:hover svg {
    fill: #f5356e;
  }

  .comment-react button:hover svg path {
    stroke: #f5356e;
    fill: #f5356e;
  }

  .comment-react hr {
    width: 80%;
    height: 1px;
    background-color: #dfe1e6;
    margin: auto;
    border: 0;
  }

  .comment-react span {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 13px;
    font-weight: 600;
    color: #707277;
  }

  .comment-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0;
    margin: 0;
  }

  .comment-container .user {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 10px;
  }

  .comment-container .user .user-pic {
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
    border-radius: 50%;
  }

  .comment-container .user .user-pic:after {
    content: '';
    width: 9px;
    height: 9px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-radius: 50%;
    background-color: #0fc45a;
    border: 2px solid #ffffff;
  }

  .comment-container .user .user-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3px;
  }

  .comment-container .user .user-info span {
    font-weight: 700;
    font-size: 12px;
    color: #47484b;
  }

  .comment-container .user .user-info p {
    font-weight: 600;
    font-size: 10px;
    color: #acaeb4;
  }

  .comment-container .comment-content {
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    color: #5f6064;
  }

  .text-box {
    width: 100%;
    height: fit-content;
    background-color: #f1f1f1;
    padding: 8px;
  }

  .text-box .box-container {
    background-color: #ffffff;
    border-radius: 8px 8px 21px 21px;
    padding: 8px;
  }

  .text-box textarea {
    width: 100%;
    height: 40px;
    resize: none;
    border: 0;
    border-radius: 6px;
    padding: 12px 12px 10px 12px;
    font-size: 13px;
    outline: none;
    caret-color: #0a84ff;
  }

  .text-box .formatting {
    display: grid;
    grid-template-columns: auto auto auto auto auto 1fr;
  }

  .text-box .formatting button {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 50%;
    border: 0;
    outline: none;
  }

  .text-box .formatting button:hover {
    background-color: #f1f1f1;
  }

  .text-box .formatting .send {
    width: 30px;
    height: 30px;
    background-color: #0a84ff;
    margin: 0 0 0 auto;
  }

  .text-box .formatting .send:hover {
    background-color: #026eda;
  }

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.6;
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }`;

export default Form;
