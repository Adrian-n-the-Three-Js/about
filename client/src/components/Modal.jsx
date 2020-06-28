import React from 'react';
import ModalCarousel from './ModalCarousel.jsx';
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

console.log('modal');

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity .2s linear;
  z-index: 1;
  height: 90.49%;
  width: 93.36%;
  margin: auto;

  // .header-container {
  //   // display: flex;
  //   flex-direction: row;
  //   // flex: 1;
  //   // box-sizing: border-box;
  //   // position: absolute;
  // }

  // .title {
  //   margin-left: 5%;
  // }

  // .nav {
  // // display: flex;
  // // flex-flow: row wrap;
  // // justify-content: flex-end;
  // // list-style: none;
  // // align-self: center;
  // // margin: 0 0.8em 0 0;
  // // background: sky-blue;
  // }

  // .closeButton {
  //   display: flex;
  // }
  // .carousel {
  //   height: 200px;
  //   width: 200px;
  // }
`;

const Header = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid #e5e5e5;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #FFFFFF;
`;

const HeaderLeft = styled.div`
  text-align: left;
  > span {
    font-family: ${props => props.theme.font};
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: #000a12;
    margin-left: 24px;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const HeaderRight = styled.div`
  font-family: ${props => props.theme.font};
  box-sizing: border-box;
  border-radius: 2px;
  > ul li {
    display: inline;
    vertical-align: middle;
    list-style: none;
    padding: 5px;
  }
`;

const HeaderItemLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  display: inline-block;
  line-height: 16px;
  white-space: nowrap;
  color: ${props => props.theme.charcoal};
  cursor: pointer;
  &:visited {
    text-decoration: none; color: ${props => props.theme.charcoal};
  }
`;
const HeaderItem = styled.span`
  .price {
    color: #000a12;
    font-family: ${props => props.theme.font};
    font-size: 16px;
    font-weight: 700;
  }
`;

const HeaderDealButton = styled.button`
  border-radius: 12px;
  display: inline-block
  font-family: ${props => props.theme.font};
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #000a12;
  background-color: ${props => props.theme.mustard};
  border: 0;
  padding: 6px 10px;
  line-height: 16px;
  cursor: pointer;
  text-decoration-style: solid;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #fee190;
  }
`;

const HeaderCloseButton = styled.button`
  cursor: pointer;
  padding: 0 12px;
  height: 44px;
  line-height: 12px;
  display: inline-block;
  border: none;
  border-left: 1px solid #e5e5e5;
  margin: 0em;
  box-sizing: border-box;
  background-color: #FFFFFF;
  text-align: center;
  flex: 0 0 auto;
  > span {
    font-weight: 300;
    font-size: 36px;
    line-height: 1;
  }
  &:focus {
    outline: none;
  }
`;

const ModalCarouselWrapper = styled.div`
  height: 90%;
  width: 100%;
  background-color: #000000;
`;

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (ReactDOM.createPortal(
      <ModalWrapper>
        <Header>
          <HeaderLeft><span>Photos of {this.props.hotel.hotelName}</span></HeaderLeft>
          <HeaderRight>
            <ul>
              <li>
                <HeaderItemLink href="#">
                  {this.props.hotel.hotelName.split(" ").join("")}.com
                    <svg width="1.5em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-up-right" font-weight="bold" fill="#4A4A4A" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H7a.5.5 0 0 1-.5-.5z"/>
                    <path fill-rule="evenodd" d="M12.354 3.646a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.708-.708l9-9a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </HeaderItemLink></li>
              <li><HeaderItem className="price">{this.props.hotel.hotelPrice}</HeaderItem></li>
              <li><HeaderDealButton className="view-deal" href="#">View Deal</HeaderDealButton></li>
              <li>
                <HeaderCloseButton onClick={() => {this.props.toggleModal()}}>
                <span>&#215;</span>
                </HeaderCloseButton>
              </li>
            </ul>
          </HeaderRight>
        </Header>
        <ModalCarouselWrapper>
          {/* <ModalCarousel
            // className={this.className}
            album={this.props.album}
          /> */}
        </ModalCarouselWrapper>
      </ModalWrapper>,

      modalRoot,
    ));
  }
}

export default Modal;
