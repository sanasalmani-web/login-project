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
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto menu ">

            <NavDropdown title="HOME">
              <NavDropdown.Item>Home Version 1</NavDropdown.Item>
              <NavDropdown.Item>Home Version 2</NavDropdown.Item>
              <NavDropdown.Item>Home Version 3</NavDropdown.Item>
              <NavDropdown.Item>Home Version 4</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="ABOUT">
              <NavDropdown.Item>About</NavDropdown.Item>
              <NavDropdown.Item>About profile</NavDropdown.Item>
              <NavDropdown.Item>About history</NavDropdown.Item>
              <NavDropdown.Item>About report</NavDropdown.Item>
              <NavDropdown.Item>About team</NavDropdown.Item>
              <NavDropdown.Item>About support</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="SERVICES">
              <NavDropdown.Item>Service 1</NavDropdown.Item>
              <NavDropdown.Item>Service 2</NavDropdown.Item>
              <NavDropdown.Item>Service 3</NavDropdown.Item>
              <NavDropdown.Item>Service Details</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="OTHER PAGES">
              <NavDropdown.Item>404</NavDropdown.Item>
              <NavDropdown.Item>Coming soon</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="BLOG">
              <NavDropdown.Item>Blog version 1</NavDropdown.Item>
              <NavDropdown.Item>Blog version 2</NavDropdown.Item>
              <NavDropdown.Item>Single blog</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="CONTACT" className="hover-dropdown">
              <NavDropdown.Item>Contact version1</NavDropdown.Item>
              <NavDropdown.Item>Contact version2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Container>
    
    </Navbar>
  );
}

export default Header;
