import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
  const auth = useContext(AuthContext);
  // const navigate = useNavigate();
  const logOut = () => {
    console.log(auth);
    auth.setIsAuthorized(false);
    localStorage.removeItem("auth");
    // navigate("/form");
  };
  return (
    <Navbar key={"xl"} expand={"xl"} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Menus</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
              Links
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link>
                <NavLink to={"/home"}>Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={"/about"}>About</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={"/content"}>Content</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={"/cards"}>Cards</NavLink>
              </Nav.Link>
              <Nav.Link>
                <button className="btn btn-info" onClick={() => logOut()}>
                  Log Out
                </button>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      {auth.isAuthorized ? "" : <Navigate to={"/form"} />}
    </Navbar>
  );
}
export default NavBar;
