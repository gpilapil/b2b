import React from 'react';
import NavMenu from './NavMenu';
import {Container} from "react-bootstrap";

export default function Layout(props: { children: any }) {
  return (
    <div>
      <NavMenu />
      <Container>
        {props.children}
      </Container>
    </div>
  );
}
