import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function SmallCards() {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Headphone",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      details: "Wireless premium gaming headphone.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      id: 2,
      name: "Keyboard",
      img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      details: "RGB mechanical keyboard.",
    },
    {
      id: 3,
      name: "Mouse7",
      img: "https://images.unsplash.com/photo-1527814050087-3793815479db",
      details: "High-speed gaming mouse.",
    },
    {
      id: 4,
      name: "Monitor3",
      img: "https://images.unsplash.com/photo-1593696140826-c58bed479fcb",
      details: "27-inch 144Hz gaming monitor.",
    },
    {
      id: 5,
      name: "Keyboard3",
      img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      details: "RGB mechanical keyboard.",
    },
    {
      id: 6,
      name: "Mouse4",
      img: "https://images.unsplash.com/photo-1527814050087-3793815479db",
      details: "High-speed gaming mouse.",
    },
  ];

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Row className="g-3 mt-3 fade-in delay-12">

        {products.map((product) => (
          <Col key={product.id} xs={6} md={3} lg={3}>

            <Card
              className="shadow-sm"
              style={{
                width: "70%",
                fontSize: "14px",
                margin: "0 auto",
              }}
            >
              
              <Card.Img
                variant="top"
                src={product.img}
                style={{
                  height: "100px",
                  objectFit: "cover",
                }}
              />

              <Card.Body className="text-center p-2">
                <Card.Title style={{ fontSize: "16px" }}>
                  {product.name}
                </Card.Title>

                <Button
                  size="sm"
                  variant="dark"
                  onClick={() => handleShow(product)}
                >
                  Details
                </Button>
              </Card.Body>

            </Card>

          </Col>
        ))}

      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>

        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProduct?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={selectedProduct?.img}
            alt=""
            className="img-fluid rounded mb-3"
          />

          <p>{selectedProduct?.details}</p>
        </Modal.Body>

      </Modal>
    </>
  );
}