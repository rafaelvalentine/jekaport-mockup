<<<<<<< HEAD
import React, { Component } from 'react'
=======
import React from 'react';
>>>>>>> dashboard

// Components
import Title from '../components/Title'

const NotFound = () => {
  return (
        <>
<<<<<<< HEAD
          <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Title
              title='404'
              titleStyle={{ padding: 10 }}
              subTitle="Oops! The page you are looking for doesn't exist"
              subTitleStyle={{ padding: 15, borderLeft: '1px solid #c0c0c0', color: '#c0c0c0' }}
            />
          </div>
=======
            <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Title 
                    title="404" 
                    subTitle="Oops! The page you are looking for doesn't exist" 
                    titleStyle={{padding: 10}} 
                    subTitleStyle={{padding: 15, borderLeft: "1px solid #c0c0c0", color: "#c0c0c0"}} 
                />
            </div>
>>>>>>> dashboard
        </>
  )
}

export default NotFound
