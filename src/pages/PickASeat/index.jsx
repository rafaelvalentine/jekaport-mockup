import React, { Component } from 'react'
import { Wrapper, Row, Column } from '../../theme/style/styles'
import { Header, SubLabel } from '../../theme/style/typeface'
import { CardWrapper, PickASeatCard } from '../../components/Card'
import Layout from '../../components/Layout'

// Specific Styles for the Components
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
  Column: {
    padding: '90px 0 0'
  }
}
export default class index extends Component {
  render () {
    return (
      <Layout>

        <Wrapper
          {...styles.Wrapper}
        >
          <Column
            {...styles.Column}>
            <Header>
              {null || 'Company Name'}
            </Header>
            <SubLabel
              style={styles.SubLabel}>
              Pick a Seat
            </SubLabel>
          </Column>
          <Row>
            <CardWrapper
              {...styles.CardWrapper}
            >
              <PickASeatCard />
            </CardWrapper>
          </Row>
        </Wrapper>
      </Layout>
    )
  }
}
