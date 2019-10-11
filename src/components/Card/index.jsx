import React from 'react'
import { ServicesCard } from './Cards'
export const ServicesCardList = ({ data, ...props }) => data.map(data => (
  <ServicesCard key={Math.random()} {...data} {...props} />
))
