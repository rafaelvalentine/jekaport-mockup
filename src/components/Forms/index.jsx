import React from 'react'
import * as Input from '../Input'
import { FormWrapper, ForgetPassword} from './styles'
// import { Label } from '../../theme/style/typeface'
import { CardWrapper } from '../Card'
import Button from '../Button'

export const ForgotPasswordForm = ({ ...props }) => {
  return (
    <CardWrapper
      width='662px'
      height='289px'
    >
      <FormWrapper>
        <Input.Main label='Email'
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
    >
      <FormWrapper>
        <Input.Main label='New Password'
          placeholder='Enter New Password'
          name='password'
          type='password'
          value={props.value}
          onChange={props.onChange}
          margin='50px auto 25px'
        />
        <Input.Main label='Confirm Password'
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
      width='642px'
      height='350px'
      { ...props }
    >
      <FormWrapper>
        <Input.Main label='Email'
          placeholder='Enter Email'
          name='email'
          type='email'
          value={props.inputs.email}
          onChange={props.onChange}
          margin='30px auto 25px'
        />
        <Input.Main label='Password'
          placeholder='EnterPassword'
          name='password'
          type='password'
          value={props.inputs.password}
          onChange={props.onChange}
          margin='25px auto 0'
        />
        <Button content='SUBMIT' onClick={props.onClick} margin='40px auto 10px' />
        <ForgetPassword>
            Forgot Password?
        </ForgetPassword>
      </FormWrapper>
    </CardWrapper>
  )
}