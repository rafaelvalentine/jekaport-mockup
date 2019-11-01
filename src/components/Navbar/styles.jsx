import styled from 'styled-components'

export const Nav = styled.div`
// position:absolute;
// top:0;
width: 100%;
height: 80px;
background: ${props => props.theme.transparent};
display: flex;
justify-content: flex-start;
align-items: center;
padding:0 20px;
margin: 0 0 1px;
z-index:2;
-webkit-box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
-moz-box-shadow:    0px 0px 4px rgba(0, 0, 0, 0.25);  /* Firefox 3.5 - 3.6 */
box-shadow:        0px 0px 4px rgba(0, 0, 0, 0.25);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
// -webkit-animation-name: navbar; /* Safari 4.0 - 8.0 */
// -webkit-animation-duration: 1.1s; /* Safari 4.0 - 8.0 */
// -webkit-animation-timing-function: ease-in;
//   animation-timing-function: ease-in;
//   animation-name: navbar;
//   animation-duration: 1.1s;
//   @-webkit-keyframes navbar {
//     from {transform: translateY(-100px);}
//     to {transform: translateY(0px);}
//   }
  
//   /* Standard syntax */
//   @keyframes navbar {
//     from {transform: translateY(-100px);}
//     to {transform: translateY(0px);}
//   }
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
margin-left:auto;
a {
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.title};
}
/* When you mouse over the navigation links, change their color */
 a:hover {
  // color: ${props => props.theme.orange};
}
ul {
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  padding:0;
  width:100%;
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
  color: ${props => props.altNavItemsColor ? props.theme.white : props.theme.black};
}


 ul li.active a span {
  font-weight: bold;
}
`

export const AdminWrapper = styled.div`
width: 100px;
height: 40px;
background: ${props => props.theme.gray};
display: flex;
justify-content: space-between ;
align-items: center;
border-radius: 3px;
`

