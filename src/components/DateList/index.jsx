import React from "react";
import { Col, Row } from "react-bootstrap";
import RectangleSpace from "../RectangleSpace";
import Date from "../Date";

const DateList = ({ dateData }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <RectangleSpace>
          {dateData?.map((date, i) => {
            return (
              <Date key={i} src={date.src} name={date.name} time={date.time} />
            );
          })}
        </RectangleSpace>
      </Col>
    </Row>
  );
};

export default DateList;
