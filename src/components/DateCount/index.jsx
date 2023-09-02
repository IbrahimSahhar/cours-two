import React from "react";
import { Col, Row } from "react-bootstrap";

const DateCount = ({ dateData }) => {
  return (
    <Row className="justify-content-center my-3">
      <Col sm="8" className="">
        {`   لديك  ${dateData.length} مواعيد اليوم`}
      </Col>
    </Row>
  );
};

export default DateCount;
