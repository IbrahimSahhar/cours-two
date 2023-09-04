import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Meal = ({ title, description, price, src }) => {
  return (
    <Container
      fluid="md"
      className="my-4"
      style={{ border: "1px solid black" }}
    >
      <Row>
        <Col xs={3}>
          <img
            src={require("../../assets/images/breakfast.jpeg")}
            alt="person"
          />
        </Col>
        <Col xs={8}>
          <span>{title}</span>
          <div>{description}</div>
        </Col>
        <Col xs={1} className="text-danger ">
          {price} جنيه
        </Col>
      </Row>
    </Container>
  );
};

export default Meal;
