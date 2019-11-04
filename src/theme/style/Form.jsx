import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap:  ${props => props.flexWrap ? props.flexWrap : 'wrap'};
    flex-direction: ${props => props.direction ? props.direction : 'column'};
    justify-content:${props => props.justify};
    align-items:${props => props.align};
    align-content:${props => props.content};
    margin: ${props => props.margin};
`
export const Input = styled.input`
    width: ${props => props.width};
    border: none;
    height: 40px;
    background: transparent;
    padding-left: 10px;
    margin: ${props => props.margin};

    font-weight: 300;
    font-size: 1.2rem;
    color: ${props => props.theme.black};

    &:focus {
        outline: none;
    }
`
Input.defaultProps = {
  width: '100%',
  margin: '0 0 16px 0'
}

export const Label = styled.label`
    border-bottom: 0.25px solid ${props => props.theme.lightGray};
    width: 100%;
    margin: 1rem 1rem 4rem;
`
export const NoMLabel = styled(Label)`
    margin: 1rem 1rem;
`
export const CheckBoxLabel = styled.label`
    margin: ${props=> props.margin ? props.margin : '15px 0 0'};
    cursor: pointer;
    vertical-align: top;
    display: block;
    position: relative;
    padding-left: 24px;
    z-index: 2;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        width: 16px;
        border-radius: 5px;
        background-color: #fff;
        border: .5px solid ${props => props.theme.grayText};
      }
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
     
      input:checked ~ .checkmark:after {
        display: block;
      }
      :hover input ~ .checkmark {
        background-color: ${props => props.theme.grayText};
      }
        input:checked ~ .checkmark {
        background-color:  ${props => props.theme.white};
      }
      .checkmark:after {
        left: 2px;
        top: 2px;
        width: 5px;
        height: 5px;
        border: solid ${props => props.theme.buttonBlue};
        border-radius:50%;
        border-width: 5px;
        // -webkit-transform: rotate(45deg);
        // -ms-transform: rotate(45deg);
        // transform: rotate(45deg);
      }
      &.radio {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      /* Hide the browser's default radio button */
      &.radio input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      
      /* Create a custom radio button */
      &.radio .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 12px;
        width: 12px;
        background-color: ${props => props.theme.white};
        border-radius: 50%;
        border: .5px solid ${props => props.theme.orange}
      }
      
      /* On mouse-over, add a grey background color */
      &.radio:hover input ~ .checkmark {
        background-color: #ccc;
      }
      
      /* When the radio button is checked, add a blue background */
      &.radio input:checked ~ .checkmark {
        background-color: ${props => props.theme.white};
      }
      
      /* Create the indicator (the dot/circle - hidden when not checked) */
      &.radio .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
      
      /* Show the indicator (dot/circle) when checked */
      &.radio input:checked ~ .checkmark:after {
        display: block;
      }
      
      /* Style the indicator (dot/circle) */
      &.radio .checkmark:after {
        top: 2.6px;
        left: 2.7px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: solid ${props => props.theme.orange};
        border-width: 1
        background: ${props => props.theme.orange};
      }
`
export const CheckBox = styled.input`
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0
`

export const TwoComponentBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding:0 5px;
    flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'nowrap'}
`
export const AltBox = styled(TwoComponentBox)`
    justify-content:flex-start;
    margin: 0;
`
export const AltBoxStacked = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding:0;
    flex-direction:column;
`
export const Box = styled.div`
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-top: ${props => props.border};
    width: ${props => props.width};
`
Box.defaultProps = {
  margin: '1rem',
  padding: '1rem'
}
export const NoSpaceBox = styled.div`
    display: flex;
`
export const UnderLinedBox = styled.div`
    border-bottom: 1px solid #E0E7FF;
    display: flex;
    width:100%;
    padding-bottom: 64px;
`
/**
     * Main forms
     */
export const MainInput = styled.input`
    width: ${props => props.width};
    border: 1px solid ${props => props.theme.inputBorder};
    border-radius: 5px;
    height: ${props => props.height};
    background:${props => props.theme.transparent};
    padding: 12px 18px;
    margin:${props => props.inputMargin};
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.fontSize ? props.fontSize : '14px'};
    line-height: 18px;
    color: #3B3B3B;
    cursor: pointer;
    ::placeholder {
        font-size: ${props => props.fontSize ? props.fontSize : '12px'};
        color: ${props => props.theme.placeholder};
    }
    &:focus {
        transition: .3s;
        outline:none;
        border-radius: 4px;
    }
    &.inputaltlabel{
      width: ${props => props.width ? props.width : '625px'};
      height: 47px;
      background: rgba(196, 196, 196, 0.12);
      border: 1px solid rgba(0, 0, 0, 0.11);
      border-radius: 0;
    }
`
MainInput.defaultProps = {
  width: '459px',
  height: '32px',
  inputMargin: '0'
}
export const MainInputDisabled = styled.div`
display: inline-block;
width: ${props => props.width};
border: 1px solid ${props => props.theme.inputBorder};
border-radius: 5px;
height: ${props => props.height};
background:${props => props.theme.transparent};
padding: 5px 10px;
margin:${props => props.inputMargin};
font-style: normal;
font-weight: normal;
font-size: ${props => props.fontSize ? props.fontSize : '14px'};
line-height: 18px;
color: ${props => props.theme.placeholder};
cursor: pointer;
&.altdisabledinput{
  border-radius: 0;
  background: rgba(196, 196, 196, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.11);
  height: 47px;
  padding: 10px;
}
`
MainInputDisabled.defaultProps = {
  width: '459px',
  height: '32px',
  inputMargin: '0'
}
export const SearchInput = styled(MainInput)`
width: 200px;
height: 40px;
background: ${props => props.theme.transparent};
border: 1px solid ${props => props.theme.transparent};
border-radius: 0;
&:focus {
    outline: none;
}
`
export const SortInput = styled(MainInput)`
border: 1px solid ${props => props.theme.transparent};
width:80px;
height:100%;
background:${props => props.theme.transparent};

