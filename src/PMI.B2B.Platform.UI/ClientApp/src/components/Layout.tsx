import React from 'react';
import {Container} from 'reactstrap';
import NavMenu from './NavMenu';

export default function Layout(props: {children: any}) {
    return (
        <div>
            <NavMenu/>
            <Container tag="main">
                {props.children}
            </Container>
        </div>
    );
}