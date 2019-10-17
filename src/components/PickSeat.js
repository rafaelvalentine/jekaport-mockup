import React from 'react'

// images
import AvailableCarSeat from '../images/AvailableCarSeat.svg'
import BlockedCarSeat from '../images/BlockedCarSeat.svg'
import BookedCarSeat from '../images/BookedCarSeat.svg'

const styles = {
    seatsSquare: {
        maxWidth: '390px',
        maxHeight: '289px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px'
    },
    modal: {
        maxWidth: '996px',
        maxHeight: '841px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px'
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#006494'
    },
    formHeader: {
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#000000'
    },
    formTitle: {
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '21px',
        color: '#006494'
    },
    input: {
        fontSize: '12px'
    },
    btnCustom: {
        background: '#006494',
        backdropFilter: 'blur(4px)',
        borderRadius: '5px',
        color: '#FFFFFF',
        width: '409px',
        height: '43px'
    },
    hrLine: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        marginBottom: '1px'
    },
    BookingDetail: {
        background: '#FFFFFF',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px'
    },
    BookingDetailTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#006494'
    },
    BookingDetailTitleValue: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        color: 'rgba(0, 0, 0, 0.7)'
    }
}

const ChooseSeat = ({ closeModal }) => {
        return ( <
            div / >
        )
    }
    // const ChooseSeat = ({ closeModal }) => {
    //   return (
    //     <section className='container-fluid' style={styles.modal}>
    //       <h5 className='text-center' style={styles.title}>Pick Seat</h5>

//       <article className='row d-flex flex-column justify-content-center align-items-center py-sm-2'>
//         <div className='col-sm-12 p-md-5 p-sm-2'>
//           <div className='row'>
//             <article className='col-md-7 col-sm-12 d-flex flex-column flex-md-row'>
//               <div className='card' style={styles.seatsSquare}>
//                 <div className='card-body'>
//                   <table>
//                     <tbody>
//                       <tr>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                       </tr>
//                       <tr>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                       </tr>
//                       <tr>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                       </tr>
//                       <tr>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                         <td className='px-md-4 py-md-2 py-sm-1 px-sm-3'><img src={AvailableCarSeat} alt='Car Seat' /></td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               <div className='seatKey d-flex flex-row flex-md-column justify-content-center px-md-3 px-sm-2 my-3'>
//                 <article className='d-flex justify-content-center p-md-1'>
//                   <img src={AvailableCarSeat} alt='Available Car Seat' />
//                   <p className='pl-md-2 pl-sm-1'>Available</p>
//                 </article>
//                 <article className='d-flex justify-content-center p-md-1'>
//                   <img src={BookedCarSeat} alt='Booked Car Seat' />
//                   <p className='pl-md-2 pl-sm-1'>Booked</p>
//                 </article>
//                 <article className='d-flex justify-content-center p-md-1'>
//                   <img src={BlockedCarSeat} alt='Blocked Car Seat' />
//                   <p className='pl-md-2 pl-sm-1'>Blocked</p>
//                 </article>
//               </div>
//             </article>

//             <article className='col-md-5 col-sm-12 d-flex justify-content-center align-items-center'>
//               <div style={styles.BookingDetail} className='card w-100'>
//                 <div className='card-body'>
//                   <article className='d-flex justify-content-between'>
//                     <h5 style={styles.BookingDetailTitle}>Total Amount Due:</h5>
//                     <p style={styles.BookingDetailTitleValue}>N 1200</p>
//                   </article>
//                   <article className='d-flex justify-content-between'>
//                     <h5 style={styles.BookingDetailTitle}>Discount:</h5>
//                     <p style={styles.BookingDetailTitleValue}>N 0.00</p>
//                   </article>
//                   <article className='d-flex justify-content-between'>
//                     <h5 style={styles.BookingDetailTitle}>Total To Pay:</h5>
//                     <p style={styles.BookingDetailTitleValue}>N 1200</p>
//                   </article>
//                 </div>
//               </div>
//             </article>
//           </div>
//         </div>
//         <div style={styles.hrLine} className='w-100 pt-md-5 pt-sm-2' />
//         <div className='container col-sm-12 py-md-4 py-sm-2 px-md-5 px-sm-0'>
//           <h4>Personal details</h4>

//           <form>
//             <div className='row'>
//               <div className='col-lg py-md-3 py-sm-2'>
//                 <label style={styles.formTitle}>Full Name (As it appears on means of identification)</label>
//                 <input style={styles.input} type='text' className='form-control' placeholder='First name' />
//               </div>

//               <div className='col-lg py-md-3 py-sm-2'>
//                 <label style={styles.formTitle}>Email</label>
//                 <input style={styles.input} type='text' className='form-control' placeholder='Last name' />
//               </div>
//             </div>

//             <div className='row'>
//               <div className='col-lg py-md-3 py-sm-2'>
//                 <label style={styles.formTitle}>Phone Number</label>
//                 <input style={styles.input} type='tel' className='form-control' placeholder='First name' />
//               </div>

//               <div className='col-lg py-md-3 py-sm-2'>
//                 <label style={styles.formTitle}>Method of Payment</label>
//                 <select style={styles.input} type='select' className='form-control' placeholder='choose payment method'>
//                   <option>Select</option>
//                   <option>Cash</option>
//                   <option>Pay Stack</option>
//                 </select>
//               </div>
//             </div>

//             <div className='d-flex justify-content-center p-sm-3 p-md-4'>
//               <button className='btn' style={styles.btnCustom}>Proceed to Pay</button>
//             </div>
//           </form>

//         </div>
//       </article>
//     </section>
//   )
// }
export default ChooseSeat