`
export const NoLabelInput = styled(MainInput)`
    margin: ${props => props.margin};
`
NoLabelInput.defaultProps = {
  margin: '1rem',
  width: '100%'
}
export const MainLabelContainer = styled.label`
    display: block;
    margin:${props => props.margin ? props.margin : '0 50px'};
.formatter,
.datepicker {
        width: ${props => props.width ? props.width : '459px'};
        border: 1px solid ${props => props.theme.inputBorder};
        border-radius: ${props => props.borderRadius ? props.borderRadius : '5px'};
        height: ${props => props.height ? props.height : '32px'};
        background:${props => props.theme.transparent};
        padding: 12px 18px;
        margin:${props => props.inputMargin};
        font-style: normal;
        font-weight: normal;
        font-size: ${props => props.fontSize ? props.fontSize : '14px'};
        line-height: 18px;
        color: #3B3B3B;
        cursor: pointer;
        ::placeholder {
            font-size: ${props => props.fontSize ? props.fontSize : '12px'};
            color: ${props => props.theme.placeholder};
        }
        &:focus {
            transition: .3s;
            outline:none;
            border-radius: 4px;
        }
    }
`

export const MainLabelContainerAlt = styled.div`
    display:flex;
    margin-top ${props => props.marTop};
    margin:${props => props.containermargin}
`
export const UsedCard = styled.div`
    display: flex;
    border-radius: 0.2rem;
    border: 0.1rem solid ${props => props.theme.formBorder};
    padding: 0.8rem 2rem 0.5rem;
    color: ${props => props.theme.gray};
    font-size: 1.4rem;
    font-weight: bold;
    margin: 1rem;
`
export const MainLabel = styled.div`
    margin-bottom: 0;
`
export const PaymentLabelPair = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
`
export const Select = styled.select`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.selectMargin};
    border: 1px solid ${props => props.theme.inputBorder};
    background: transparent;
    padding: 8px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: ${props => props.altArrow ? `url(${require('../../assets/images/down-arrow.svg')})` : `url(${require('../../assets/images/down-arrow.svg')})`};
    background-repeat: no-repeat;
    background-position: 98%;
    background-size: center;
    border-radius: 4px;
    color: ${props => props.theme.bodyText};
    &.pagination-select{
      width: 60px;
    }
    cursor:pointer;
    ::placeholder {
      font-size: ${props => props.fontSize ? props.fontSize : '12px'};
      color: ${props => props.theme.placeholder};
  }
  &:focus {
    transition: .3s;
    outline:none;
    border-radius: 4px;
}
`
Select.defaultProps = {
  width: '414px',
  height: '43px',
  seletMargin: '0'
}
export const TxtArea = styled.textarea`
    border: 1px solid ${props => props.theme.inputBorder};
    border-radius: 5px;
    width: ${props => props.width ? props.width : '250px'};
    height:${props => props.height ? props.height : '122px'} ;
    margin:${props => props.textareaMargin};
    padding: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.fontSize ? props.fontSize : '14px'};
    line-height: 18px;
    color: #3B3B3B;
    background:${props => props.theme.transparent};
    resize: none;
    &:focus {
      transition: .3s;
      outline:none;
      border-radius: 4px;
  }
  ::placeholder {
    font-size: ${props => props.fontSize ? props.fontSize : '12px'};
    color: ${props => props.theme.placeholder};
}
  &.textaltlabel{
    width: ${props => props.width ? props.width : '625px'};
    background: rgba(196, 196, 196, 0.12);
    border: 1px solid rgba(0, 0, 0, 0.11);
    border-radius: 0;
  }
`
export const NoLabelSelect = styled(Select)`
    margin: ${props => props.margin};
`
NoLabelSelect.defaultProps = {
  margin: '1rem'
}
export const FormContainer = styled.div`
    width: ${props => props.width};
`
export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 4rem;
`
export const TableHead = styled.div`
    width: 80rem;
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    padding: 1rem;
    margin-bottom: 1rem;
`
export const Total = styled(TableHead)`
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: 1.8rem;
    line-height: normal;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`
export const TableList = styled(TableHead)`
    border: 0.1rem solid ${props => props.theme.formBorder};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    /* font */
    color: ${props => props.theme.darkGray};
    font-weight: bold;
    font-size: 12px;
    line-height: normal;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`

export const DatePickerContainer = styled.div`
padding: 0 8px;
background: ${props => props.theme.white};
border-radius: 4px;
`
export const SearchInputContainer = styled(DatePickerContainer)`
padding: 0 30px;
`

export const SortInputContainer = styled(DatePickerContainer)`
position: relative;
padding: 12px 8px;
background: ${props => props.theme.transparent};
height:40px;
border: 1px solid ${props => props.theme.faintBorder};
display: flex;
justify-content: flex-start;
align-items:center;
`
export const Limit = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: rgba(0, 0, 0, 0.7);
margin-left: 24px;
`