import React from 'react'
import * as Input from '../Input'
import { Wrapper, Container, ContainerAlt, Field, ForgetPassword } from './styles'
import { Label } from '../../theme/style/typeface'
import { BlogFormCard, LoginCard } from '../Card'
import Button from '../Button'

export const Select = ({ changed, value, name, placeholder, children, ...props }) => {
  return (

    <Input.SelectAlt
      {...props}
    >
      <option hidden> {placeholder || 'Choose'} </option>
      { children }
    </Input.SelectAlt>
  )
}

export const SelectAlt = ({ changed, value, name, ...props }) => {
  return (
    <Wrapper>
      <Input.SelectAlt
        changed={changed}
        {...props}
      >
        {/* <option hidden> chart </option> */}
        <option value='bar'>Bar Chart</option>
        <option value='line'>Line Chart </option>
      </Input.SelectAlt>
    </Wrapper>
  )
}

const UsersBanks = ({ bankinfo }) => {
  return (
    <Container>
      <Label alt>Banks on Platform</Label>
      {bankinfo && bankinfo.length > 0 ? <BankFields bankinfo={bankinfo} /> : <Field alt>No Bank Accounts</Field>}
    </Container>
  )
}
const UsersCard = ({ cardInfo }) => {
  return (
    <Container>
      <Label alt >Cards on Platform</Label>
      {cardInfo && cardInfo.length > 0 ? <CardFields cards={cardInfo} /> : <Field alt>No Cards</Field>}
    </Container>
  )
}

const BankFields = ({ banks }) => banks.map(bank => (
  <Container key={Math.random()}>
    <Field>{bank.bankName || 'Unknown Account'}</Field>
  </Container>
))
const CardFields = ({ cards }) => cards.map(card => (
  <Container key={Math.random()}>
    <Field>{ `${card.cardType} ****${card.last4Digits}` || 'Unknown Cards'}</Field>
  </Container>
))
export const AccountInfo = ({ usersBank, usersCard }) => (
  <ContainerAlt >
    <UsersBanks bankInfo={usersBank} />
    <UsersCard cardInfo={usersCard} />
  </ContainerAlt>
)

export const SelectTrio = props => (
  <Wrapper>
    <Select name='users' placeholder='Highest users' altArrow width='188px' height='45px'>
      <option>1000</option>
    </Select>
    <Select name='location' placeholder='Location' altArrow width='162px' height='45px'>
      <option>Nigeria</option>
    </Select>
    <Select name='date' placeholder='Earliest Date' altArrow width='150px' height='45px'>
      <option>today</option>
    </Select>
  </Wrapper>
)

export const BlogForm = ({ inputs, handleBlogInputs, handleImageChange, ...props }) => {
  return (
    <BlogFormCard>
      <Input.Main type='text' label='Title' name='title' value={inputs.title} changed={handleBlogInputs} altLabelColor />
      <Input.Main type='file' placeholder='Please upload an image format' label='Content upload' name='imageUrl' value={inputs.imageUrl} changed={handleImageChange} altLabelColor />
      <Input.Main type='text' label='Tags' name='tags' placeholder='#tags, #tags2, #tags3, ' value={inputs.tags} changed={handleBlogInputs} altLabelColor />
    </BlogFormCard>
  )
}

export const LoginForm = ({ handleLoginInputs, inputs, handleLogin, ...props }) => {
  return (
    <LoginCard>
      <Input.Main placeholder='name@firsthomes.com' value={inputs.admin.email} type='email' label='Email' name='email' changed={handleLoginInputs} width='380px' height='50px' margin='0' marTop='5px'fontSize='16px' />
      <Input.Main placeholder='********' type='password' label='Password' value={inputs.admin.password} name='password' changed={handleLoginInputs} width='380px' height='50px' margin='0' marTop='5px' fontSize='16px' />
      <Button content='Log in' width='380px' height='50px' fontSize='16px' loading={inputs.loading} clicked={handleLogin} />
      <ForgetPassword>
          Forgot password
      </ForgetPassword>
    </LoginCard>
  )
}
