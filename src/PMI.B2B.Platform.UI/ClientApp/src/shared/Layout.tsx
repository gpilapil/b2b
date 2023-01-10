import { Container } from 'react-bootstrap';
import NavMenu from './NavMenu';

export default function Layout(props: { children: any }) {
  return (
    <div>
      <NavMenu />
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <Container>{props.children}</Container>
    </div>
  );
}
