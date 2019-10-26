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
export const MainAltLabel = ({ name, label, placeholder, type, value, onChange, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.AltBox>
        <Form.MainLabel>
          <Type.BoldLabel {...props}>{ label } </Type.BoldLabel>
        </Form.MainLabel>
        <Form.MainInput
          className='inputaltlabel'
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props} />
      </Form.AltBox>

    </Form.MainLabelContainer >
  )
}
export const MainAltLabelAlt = ({ name, label, media, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.AltBox>
        <Form.MainLabel>
          <Type.BoldLabel {...props}>{ label } </Type.BoldLabel>
        </Form.MainLabel>
        <Form.AltBox>
          <Form.MainInput className='inputaltlabel' name={name} {...props} />
          <Form.Limit>
            {media}
          </Form.Limit>
        </Form.AltBox>
      </Form.AltBox>
    </Form.MainLabelContainer>
  )
}
export const MainPhoneFormatter = ({ name, label, placeholder, type, onValueChange, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.MainLabel >
        <Type.BoldLabel {...props}> { label } </Type.BoldLabel>
      </Form.MainLabel>
      <Formatter
        className='formatter'
        displayType={'input'}
        placeholder={placeholder}
        onValueChange={onValueChange}
        {...props} />
    </Form.MainLabelContainer>
  )
}
export const MainFormatter = ({ name, label, placeholder, type, onValueChange, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.MainLabel >
        <Type.BoldLabel {...props}> { label } </Type.BoldLabel>
      </Form.MainLabel>
      <Formatter
        className='formatter'
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
    </Form.MainLabelContainer>
  )
}
export const MainUploadAlt = ({ name, label, placeholder, ...props }) => {
  return (
    <Form.MainLabelContainer htmlFor='partner-attachment' {...props}>
      <Form.AltBox>
        <Form.MainLabel>
          <Type.BoldLabel {...props}>{ label } </Type.BoldLabel>
        </Form.MainLabel>
        <Form.AltBox>
          <Form.MainInputDisabled
            className='altdisabledinput'
            width={props.width}
            height={props.height}
            inputMargin={props.inputMargin} >{placeholder}</Form.MainInputDisabled>
          <Form.Limit>
            Upload file (Not more than 2mb)
          </Form.Limit>
          <Form.MainInput type='file' id='partner-attachment' name={name} style={{ display: 'none' }} {...props} />
        </Form.AltBox>
      </Form.AltBox>
    </Form.MainLabelContainer>
  )
}

export const Select = ({ name, label, children, value, changed, ...props }) => {
  return (
    <Form.MainLabelContainer >
      <Form.MainLabel >
        <Type.BoldLabel {...props} > { label } </Type.BoldLabel>
      </Form.MainLabel>
      <Form.Select name={name} value={value} onChange={changed} {...props}> { children } </Form.Select>
    </Form.MainLabelContainer >
  )
}

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
export const TextAltLabel = ({ label, name, value, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      <Form.AltBox style={{alignItems: 'flex-start'}}>
        <Form.MainLabel>
          <Type.BoldLabel {...props}>{ label } </Type.BoldLabel>
        </Form.MainLabel>
        <Form.TxtArea className='textaltlabel' name={name} value={value} {...props} />
      </Form.AltBox>
    </Form.MainLabelContainer >
  )
}
export const CheckBox = ({ label, name, type, ...props }) => {
  return (
    <Form.CheckBoxLabel className={props.labelClass}>
      <Form.MainLabel>
        <Type.BoldLabel> { label } </Type.BoldLabel>
      </Form.MainLabel>
      <Form.CheckBox name={name} type={type} {...props} />
      <span className='checkmark' />
    </Form.CheckBoxLabel >
  )
}

// export default Input
