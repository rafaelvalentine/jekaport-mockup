import React, { Component } from 'react'

// Components
import Title from '../components/Title'

const NotFound = () => {
  return (
        <>
          <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Title
              title='404'
              titleStyle={{ padding: 10 }}
              subTitle="Oops! The page you are looking for doesn't exist"
              subTitleStyle={{ padding: 15, borderLeft: '1px solid #c0c0c0', color: '#c0c0c0' }}
            />
          </div>
        </>
  )
}

export default NotFound
