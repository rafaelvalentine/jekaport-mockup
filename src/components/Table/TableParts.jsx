import React from 'react'
import { Image } from '../Picture'
import * as Table from './styles'
import { formatAmount } from '../Tools/Formatter'
// import { MilestonesDropDown } from '../DropDown'

export const TableHead = ({ children }) => (
  <Table.Thead>
    <tr>
      {children}
    </tr>
  </Table.Thead>
)

export const TableBody = ({ children }) => (
  <Table.Tbody>
    {children}
  </Table.Tbody>
)

// export const DuoText = ({ text, subtext, ...props }) => {
//   let amount
//   if (props.altText) {
//     amount = `₦ ${formatAmount(text)}`
//   }
//   return (
//     <Table.Stacked>
//       <Table.Text {...props}>
//         {props.altText ? amount : text }
//       </Table.Text>
//       <Table.SubText {...props}>
//         {subtext}
//       </Table.SubText>
//     </Table.Stacked>
//   )
// }

// export const DuoTextAlt = ({ text, subtext, ...props }) => {
//   return (
//     <Table.Stacked>
//       <Table.TextAlt {...props}>
//         { text }
//       </Table.TextAlt>
//     </Table.Stacked>
//   )
// }

export const Text = ({ text }) => (
  <Table.Text>
    {text}
  </Table.Text>
)
export const ProfileAndText = ({ img, text, subtext }) => (
  <Table.SideBy>
    <Image
      src={img || require('../../assets/images/default_user.jpg')}
      height='32px'
      width='32px'
      borderRadius='50%'
    />
    <Table.Stacked>
      <Table.Text >
        {text}
      </Table.Text>
      <Table.SubText>
        {subtext}
      </Table.SubText>
    </Table.Stacked>
  </Table.SideBy>
)

// export const EditText = ({ accepted, unaccepted, compeleted }) => {
//   return (
//     <Table.Stacked>
//       <Table.Edit>
//         <span>EDIT CATEGORY</span>
//       </Table.Edit>
//     </Table.Stacked>
//   )
// }
// export const DeleteText = ({ accepted, unaccepted, compeleted }) => {
//   return (
//     <Table.Stacked>
//       <Table.Delete>
//         <span>DELETE CATEGORY</span>
//       </Table.Delete>
//     </Table.Stacked>
//   )
// }
