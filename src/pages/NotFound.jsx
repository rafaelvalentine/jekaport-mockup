import React, { Component } from 'react';
import Title from '../components/Title';

class NotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{padding: 10}}>
                    404
                </h1>
                <h5 style={{padding: 15, borderLeft: "1px solid #c0c0c0", color: "#c0c0c0"}}>
                    Oops! The page you are looking for doesn't exist
                </h5>
            </div>
         );
    }
}
 
export default NotFound;