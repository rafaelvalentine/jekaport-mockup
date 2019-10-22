import React from 'react'
import * as Type from '../../theme/style/typeface'
import * as Form from '../../theme/style/Form'
import { Image } from '../../components/Picture'
import { Formatter } from '../../components/Tools/Formatter'

export const Main = ({ name, label, placeholder, type, value, onChange, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.MainLabel>
        <Type.BoldLabel {...props}>{ label }</Type.BoldLabel>
      </Form.MainLabel>
      <Form.MainInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props} />
    </Form.MainLabelContainer >
  )
}
export const MainPhoneFormatter = ({ name, label, placeholder, type, onValueChange, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.MainLabel >
        <Type.BoldLabel > { label } </Type.BoldLabel>
      </Form.MainLabel>
      <Formatter
        className='phonenumber-formatter'
        displayType={'input'}
        placeholder={placeholder}
        onValueChange={onValueChange}
        {...props} />
    </Form.MainLabelContainer>
  )
}

export const MainUpload = ({ name, label, placeholder, ...props }) => {
  return (
    <Form.MainLabelContainer htmlFor='partner-attachment' {...props}>
      <Form.MainLabel>
        <Type.BoldLabel {...props}>{ label }</Type.BoldLabel>
      </Form.MainLabel>
      <Form.AltBox >
        <div>
          <Form.MainInputDisabled
            width={props.width}
            height={props.height} >{placeholder}</Form.MainInputDisabled>
          <Image src={require('../../assets/images/attachment_file.svg')} width='32px' height='32px' margin='0 8px' cursor='pointer' />
        </div>
        <Form.MainInput type='file' id='partner-attachment' name={name} style={{ display: 'none' }} {...props} />
      </Form.AltBox>

    </Form.MainLabelContainer >
  )
}

// export const Select = ({ name, label, children, value, changed, ...props }) => {
//   return (
//     <Form.MainLabelContainer >
//       <Form.MainLabel >
//         <Type.BoldLabel > { label } </Type.BoldLabel> <br />
//       </Form.MainLabel>
//       <Form.Select name={name} value={value} onChange={changed} {...props}> { children } </Form.Select>
//     </Form.MainLabelContainer >
//   )
// }

export const Text = ({ label, name, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainer>
      <Form.MainLabel >
        <Type.BoldLabel {...props}> { label } </Type.BoldLabel>
      </Form.MainLabel >
      <Form.TxtArea name={name} value={value} onChange={changed} {...props} />
    </Form.MainLabelContainer >
  )
}
export const CheckBox = ({ label, name, type, ...props }) => {
  return (
    <Form.CheckBoxLabel className={props.labelClass}>
      <Form.MainLabel>
        <Type.BoldLabel > { label } </Type.BoldLabel>
      </Form.MainLabel >
      <Form.CheckBox name={name} type={type} {...props} />
      <span className='checkmark' />
    </Form.CheckBoxLabel >
  )
}

// export default Input
