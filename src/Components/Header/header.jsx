import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function Header() {
  return (
    <Navbar expand="lg" className="main-navbar sticky-top header" >
        <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://preview.colorlib.com/theme/carries/img/logo.png"
            alt="logo"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu">

            <NavDropdown title="HOME" className="hover-dropdown">
              <NavDropdown.Item>Home Version 1</NavDropdown.Item>
              <NavDropdown.Item>Home Version 2</NavDropdown.Item>
              <NavDropdown.Item>Home Version 3</NavDropdown.Item>
              <NavDropdown.Item>Home Version 4</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="ABOUT" className="hover-dropdown">
              <NavDropdown.Item>About</NavDropdown.Item>
              <NavDropdown.Item>Team</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="SERVICES" className="hover-dropdown">
              <NavDropdown.Item>Service 1</NavDropdown.Item>
              <NavDropdown.Item>Service 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="BLOG" className="hover-dropdown">
              <NavDropdown.Item>Blog 1</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="CONTACT" className="hover-dropdown">
              <NavDropdown.Item>Contact</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>

      </Container>
    
    </Navbar>
  );
}

export default Header;
