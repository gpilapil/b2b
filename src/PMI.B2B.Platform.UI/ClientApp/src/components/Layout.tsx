import React from 'react'
import { Container } from 'react-bootstrap'
import { NavMenu } from './NavMenu'

export const Layout = (props: { children: any }): JSX.Element => {
  return (
    <div>
      <NavMenu />
      <Container>
        {props.children}
      </Container>
    </div>
  )
}
