import React from "react";
import { Container } from "react-bootstrap";

const ContainerComponent = ({ children, styles }) => {
  return <Container className={styles}>{children}</Container>;
};

export default ContainerComponent;
