import React from 'react'
import * as Input from '../Input'
import { FormWrapper, ForgetPassword, Terms } from './styles'
// import { Label } from '../../theme/style/typeface'
import { CardWrapper } from '../Card'
import Button from '../Button'
import { Row } from '../../theme/style/styles'
import { SubLabel } from '../../theme/style/typeface'

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
          name='email'
          value={props.inputs.email}
          onChange={props.handleOnChange}
        />
        <Button loading={props.inputs.loading} content='SUBMIT' onClick={props.handleSumbit} />
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
          value={props.inputs.password}
          onChange={props.handleOnChange}
          margin='0 auto 25px'
        />
        <Input.Main
          label='Confirm Password'
          placeholder='Confirm Password'
          name='confirmPassword'
          type='password'
          value={props.inputs.confirmPassword}
          onChange={props.handleOnChange}
          margin='0 auto 10px'
        />
        <Button content='SUBMIT' loading={props.inputs.loading} onClick={props.handleSumbit} />
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
          <Terms onClick={props.handleTerms}>
          Terms & Policies
          </Terms>
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
            loading={props.inputs.loading}
            onClick={props.handleSignUp}
            margin='20px 0 10px auto' />
        </Row>

      </FormWrapper>
    </CardWrapper>
  )
}

export const UpdateProFileForm = ({ ...props }) => {
  return (
    <CardWrapper
      width='80%'
      height='350px'
      alignItems='center'
      padding='24px 0 90px'
      justifyContent='flex-start'
      {...props}
    >
      <SubLabel>
        Company Details
      </SubLabel>
      <FormWrapper
        alignItems='flex-start'
      >
        <Input.MainAltLabel
          width='625px'
          inputMargin='0 0 0 150px'
          margin='30px 0 0 '
          label='Company Name:'
          name='companyName'
          value={props.inputs.companyName}
          onChange={props.handleOnChange}
        />
        <Input.MainUploadAlt
          width='120px'
          inputMargin='0 0 0 165px'
          margin='30px 0 0 '
          label='Company Logo:'
          onChange={props.handleFileChange}
          placeholder={props.inputs.logoName || 'Browser'} />
        <Input.MainAltLabel
          width='625px'
          inputMargin='0 0 0 158px'
          margin='30px 0 0 '
          label='Business Type:'
          placeholder='e.g: Transportation Services, Logistics, e.t.c'
          name='businessType'
          value={props.inputs.businessType}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabel
          width='625px'
          inputMargin='0 0 0 198px'
          margin='30px 0 0 '
          label='Address:'
          placeholder='Enter address here'
          name='businessAddress'
          value={props.inputs.businessAddress}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabel
          width='625px'
          inputMargin='0 0 0 215px'
          margin='30px 0 0 '
          label='Email:'
          placeholder='test@example.com'
          name='email'
          value={props.inputs.email}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabel
          width='625px'
          inputMargin='0 0 0 136px'
          margin='30px 0 0 '
          label='Phone Number(s):'
          placeholder='Separate each Number with a comma (,)'
          name='phoneNumber'
          value={props.inputs.phoneNumber}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabelAlt
          width='281px'
          inputMargin='0 0 0 172px'
          margin='30px 0 0 '
          label='Social Media:'
          placeholder='Enter Page Profile Url'
          media='Facebook'
          name='facebook'
          value={props.inputs.facebook}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabelAlt
          width='281px'
          inputMargin='0 0 0 248px'
          margin='30px 0 0'
          label=''
          placeholder='Enter Page Profile Url'
          media='Twitter'
          name='twitter'
          value={props.inputs.twitter}
          onChange={props.handleOnChange}
        />
        <Input.MainAltLabelAlt
          width='281px'
          inputMargin='0 0 0 248px'
          margin='30px 0 0 '
          label=''
          placeholder='Enter Page Profile Url'
          media='Instagram'
          name='instagram'
          value={props.inputs.instagram}
          onChange={props.handleOnChange}
        />
        <Button
          content='UPDATE'
          width='625px'
          loading={props.inputs.loading}
          onClick={props.handleSubmit}
          margin='80px 10px 10px auto' />
      </FormWrapper>
    </CardWrapper>

  )
}
