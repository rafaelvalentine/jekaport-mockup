import React, { Component } from 'react'

// Components
import Layout from '../../container/DashboardWrapper'

// auth

// import temporarily
import Dashboard from './oldIndex'

// Generic Components
import { Wrapper, Row } from '../../theme/style/styles'
const styles = {
  Wrapper: {
    height: 'calc(94vh - 103px)'
  },
  Row: {
    padding: '0 0 0 calc(120px)'
  }
}

class CompanyDashboard extends Component {
  render () {
    return (
      <Layout>
        <Wrapper
          className='fixedheight'
          {...styles.Wrapper}>
          <Row

            {...styles.Row}>
            {/* <Dashboard /> */}
          </Row>

        </Wrapper>
      </Layout>
    )
  }
}

export default CompanyDashboard
