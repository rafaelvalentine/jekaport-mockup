import styled from 'styled-components'

export const Nav = styled.div`
width: 100%;
height: 103px;
background: ${props => props.theme.white};
display: flex;
justify-content: space-between;
align-items: center;
padding:0 20px;
-webkit-box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
-moz-box-shadow:    0px 0px 4px rgba(0, 0, 0, 0.25);  /* Firefox 3.5 - 3.6 */
box-shadow:        0px 0px 4px rgba(0, 0, 0, 0.25);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`
export const NavLink = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%; 
// width: 0; /* 0 width - change this with JavaScript */
background-color: ${props => props.theme.transparent};
transition: 0.5s;
margin:0;
// margin-left:auto;
a {
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.title};
}
/* When you mouse over the navigation links, change their color */
 a:hover {
  color: ${props => props.theme.orange};
}
ul {
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  padding:0;
  width:30%;
  margin:0
}

 ul li {
  font-size: 14px;
  width: 130px;
  height: 16px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:nowrap;
}

 ul li a {
  text-decoration: none;
  display:flex;
  justify-content: flex-end;
}

 ul li a span {
  margin: 2px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-transform: inherit;
  color: ${props => props.theme.black};
}

 ul li.active {
  // background-color: ${props => props.theme.white};
  // color: ${props => props.theme.orange};
  // border-radius: 4px;
}

 ul li.active a span {
  font-weight: bold;
  // color: ${props => props.theme.blue};
}
`

export const AdminWrapper = styled.div`
width: 100px;
height: 40px;
background: ${props => props.theme.gray};
display: flex;
justify-content: center ;
align-items: center;
border-radius: 3px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: rgba(0, 0, 0, 0.7);
span{
  font-weight: bold;
  margin: 0 5px;
}
`

