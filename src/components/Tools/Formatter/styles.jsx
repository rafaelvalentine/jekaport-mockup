import styled from 'styled-components'


export const Input = styled.div`


margin:0;
padding:0;
  .input { 
    height: ${props => props.height};
    border: 1px solid ${props => props.altBorder ? props.altBorder : props.theme.actions};
    border-radius: 4px;
    width: ${props => props.width};
    background:${props => props.theme.white};
    padding: 12px;
    margin:${props => props.margin};
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.fontSize ? props.fontSize : '18px'};
    line-height: 16px;
    color: ${props => props.theme.bodyText};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
    cursor: auto;
  }
}
`
Input.defaultProps ={
  width: '98px',
  height: '40px'
}