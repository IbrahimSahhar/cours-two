import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardComponent = ({ title, description, cardFunc, children }) => {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="../../assets/images/logo.png" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={cardFunc} variant="primary">
          Go somewhere
        </Button>
        <>{children}</>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
