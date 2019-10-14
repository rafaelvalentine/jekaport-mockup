import React from 'react'
import { Logo } from '../Picture'
import Spinner from '../Tools/Spinner'
import * as ButtonStyle from './styles'


const Content = ({ content, ...props }) => (
  <ButtonStyle.Content { ...props }>
    { content }
  </ButtonStyle.Content>
)
const Button = ({ content, onClick, loading, ...props }) => {
  return (
    <ButtonStyle.Container disabled={loading} onClick={onClick} {...props}>
      { loading ? <Spinner /> : <Content content={content} justifyContent={props.justifyContent} /> }
    </ButtonStyle.Container>
  )
}


export default Button
