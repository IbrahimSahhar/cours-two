import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";

import { mealsData } from "../../mock/mealsData";
import { MealContext } from "../../context/MealContext";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const meal = useContext(MealContext);
  const handelSearch = (e, mealsType) => {
    e.preventDefault();
    meal.setMeals(mealsData[mealsType] ? mealsData[mealsType] : meal.meals);
  };

  return (
    <>
      <Navbar key={"md"} expand={"md"} className="mb-3 bg-dark text-white">
        <Container fluid="xxl">
          <Navbar.Brand href="#" className="text-danger ">
            مطعم جديد
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-md"} />
          <Navbar.Offcanvas
            id={"offcanvasNavbar-expand-md"}
            aria-labelledby={"offcanvasNavbarLabel-expand-xl"}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={"offcanvasNavbarLabel-expand-md"}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3"></Nav>
              <Form className="d-flex">
                <Form.Control
                  required
                  type="search"
                  placeholder="ابحث"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
                <Button
                  className="mx-2 text-danger bg-white"
                  onClick={(e) => handelSearch(e, searchValue)}
                >
                  ابحث
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
