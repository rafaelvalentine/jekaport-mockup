import styled from 'styled-components'
import { device } from '../device'

export const SideNav = styled.aside`
  height: 94%; 
  width: 300px; /* 0 width - change this with JavaScript */
  position: absolute; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 103px; /* Stay at the top */
  left: 0;
  background-color: ${props => props.theme.buttonBlue};
  overflow: hidden; 
  padding-top: 10px; 
  transition: 1s;
  padding-left: 30px;
  &#sidebaralt {
    width: 120px; /* 0 width - change this with JavaScript */
    padding-left: 0;
    ul {
      display: flex;
      align-self: center;
      list-style: none;
      justify-content: flex-start;
      flex-direction: column;
      padding:0;
      width:120px;
    }
    ul li {
      width: 100%;
      height: 60px; 
      justify-content:center;
    }
  }
a {
  // padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #9a9a9a;
  display: block;
  transition: 0.3s;
}
/* When you mouse over the navigation links, change their color */
 a:hover {
  color: ${props => props.theme.text};
}
ul {
  display: flex;
  align-self: flex-start;
  list-style: none;
  justify-content: space-between;
  flex-direction: column;
  padding:0;
  width:100%;
}

 ul li {
  font-size: 14px;
  text-transform: capitalize;
  width: 100%;
  height: 50px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
}

 ul li a {
  text-decoration: none;
  color: #9a9a9a;
}

 ul li a span {
  margin: 10px;
  text-align: center;
  text-transform: capitalize;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
}

 ul li.active {
  border-right: 4px solid ${props => props.theme.white};
  color: #0BA4FE;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
}

 ul li.active a span {
  color: rgba(0, 0, 0, 0.25);
  /* font-size: 14px; */
}

@media ${device.mobileS} {
}
@media ${device.mobileL} {
}
@media ${device.tablet} {
}
@media ${device.laptopL} { 
  height: calc(100% - 35px); 
}
`