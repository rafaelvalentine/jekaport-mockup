import styled from 'styled-components'
import { device } from '../device'
export const Jumbotron = styled.section`
    position:relative;
    width: ${props => props.width ? props.width : '100vw'}!important;
    height:${props => props.height ? props.height : '100vh'} !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    content: "";
    background: 
    /* top, transparent red, faked with gradient */ linear-gradient(90deg, rgba(0,0,0,0.5046218316428134) 0%, rgba(0,0,0,0.5214285543318891) 100%),
        /* bottom, image */ url(${props => props.banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    background-color:#DEEDF2;
    text-align: end;
    color: #fff;
    @media ${device.mobileS} {
    }
    @media ${device.mobileL} {
    }
    @media ${device.tablet} {
    }
    @media ${device.laptop} { 
    }

    // -webkit-animation-name:banner; /* Safari 4.0 - 8.0 */
    // -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
    // -webkit-animation-timing-function: ease-in-out;
    // animation-timing-function: ease-in-out;
    // animation-name: banner;
    // animation-duration: 1s;
    // @-webkit-keyframes banner {
    //     from {
    //         opacity: .15;
    //         transform: translateX(1000px);
    //     }
    //     to {
    //         opacity: 1;
    //         transform: translateX(0px);
    //     }
    // }
    
    // /* Standard syntax */
    // @keyframes banner {
    //     from {
    //         opacity: .15;
    //         transform: translateX(1000px);
    //     }
    //     to {
    //         opacity: 1;
    //         transform: translateX(0px);
    //     }
    // }
`

export const TextWrapper = styled.section`
z-index: 100;
position: absolute;
width:100%;
top: 35vh;

width:50%;
margin:auto 0;
text-align: ${props => props.textAlign ? props.textAlign : 'left'};
align-self:${props => props.alignSelf};
@media ${device.laptop} {
    left: ${props => props.textFixLeft ? props.textFixLeft : '12vw'};
}
@media ${device.desktop} {
    left: ${props => props.textFixLeft ? props.textFixLeft : '30vw'};
}
`

export const Title = styled.h1`
    width:100%;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: normal;
    margin: 0;
    color: ${props => props.altText ? props.theme.title : props.theme.black};
    @media ${device.mobileS} {
        font-size: 18px;
    }
    @media ${device.laptop} {
        font-size: 50px;
    }
`
