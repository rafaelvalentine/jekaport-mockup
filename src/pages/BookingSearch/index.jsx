import React, { Component } from 'react'

// components
import Layout from '../../components/Layout'
import { BookATripFilter } from '../../components/Forms'
import AllResults from './generalResults'
// images

// Generic Components
import { Wrapper, Row } from '../../theme/style/styles'
// import { SubLabel } from '../../theme/style/typeface'

// styles
import * as Page from './styles'
const styles = {
  Wrapper: {
    height: 'calc(95vh - 40px)'
  }
}

class BookingSearchResult extends Component {
  state={
    data:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
  }
  componentDidMount () {

  }

  render () {
    return (
      <Layout>
        <Wrapper
          {...styles.Wrapper}
          className='fixedheight-user'
        >
          <Page.MainContainer>
            <Row
              className='main-row' >
              <BookATripFilter />
            </Row>
            <Page.Results>
              <AllResults className='generic-list' data={this.state.data} />
            </Page.Results>

          </Page.MainContainer>
        </Wrapper>
      </Layout>
    )
  }
}

export default BookingSearchResult
