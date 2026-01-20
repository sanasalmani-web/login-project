import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function CardComponets({ title, para, image }) {
  return (
    <Card className="shadow"style={{ width: "22rem", height: "30rem", padding: 0}}>
      <Card.Img variant="top" src={image} alt={"img"} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{para}</Card.Text>
        <Button variant="secondary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponets;
