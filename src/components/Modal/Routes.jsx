import React from 'react'
import { Modal } from 'react-bootstrap'
import { RoutePreviewCard, ViewRouteCard, DeleteRouteCard } from '../Card'
import { EditRouteForm } from '../Forms'


export const RoutePreviewModal = ({ ...props }) => {
  return (
    <Modal id='centeredmodal' size='lg' centered {...props} >
      <RoutePreviewCard {...props} />
    </Modal>
  )
}

export const ViewRouteModal = ({ ...props }) => {
  return (
    <Modal id='centeredmodal' size='lg' centered {...props} >
      <ViewRouteCard {...props} />
    </Modal>
  )
}
export const EditRouteModal = ({ ...props }) => {
  return (
    <Modal id='centeredmodal' size='lg' centered {...props} >
      <EditRouteForm {...props} />
    </Modal>
  )
}
export const DeleteRouteModal = ({ ...props }) => {
  return (
    <Modal id='centeredmodal' size='lg' centered {...props} >
      <DeleteRouteCard {...props} />
    </Modal>
  )
}
export default RoutePreviewModal
