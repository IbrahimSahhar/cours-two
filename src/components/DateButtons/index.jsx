import React from "react";
import { Col, Row } from "react-bootstrap";
import ButtonComponent from "../Button";
import { data } from "../../mock/data.js";
const DateButtons = ({ setDateData }) => {
  return (
    <Row className="justify-content-center my-3 ">
      <Col sm="8" className="d-flex justify-content-between">
        <ButtonComponent
          buttonName={"عرض البيانات"}
          event={() => {
            setDateData(data);
          }}
          styles="btn btn-primary p-2 mx-1"
        />
        <ButtonComponent
          buttonName={"مسح البيانات"}
          event={() => {
            setDateData([]);
          }}
          styles="btn btn-primary p-2 mx-1"
        />
      </Col>
    </Row>
  );
};

export default DateButtons;
