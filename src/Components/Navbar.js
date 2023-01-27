import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../monkey.png'

export default function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>

          <Navbar.Brand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="NewsMonkey logo"
            />
          </Navbar.Brand>

        <Navbar.Brand href="/">News-Monkey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Buisness">Buisness</Nav.Link>
            <Nav.Link href="/Entertainment">Entertainment </Nav.Link>
            <Nav.Link href="/General">General </Nav.Link>
            <Nav.Link href="/Health">Health </Nav.Link>
            <Nav.Link href="/Science">Science </Nav.Link>
            <Nav.Link href="/Sports">Sports </Nav.Link>
            <Nav.Link href="/Technology">Technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}