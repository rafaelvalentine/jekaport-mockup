import React from 'react'

const styles = {
  formStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#006494'
  },
  btnStyle: {
    background: '#006494',
    backdropFilter: 'blur(4px)',
    borderRadius: '5px',
    borderColor: '#006494',
    color: '#FFF',
    fontSize: '14px',
    lineHeight: '16px',
    padding: '11px'
  },
  card: {
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px'
  },
  inputStyle: {
    fontSize: '14px',
    lineHeight: '16px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    borderRadius: '5px'
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#006494'
  }
}

const BookTripForm = () => {
  return (
		<>
  <section className='py-4 px-5' style={styles.card}>
    <form>

      <h2 className='text-center' style={styles.title}>Book a Trip</h2>

      <div className='form-row py-3'>
        <div className='col-md px-2'>
          <label style={styles.formStyle} htmlFor='fromWhere'>From Where?</label>
          <input type='text' className='form-control' placeholder='e.g Victoria Island, Lagos' style={styles.inputStyle} />
        </div>

        <div className='col-md px-2'>
          <label style={styles.formStyle} htmlFor='toWhere'>To Where?</label>
          <input type='text' className='form-control' placeholder='Ring road, Ibadan' style={styles.inputStyle} />
        </div>
      </div>

      <div className='form-row py-3'>
        <div className='col-md px-2'>
          <label style={styles.formStyle} htmlFor='when'>When?</label>
          <input type='text' className='form-control' placeholder='12, September 2019' style={styles.inputStyle} />
        </div>

        <div className='col-md px-2'>
          <label style={styles.formStyle} htmlFor='typeOfTrip'>Type Of Trip?</label>
          <select type='select' className='form-control' placeholder='One way trip' style={styles.inputStyle}>
            <option>Select</option>
            <option>One way</option>
            <option>Two Way</option>
          </select>
        </div>
      </div>

      <div className='form-check'>
        <input className='form-check-input' type='checkbox' value='' id='termsAndPolicies' />
        <label className='form-check-label' htmlFor='termsAndPolicies'>
          <span style={styles.formStyle}> Would you like to hire a vehicle?</span>
        </label>
      </div>

      <div className='d-flex justify-content-center align-items-center mt-5'>
        <button style={styles.btnStyle} className='btn btn-lg btn-block btnCustom'>Continue</button>
      </div>

    </form>
  </section>
		</>
  )
}

export default BookTripForm
