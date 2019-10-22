import React from 'react'
import * as FootStyle from './styles'
import { Row } from '../../theme/style/styles'
// footer components


const Footer = () => {
  return (
  // footer here is html 5 tag for semantic meaning. it is not a react component
    <FootStyle.Footer>

      <Row
        justifyContent='space-between'
        padding='0 40px'>
        <FootStyle.Container><span>Copyright @ 2018</span></FootStyle.Container>
        <FootStyle.Container>
          <span>About Us</span>
          <span>Terms & policies</span>
          <span>Contact Us</span>
        </FootStyle.Container>
      </Row>
    </FootStyle.Footer>
  )
}

export default Footer
