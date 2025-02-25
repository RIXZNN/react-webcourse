import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">Ngoding.</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              cumque blanditiis nobis, iste neque saepe deserunt quia atque
              dolore consequuntur!
            </p>
            <diV className="no mb-1 mt-4">
              <Link className="text-decoration-none">
              <i className="fa-brands fa-whatsapp"></i>
              <p className="m-0">+62 123-456-789</p>
              </Link>
            </diV>
            <div className="mail">
              <Link className="text-decoration-none">
              <i className="fa-regular fa-envelope"></i>
              <p className="m-0">person-email@gmail.com</p>
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
