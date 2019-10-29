import React, { Component } from 'react'

// Components
import Layout from '../../container/DashboardWrapper'

// auth

// import temporarily
import Business from './BusinessDetailDashboard'

// Generic Components
import { Wrapper, Column } from '../../theme/style/styles'
import StyleWrapper from './styles'
const styles = {
  Wrapper: {
    height: 'calc(94vh - 103px)'
  },
  Header: {
    altHeader: 'true',
    marginHeader: '30px 0'
  },
  Column: {
    width: 'calc(100% - 120px)',
    margin: '0 0 45px 120px'
  }
}

class CompanyDashboard extends Component {
  render () {
    return (
      <Layout>
        <StyleWrapper>
          <Wrapper {...styles.Wrapper}>
            <Column
              {...styles.Column}>
              {/* <Business /> */}
            </Column>

          </Wrapper>
        </StyleWrapper>

      </Layout>
    )
  }
}

export default CompanyDashboard
