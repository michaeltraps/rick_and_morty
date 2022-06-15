import React, { FC } from 'react'

import { Selected } from '../card/Card'

interface IProps {
  selected: Selected;
}

const Sheet = ({ selected }: IProps) => {
  console.log('selected: ', selected.name)
  // console.log('location info: ', locationInfo)
  return (
    <div className='rick__sheet'>
      <h1>{selected.name}</h1>
    </div>
  )
}

export default Sheet
