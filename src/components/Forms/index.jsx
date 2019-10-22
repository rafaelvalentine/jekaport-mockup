import React from 'react'
import * as Input from '../Input'
import { FormWrapper, ForgetPassword } from './styles'
// import { Label } from '../../theme/style/typeface'
import { CardWrapper } from '../Card'
import Button from '../Button'
import { Row } from '../../theme/style/styles'

export const ForgotPasswordForm = ({ ...props }) => {
  return (
    <CardWrapper
      width='662px'
      height='289px'
      boxShadow='0'
    >
      <FormWrapper>
        <Input.Main
          label='Email'
          placeholder='Enter Email'
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        <Button content='SUBMIT' onClick={props.onClick} />
      </FormWrapper>
    </CardWrapper>
  )
}
export const ResetPasswordForm = ({ ...props }) => {
  return (
    <CardWrapper
      width='662px'
      height='289px'
      boxShadow='0'
    >
      <FormWrapper>
        <Input.Main
          label='New Password'
          placeholder='Enter New Password'
          name='password'
          type='password'
          value={props.value}
          onChange={props.onChange}
          margin='50px auto 25px'
        />
        <Input.Main
          label='Confirm Password'
          placeholder='Confirm Password'
          name='confirmPassword'
          type='password'
          value={props.value}
          onChange={props.onChange}
          margin='25px auto'
        />
        <Button content='SUBMIT' onClick={props.onClick} />
      </FormWrapper>
    </CardWrapper>
  )
}
export const LoginForm = ({ ...props }) => {
  return (
    <CardWrapper
      width='100%'
      height='350px'
      boxShadow='0'
      alignItems='flex-start'
      {...props}
    >
      <FormWrapper>
        <Input.Main
          label='Email'
          placeholder='Enter Email'
          name='email'
          type='email'
          value={props.inputs.email}
          onChange={props.onChange}
          margin='30px auto 25px'
        />
        <Input.Main
          label='Password'
          placeholder='Enter Password'
          name='password'
          type='password'
          value={props.inputs.password}
          onChange={props.onChange}
          margin='25px auto 0'
        />
        <Button content='LOGIN' onClick={props.clicked} margin='40px auto 10px' loading={props.inputs.loading} />
        <ForgetPassword onClick={() => props.history.push('/login/forgotpassword')}>
            Forgot Password?
        </ForgetPassword>
      </FormWrapper>
    </CardWrapper>
  )
}
export const PartnerFormOne = ({ ...props }) => {
  return (
    <CardWrapper
      width='100%'
      height='350px'
      boxShadow='0'
      alignItems='flex-start'
      {...props}
    >
      <FormWrapper>
        <Input.Main
          label='Name of Individual (Registering for Company)'
          placeholder='Enter Name'
          name='repName'
          type='text'
          value={props.inputs.repName}
          onChange={props.handleOnChange}
          margin='30px auto 0'
        />
        <Input.Main
          label='Email'
          placeholder='Enter Email'
          name='repEmail'
          type='email'
          value={props.inputs.repEmail}
          onChange={props.handleOnChange}
          margin='20px auto 0'
        />

        <Input.MainPhoneFormatter
          label='Phone Number'
          placeholder='Enter Phone Number'
          name='repPhone'
          type='text'
          value={props.inputs.repPhone}
          onValueChange={props.onValueChange}
          format='+234(#) ### ### ####'
          mask='_'
          margin='20px auto 0'
        />
        <Input.Main
          label='Number on Means of Identification (Individual Registering for Company )'
          placeholder='eg: 123456'
          name='repIdNumber'
          type='text'
          value={props.inputs.repIdNumber}
          onChange={props.handleOnChange}
          margin='20px auto 0'
        />
        <Input.MainUpload
          label='Upload Means of Identification (Individual Registering for Company )'
          placeholder={props.inputs.repIdFilename || 'Browse'}
          type='file'
          onChange={props.onFileChange}
          width='138px'
          margin='20px auto 0 0'
        />
        <Button
          content='NEXT'
          loading={props.inputs.loading}
          width='218px'
          height='32px'
          onClick={props.handleRegister}
          margin='20px 0 10px auto' />
      </FormWrapper>
    </CardWrapper>
  )
}
export const PartnerFormTwo = ({ ...props }) => {
  return (
    <CardWrapper
      width='100%'
      height='350px'
      boxShadow='0'
      alignItems='flex-start'
      {...props}
    >
      <FormWrapper>
        <Input.Main
          label='Name of Company (As it appears on CAC Documents)'
          placeholder='Enter Name'
          name='companyName'
          type='text'
          value={props.inputs.companyName}
          onChange={props.handleOnChange}
          margin='30px auto 0'
        />
        <Input.Main
          label='Business Address '
          placeholder='Enter Address'
          name='businessAddress'
          type='text'
          value={props.inputs.businessAddress}
          onChange={props.handleOnChange}
          margin='20px auto 0'
        />

        <Input.Main
          label='RC Number'
          placeholder='eg: 123456'
          name='rcNumber'
          type='text'
          value={props.inputs.rcNumber}
          onChange={props.handleOnChange}
          margin='20px auto 0'
        />
        <Input.Main
          label='Email Address'
          placeholder='eg: example@example.com'
          name='email'
          type='email'
          value={props.inputs.email}
          onChange={props.handleOnChange}
          margin='20px auto 0'
        />

        <Input.MainPhoneFormatter
          label='phoneNumber'
          placeholder='eg: +234(0) 800 000 0000'
          name='repPhone'
          type='text'
          onValueChange={props.onValueChange}
          format='+234(#) ### ### ####'
          mask='_'
          margin='20px auto 0'
        />
        <Input.Main
          label='Password'
          placeholder='Enter Password'
          name='password'
          type='password'
          value={props.inputs.password}
          onChange={props.handleOnChange}
          margin='25px auto 0'
        />
        <Row
          justifyContent='flex-start'>
          <Input.CheckBox
            name='terms'
            onChange={props.handleCheckbox}
            type='checkbox'
            label='I accept the'
            checked={props.inputs.terms}
          />
        </Row>

        <Row>
          <Button
            altButton='true'
            content='PREVIOUS'
            width='218px'
            height='32px'
            onClick={props.handleGoBack}
            margin='20px 0 10px auto' />
          <Button
            content='NEXT'
            width='218px'
            height='32px'
            onClick={props.handleRegister}
            margin='20px 0 10px auto' />
        </Row>

      </FormWrapper>
    </CardWrapper>
  )
}
