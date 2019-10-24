import React, { Component } from 'react'

// Components
import Layout from '../../components/DashboardWrapper'

// auth

// import temporarily
import Dashboard from './oldIndex'

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
            {/* <Dashboard /> */}
          </Row>

        </Wrapper>
      </Layout>
    )
  }
}

export default CompanyDashboard
