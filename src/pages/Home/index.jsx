import CardComponets from "../../components/Card/card";
import { data, slideData } from "../../constants/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
                <h3 className="fw-bold display-4">{items.title}</h3>
                <p className="fs-6">{items.para}</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Button
                    className="btn-hover"
                    variant="outline-light"
                    size="lg"
                  >
                    OUR SERVICES
                  </Button>
                  <Button variant="outline-light" size="lg">
                    GET A QUATE
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      <section className="back">
        <Container className="mt-4">
          <Row className="p-0 gap-4 ">
            {data.map((items) => (
              <CardComponets
                key={items.id}
                title={items.title}
                para={items.Para}
                image={items.image}
              />
            ))}
          </Row>
        </Container>

        <Container>
          <Row>
            <Col sm={4}>
              <Container className="py-5">
                <div className="bg-light p-4 p-md-5 rounded shadow-sm">
                  <h2 className="mb-4 fw-bold">GET A QUOTE</h2>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Control type="email" placeholder="Email" />
                      </Col>
                      <Col md={6}>
                        <Form.Control type="text" placeholder="Phone" />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Control type="text" placeholder="Type" />
                      </Col>
                      <Col md={6}>
                        <Form.Control type="number" placeholder="Quantity" />
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Destination" />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Your Message..."
                      />
                    </Form.Group>

                    <Button
                      variant="secondary"
                      className="px-4 py-2 text-uppercase"
                    >
                      Send
                    </Button>
                  </Form>
                </div>
              </Container>
            </Col>
            <Col sm={8}>
              <h1 className="font">
                WE HAVE 25 YEARS EXPERIANCE IN THIS PASSION
              </h1>
              <p className="text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum,
              </p>
              <p className="text">read more </p>
              <div className="font box">
                <Row>
                  <Col xs={6} md={4} >
                    <p className="color">120</p>
                    Project done
                  </Col>
                  <Col xs={6} md={4} >
                    <p className="color">100</p>
                    Project done
                  </Col>
                  <Col xs={6} md={4} >
                    <p className="color">30</p>
                    Project done
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <h1 style={{ textAlign: "center", marginTop: 65 }}>OUR SERVICES</h1>
        <p style={{ textAlign: "center" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,
        </p>
        <Container>
          <Row>
            <Col sm={6}>
              <h1 className="sec">WE OFFER QUICK &</h1>
              <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
                POWERFUL LOGISTICS SOLUTION
              </h1>
              <p style={{ marginTop: 40, color: "gray" }}>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you.
              </p>
              <Button style={{ marginTop: 20 }} variant="secondary">
                Learn More
              </Button>
            </Col>
            <Col sm={6} className="background">
              <div className="box1 opacity-75 p-15">
                <h4 style={{padding:20}}>WHY CHOOSE US?</h4>
                <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you.</p>
<ul>
  <li> Lorem ipsum dolor sit amet, consectetur.</li>
  <li> Sed quia consequuntur magni dolores eos.</li>
  <li> Nemo enim ipsam voluptatem .</li>
  <li> We denounce with righteous indignation.</li>
</ul>
        <Button variant="secondary">Read More</Button>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="freight-section py-5">
  <div class="container-fluid">
    <div class="row align-items-center">

    
      <div class="col-lg-6 p-0">
        <img
          src="https://optimoroute.com/wp-content/uploads/2020/11/1400x800_Warehouse-Terminology.jpg"
          alt="warehouse"
          class="img-fluid w-100 h-100 freight-img"
                  />
      </div>

    
      <div class="col-lg-6 px-5">

      
        <div class="freight-item d-flex mb-5">
          <div class="icon-box me-4">
            <i class="bi bi-truck"></i>
          </div>
          <div>
            <h4>ROAD FREIGHT</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque.
            </p>
            <a href="#">read more</a>
          </div>
        </div>

        <div class="freight-item d-flex mb-5">
          <div class="icon-box me-4">
            <i class="bi bi-ship"></i>
          </div>
          <div>
            <h4>SEA FREIGHT</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque.
            </p>
            <a href="#">read more</a>
          </div>
        </div>

        <div class="freight-item d-flex">
          <div class="icon-box me-4 active">
            <i class="bi bi-airplane"></i>
          </div>
          <div>
            <h4>AIR FREIGHT</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque.
            </p>
            <a href="#">read more</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
<section class="feature-section py-5">
  <div class="container">
    <div class="row align-items-center">

      
      <div class="col-lg-7">
        <div class="row">

          <div class="col-md-6 mb-4">
            <div class="feature-box d-flex">
              <div class="feature-icon me-3">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div>
                <h5>OUR LOCATION</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="feature-box d-flex">
              <div class="feature-icon me-3">
                <i class="bi bi-headset"></i>
              </div>
              <div>
                <h5>24/7 SUPPORT</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="feature-box d-flex">
              <div class="feature-icon me-3">
                <i class="bi bi-newspaper"></i>
              </div>
              <div>
                <h5>LATEST NEWS</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="feature-box d-flex">
              <div class="feature-icon me-3">
                <i class="bi bi-bicycle"></i>
              </div>
              <div>
                <h5>FAST DELIVERY</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      
      <div class="col-lg-5 text-center">
        <img
          src="https://lirp.cdn-website.com/c8232ddf/dms3rep/multi/opt/cms_gallery_12_20200819141542100-640w.png"
          alt="delivery"
          class="img-fluid"
        />
      </div>

    </div>
  </div>
</section>


    </div>
    
  );
}
