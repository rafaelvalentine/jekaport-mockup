import React from 'react'
import { Modal } from 'react-bootstrap'
import { RoutePreviewCard } from '../Card'

export const RoutePreviewModal = ({ ...props }) => {
  return (
    <Modal id='centeredmodal' size='lg' centered {...props} >
      <RoutePreviewCard {...props} />
    </Modal>
  )
}

export default RoutePreviewModal
