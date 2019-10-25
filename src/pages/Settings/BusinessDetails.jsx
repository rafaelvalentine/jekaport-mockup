import React, { Component } from 'react'

// Components
import Layout from '../../container/DashboardWrapper'

// auth

// Generic Components
import { Wrapper, Row } from '../../theme/style/styles'
const styles = {
  Layout: {
    settingStatus: 'true'
  },
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
      <Layout
        {...styles.Layout}>
        <Wrapper
          className='fixedheight'
          {...styles.Wrapper}>
          <Row

            {...styles.Row}>
            business details
          </Row>

        </Wrapper>
      </Layout>
    )
  }
}

export default CompanyDashboard
