import React from 'react'
import * as Type from '../../theme/style/typeface'
import * as Form from '../../theme/style/Form'



export const Main = ({ name, label, placeholder, type, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.MainLabel>
        <Type.BoldLabel {...props}><span style={{ color: '#FF6000' }}>#</span>{ label }</Type.BoldLabel>
      </Form.MainLabel>
      <Form.MainInput
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changed}
        {...props} />
    </Form.MainLabelContainer >
  )
}

export const Select = ({ name, label, children, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainer >
      <Form.MainLabel >
        <Type.BoldLabel > { label } </Type.BoldLabel> <br />
      </Form.MainLabel>
      <Form.Select name={name} value={value} onChange={changed} {...props}> { children } </Form.Select>
    </Form.MainLabelContainer >
  )
}


export const Text = ({ label, name, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainer>
      <Form.MainLabel >
        <Type.BoldLabel {...props}> <span style={{ color: '#FF6000' }}>#</span>{ label } </Type.BoldLabel>
      </Form.MainLabel >
      <Form.TxtArea name={name} value={value} onChange={changed} {...props} />
    </Form.MainLabelContainer >
  )
}
export const CheckBox = ({ label, name, type, ...props }) => {
  return (
    <Form.CheckBoxLabel >
      <Form.MainLabel>
        <Type.BoldLabel > { label } </Type.BoldLabel>
      </Form.MainLabel >
      <Form.CheckBox name={name} type={type} {...props} />
      <span className='checkmark' />
    </Form.CheckBoxLabel >
  )
}

// export default Input
