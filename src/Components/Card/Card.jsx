import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
        function CardComponets({title,para,image}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={"img"}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {para}
        </Card.Text>
        <Button variant="secondary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponets;
