import React, { Component } from 'react'

// Components
import Layout from '../../container/DashboardWrapper'

// auth

// import temporarily
import Business from './BusinessDetailDashboard'

// Generic Components
import { Wrapper, Row } from '../../theme/style/styles'
const styles = {
  Wrapper: {
    height: '100%'
  },
  Row: {
    padding: '0 0 0 calc(120px)'
  }
}

class CompanyDashboard extends Component {
  render () {
    return (
      <Layout>
        <Wrapper {...styles.Wrapper}>
          <Row
            id='dashboard-row'
            {...styles.Row}>
            <Business />
          </Row>

        </Wrapper>
      </Layout>
    )
  }
}

export default CompanyDashboard
