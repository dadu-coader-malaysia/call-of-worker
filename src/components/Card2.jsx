import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function SmallCards() {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const workers = [
    {
      id: 1,
      name: "M R Hafiz",
      role: "Full Stack Developer",
      rating: 4.9,
      whatsapp: "60172053700",
      experience: "3 Years Experience",
      location: "Bangi,Selangor,Malaysia",
      img: "/img/dev.jpg",
      details:
        "Experienced MERN stack developer for websites and web applications.",
    },

    {
      id: 2,
      name: "Rahim Khan",
      role: "Assistant (_Demo_)",
      rating: 3.8,
      whatsapp: "60123456789",
      experience: "2.4 Years Experience",
      location: "Selangor",
      img: "/img/boy.jpg",
      details:
        "Assistant for home and office support.",
    },
    {
      id: 3,
      name: "D-via",
      role: "Assistant (_Demo_)",
      rating: 3.3,
      whatsapp: "60123456789",
      experience: "2 Years Experience",
      location: "Selangor",
      img: "/img/dvia.avif",
      details:
        "Assistant for Maintenance Db with User support.",
    },
  ];

  const handleShow = (worker) => {
    setSelectedData(worker);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Row className="g-3 mt-3 fade-in delay-9">

        {workers.map((worker) => (
          <Col key={worker.id} xs={6} md={4} lg={3}>

            {/* Small Card */}
            <Card
              className="shadow-sm border-0 h-100"
              style={{
                fontSize: "12px",
                borderRadius: "10px",
              }}
            >

              <Card.Img
                variant="top"
                src={worker.img}
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <Card.Body className="text-center p-2">

                {/* Only name visible */}
                <Card.Title style={{ fontSize: "13px" }}>
                  {worker.name}
                </Card.Title>

                <Button
                  size="sm"
                  variant="primary"
                  className="w-100"
                  onClick={() => handleShow(worker)}
                >
                  Details
                </Button>

              </Card.Body>

            </Card>

          </Col>
        ))}

      </Row>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="sm"
      >

        <Modal.Header closeButton>
          <Modal.Title>
            {selectedData?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">

          <img
            src={selectedData?.img}
            alt=""
            style={{
              width: "180px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <h6 className="mt-3">
            {selectedData?.role}
          </h6>

          <p className="text-muted">
            {selectedData?.details}
          </p>

          <p>⭐ Rating: {selectedData?.rating}</p>

          <p>📍 {selectedData?.location}</p>

          <p>🛠 {selectedData?.experience}</p>

          <a
            href={`https://wa.me/${selectedData?.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success btn-sm w-100"
          >
            WhatsApp Hire
          </a>

        </Modal.Body>

      </Modal>

      <h2 className="text-center mt-5 fade-in delay-12">
        This site developed by <b>M R Hafiz</b>
      </h2>
    </>
  );
}