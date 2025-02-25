import { Container, Row, Col } from "react-bootstrap";
//import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">Ngoding.</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              cumque blanditiis nobis, iste neque saepe deserunt quia atque
              dolore consequuntur!
            </p>
            <diV className="no">
              <link>
              <i className="fa-brands fa-whatsapp"></i>
              <p>+62 123-456-789</p>
              </link>
            </diV>
            <div className="mail">
              <Link>
              <i className="fa-regular fa-envelope"></i>
              <p>person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
