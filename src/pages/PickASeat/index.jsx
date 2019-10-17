import React, { Component } from 'react'
import { Wrapper, SubWrapper, SubWrapperAlt } from '../../theme/style/styles'
import { Header, SubLabel } from '../../theme/style/typeface'
import { CardWrapper, PickASeatCard } from '../../components/Card'

// For the Specific Styles for the Components
const styles = {
  Wrapper: {
    height: '100%'
  },
  SubLabel: {
    fontSize: '16px',
    lineHeight: '19px',
    color: '#006494'
  },
  CardWrapper: {
    width: '996px',
    height: '845px',
    margin: '0 0 70px',
    padding: '55px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  SubWrapperAlt: {
    padding: '90px 0 0',
    height: '50px'
  }
}
export default class index extends Component {
  render () {
    return (
      <Wrapper
        {...styles.Wrapper}
      >
        <SubWrapperAlt
          {...styles.SubWrapperAlt}>
          <Header>
            {null || 'Company Name'}
          </Header>
          <SubLabel
            style={styles.SubLabel}>
              Pick a Seat
          </SubLabel>
        </SubWrapperAlt>
        <SubWrapper>
          <CardWrapper
            {...styles.CardWrapper}
          >
            <PickASeatCard />
          </CardWrapper>
        </SubWrapper>
      </Wrapper>
    )
  }
}
