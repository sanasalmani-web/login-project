import CardComponets from "../../components/Card/card";
import { data, slideData } from "../../constants/data";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div>
      <section>
   <Carousel>
  {slideData.map((items) => (
    <Carousel.Item key={items.id}>
      <img
        className="d-block w-100"
        src={items.image}
        alt={items.title}
      />

      <Carousel.Caption className="text-center">
        <h3 className="fw-bold display-4">
          {items.title}
        </h3>
        <p className="fs-6">
          {items.para}
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3">
    <Button className="btn-hover" variant="outline-light" size="lg">OUR SERVICES</Button>
    <Button variant="outline-light" size="lg">GET A QUATE</Button>
    </div>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>

      </section>
      <Container className="mt-4">
        <Row>
          {data.map((items) => (
            <Col className="card" md={4} key={items.id}>
              <CardComponets
                title={items.title}
                para={items.Para}  
                image={items.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
<section>
  <Container>
  <Row>
            <Col sm={4}>
sm=4
            </Col>
        <Col sm={8}>sm=8</Col>
  </Row>
  </Container>
</section>
    </div>
  );
}
