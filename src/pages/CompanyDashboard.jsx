import React, { Component } from 'react'

// auth
import { AUTH_TOKEN } from '../constants'

// Dashboard layout 
import moduleName from '../'

// import bus temporarily
import bus from '../images/bus.svg'

const styles = {
  table: {
    background: '#FFFFFF',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px'
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#006494'
  },
  tableBody: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px'
  },
  tableTitleBody: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '28px',
    color: 'rgba(0, 0, 0, 0.7)'
  },
  tableCell: {
    verticalAlign: 'middle'
  },
  titleTag: {
    background: '#006494',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    color: '#FFFFFF'
  },
  infoBox: {
    background: '#FFFFFF',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px'
  },
  infoBoxTitle: {
    fontSize: '14px',
    lineHeight: '16px',
    color: '#006494'
  },
  progressBar: {
    opacity: '0.7',
    border: '10px solid #1B98E0',
    transform: 'rotate(0.15deg)'
  },
  search: {
    border: '1px solid rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '3px'
  },
  searchText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '15px',
    color: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '3px'
  }

}

class CompanyDashboard extends Component {
  render () {
    // grab auth token from localstorage
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
			<>
  <section className='container-fluid'>
    <div className='row'>
      <article className='col-sm-12 p-md-3 p-sm-2'>
        <div className='d-flex flex-sm-column flex-md-row'>
          <img src='' alt='' />
          <p className='mx-md-4'><strong>Dashbaord &#124; Book</strong></p>

          <div className='ml-auto'>
            <input className='searchInput' style={styles.search} placeholder='Jul 31, 2019' />
          </div>
          {authToken && (
            <span
              onClick={() => {
				              localStorage.removeItem(AUTH_TOKEN)
				              this.props.history.push(`/login`)
				            }}>
										Logout
            </span>
				        )}
        </div>
      </article>

      <article className='col-sm-12 px-md-5 px-sm-2 py-md-4 py-sm-2'>
        <div className='row'>
          <div className='col-md-4 col-sm-12'>
            <div className='card' style={styles.infoBox}>
              <div className='card-body'>

                <section className='d-flex flex-md-row flex-column justify-content-between text-center'>
                  <div id='titleTag'>
                    <p style={styles.titleTag} id='textTag'>TODAY</p>
                    <img src='' alt='' />
                  </div>

                  <div>
                    <p style={styles.tableTitleBody}>560</p>
                    <p>Vehicle Listed</p>
                  </div>
                </section>

              </div>
            </div>
          </div>

          <div className='col-md-4 col-sm-12'>
            <div className='card' style={styles.infoBox}>
              <div className='card-body'>

                <section className='d-flex flex-md-row flex-column justify-content-between text-center'>
                  <div id='titleTag'>
                    <p style={styles.titleTag} id='textTag'>TODAY</p>
                    <img src='' alt='' />
                  </div>

                  <div>
                    <p style={styles.tableTitleBody}>200</p>
                    <p>Vehicle Listed</p>
                  </div>
                </section>

              </div>
            </div>
          </div>

          <div className='col-md-4 col-sm-12'>
            <div className='card' style={styles.infoBox}>
              <div className='card-body'>

                <section className='d-flex flex-md-row flex-column justify-content-between text-center'>
                  <div id='titleTag'>
                    <p style={styles.titleTag} id='textTag'>TODAY</p>
                    <img src='' alt='' />
                  </div>

                  <div>
                    <p style={styles.tableTitleBody}>20,800</p>
                    <p>Vehicle Listed</p>
                  </div>
                </section>

              </div>
            </div>
          </div>

        </div>
      </article>

      <article className='col-sm-12 p-md-3 p-sm-2'>
        <div className='row'>
          <div className='col-md-7 col-sm-12'>
            <p><strong>GRAPH</strong></p>
          </div>

          <div className='col-md-5 col-sm-12'>
            <div className='card' style={styles.infoBox}>
              <div className='card-body'>

                <section className='d-flex flex-column justify-content-around text-center'>
                  <p className='text-center' style={styles.title}>Custom Feedback</p>
                  <p className='text-center' style={styles.tableTitleBody}>2,800</p>

                  <div className='progress m-md-3'>
                    <div className='progress-bar w-75' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style={styles.progressBar} />
                  </div>

                  <div className='d-flex flex-column flex-md-row justify-content-around mt-md-3'>
                    <div>
                      <p style={styles.tableTitleBody}>90%</p>
                      <p style={styles.infoBoxTitle}>Positive</p>
                    </div>

                    <div>
                      <p style={styles.tableTitleBody}>10%</p>
                      <p style={styles.infoBoxTitle}>Negative</p>
                    </div>
                  </div>

                </section>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className='col-sm-12 p-md-3 p-sm-2'>
        <div className='row'>
          <div className='col-sm-12 table-responsive'>

            <table className='table' style={styles.table}>

              <thead style={styles.title} className='curvedHead'>
                <tr style={{ borderRadius: '15px' }}>
                  <th colSpan='10' style={{ borderRadius: '15px' }}>
													Vehicle Listed
                  </th>
                </tr>
              </thead>

              <thead style={styles.title}>
                <tr>
                  <td />
                  <th scope='col'>Types of Vehicle</th>
                  <th scope='col'>Vehicle Mode</th>
                  <th scope='col'>Route</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Departing Time</th>
                  <th scope='col'>Seats Available</th>
                  <th scope='col'>Status</th>
                </tr>
              </thead>

              <tbody style={styles.tableBody} className=''>
                <tr>
                  <td>
                    <img src={bus} alt='vehicle image' />
                  </td>
                  <td>Toyota Hiace</td>
                  <td>2007/XML9</td>
                  <td>Lagos-Abuja</td>
                  <td>N13,000</td>
                  <td>4:00am</td>
                  <td>12</td>
                  <td>
                    <button className='btn btn-small btnCustom btnSuccess px-4'>Left</button>
                  </td>
                  <td>@</td>
                  <td>@</td>
                </tr>

                <tr>
                  <td>
                    <img src={bus} alt='vehicle image' />
                  </td>
                  <td>Toyota Hiace</td>
                  <td>2007/XML9</td>
                  <td>Lagos-Abuja</td>
                  <td>N13,000</td>
                  <td>4:00am</td>
                  <td>12</td>
                  <td>
                    <button className='btn btn-small btnCustom btnWarning px-4'>Boarding</button>
                  </td>
                  <td>@</td>
                  <td>@</td>
                </tr>

                <tr>
                  <td>
                    <img src={bus} alt='vehicle image' />
                  </td>
                  <td>Toyota Hiace</td>
                  <td>2007/XML9</td>
                  <td>Lagos-Abuja</td>
                  <td>N13,000</td>
                  <td>4:00am</td>
                  <td>12</td>
                  <td>
                    <button className='btn btn-small btnCustom btnDanger px-4'>Maintenance</button>
                  </td>
                  <td>@</td>
                  <td>@</td>
                </tr>

                <tr>
                  <td>
                    <img src={bus} alt='vehicle image' />
                  </td>
                  <td>Toyota Hiace</td>
                  <td>2007/XML9</td>
                  <td>Lagos-Abuja</td>
                  <td>N13,000</td>
                  <td>4:00am</td>
                  <td>12</td>
                  <td>
                    <button className='btn btn-small btnDanger btnCustom px-4'>Maintenance</button>
                  </td>
                  <td>@</td>
                  <td>@</td>
                </tr>
              </tbody>

            </table>

          </div>
        </div>
      </article>

    </div>
  </section>
			</>
    )
  }
}

export default CompanyDashboard
