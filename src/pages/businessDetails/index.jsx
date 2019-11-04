import React, { Component } from 'react'

// Components
import Layout from '../../container/DashboardWrapper'
import { BusinessDetailsImage, BusinessInfoTab,
  MainDetailsWrapper, AboutUs, Terminals, Services, BusinessHour,
  BusinessDetailsNav, ShortInfoCard } from '../../components/Card'

// auth

// import temporarily
// import Business from './BusinessDetailDashboard'

// Generic Components
import { Wrapper, Column, Row } from '../../theme/style/styles'
import StyleWrapper from './styles'
const styles = {
  Wrapper: {
    height: 'calc(95.2vh - 80px)'
  },
  Header: {
    altHeader: 'true',
    marginHeader: '30px 0'
  },
  Column: {
    width: 'calc(100% - 120px)',
    margin: '40px auto 45px 120px'
  },
  firstRow: {
    width: '90%',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    padding: '0 20px'
  },
  DetailsRow: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    margin: '82px 0 0',
    padding: '0 20px',
    flexWrap: 'nowrap'
  }
}

class CompanyDashboard extends Component {
  render () {
    return (
      <Layout>
        <StyleWrapper>
          <Wrapper
            className='fixedheight'
            {...styles.Wrapper}>
            <Column
              {...styles.Column}>
              <Row
                {...styles.firstRow}>
                <BusinessDetailsImage {...this.props.User} />
                <BusinessInfoTab {...this.props.User} />
              </Row>
              <Row
                {...styles.DetailsRow}>
                <MainDetailsWrapper >
                  <AboutUs {...this.props.User} />
                  <Terminals {...this.props.User} />
                  <BusinessHour {...this.props.User} />
                  <Services {...this.props.User} />
                </MainDetailsWrapper>
                <div>
                  <BusinessDetailsNav />
                  <ShortInfoCard {...this.props.User} />
                </div>
              </Row>
            </Column>
          </Wrapper>
        </StyleWrapper>
      </Layout>
    )
  }
}

export default CompanyDashboard
