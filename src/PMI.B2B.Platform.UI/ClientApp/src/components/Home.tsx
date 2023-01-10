import React from 'react'
import { Button } from '@pmi/dsm-react/dist'

export const Home = (): JSX.Element => {
  return (
    <div className='dsm'>
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '84vh'
      }}
      >
      <Button variant="accent" titleText="Primary Buttons" size='lg' />
      </div>
    </div>
  )
}
