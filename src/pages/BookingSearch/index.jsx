import React, { Component } from 'react'

// components
import Layout from '../../components/Layout'
import { BookATripFilter, BookATripFormAlt} from '../../components/Forms'
import { SponsorCard } from '../../components/Card'
import AllResults from './generalResults'
// images

// Generic Components
import { Wrapper, Row } from '../../theme/style/styles'
// import { SubLabel } from '../../theme/style/typeface'

// styles
import * as Page from './styles'
import { Title } from '../../theme/style/typeface'
import moment from 'moment'
const styles = {
  Wrapper: {
    height: 'calc(95vh - 40px)'
  },
  Title:{
    margin:'0 0 0 15px',
    color:'rgba(0, 0, 0, 0.7)'
  }
}

class BookingSearchResult extends Component {
  state = {
    data:[]
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.AllRoutes.length !== prevState.data.length){
      return {data: nextProps.AllRoutes, from: nextProps.from, to:nextProps.to, departureDate: nextProps.departureDate };
    }
    else return null;
  }
  componentDidMount () {

  }

  render () {
    const {departureDate, from, to } = this.state
    const date = departureDate !== '' ? moment(departureDate).format('Do MMM YYYY') : moment(new Date()).format('Do MMM YYYY')
    return (
      <Layout>
        <Wrapper
          {...styles.Wrapper}
          className='fixedheight-user'
        >
          <Page.MainContainer>
            <Row
              className='main-row'>
                <div>
                <Title 
                  {...styles.Title}
                  className='main-title'>
                      {`Showing Search result for ${from ||'Departure'} - ${to ||'Arrival'}, ${date}`}
                  </Title>
                  <Page.TitleHrLine />
                  <BookATripFilter className='main-filter' />
                  <Page.Results>
                    <AllResults className='generic-list' data={this.state.data} />
                  </Page.Results>
                </div>
                <div style={{margin:'0'}}>
                  <BookATripFormAlt />
                  <SponsorCard/>
                </div>
                
            </Row>
           
          </Page.MainContainer>
        </Wrapper>
      </Layout>
    )
  }
}

export default BookingSearchResult
