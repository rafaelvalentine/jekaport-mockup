import React, { Fragment } from 'react'
import Loader from 'react-loader-spinner'
import { Wrapper } from './styles'

const index = props => {
  return (
    <Fragment>
      
      {props.pageLoader ? <Wrapper>
        <Loader
          type='MutatingDots'
          color='#FD8A25'
          height={100}
          width={100}
        />
      </Wrapper> : null}
    </Fragment>
  )
}

export default index
