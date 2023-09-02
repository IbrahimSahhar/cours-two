import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = ({ buttonName, event, styles }) => {
  return (
    <Button onClick={event} className={styles}>
      {buttonName}
    </Button>
  );
};

export default ButtonComponent;
