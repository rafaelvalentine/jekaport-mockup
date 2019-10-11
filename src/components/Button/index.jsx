import React from 'react'
import { Logo } from '../Picture'
import Spinner from '../Tools/Spinner'
import * as ButtonStyle from './styles'


const Content = ({ content, ...props }) => (
  <ButtonStyle.Content { ...props }>
    { content } <Logo src={require('../../assets/images/right-arrow.svg')} width='22px' height='8px' />
  </ButtonStyle.Content>
)
const Button = ({ content, clicked, loading, ...props }) => {
  return (
    <ButtonStyle.Container disabled={loading} onClick={clicked} {...props}>
      { loading ? <Spinner /> : <Content content={content} justifyContent={props.justifyContent} /> }
    </ButtonStyle.Container>
  )
}


export default Button
