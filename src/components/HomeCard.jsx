import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";




export default function HomeCards() {
  const navigate = useNavigate();


  const services = [
    {
      id: 1,
      title: "Electrical Work",
      img: "/img/electrician.jpg",
      text: "Hire trusted electricians for home and office services.",
    },
    {
      id: 2,
      title: "Plumbing Service",
      img: "/img/plumber.jpg",
      text: "Professional plumbers available anytime near you.",
    },
    {
      id: 3,
      title: "IT Support",
      img: "/img/it-support.jpg",
      text: "Get technical support for software and hardware issues.",
    },
    {
      id: 4,
      title: "Construction Worker",
      img: "/img/construction-worker.jpg",
      text: "Experienced workers for building and construction projects.",
    },
    {
      id: 5,
      title: "Home Cleaning",
      img: "/img/home-cleaning.jpg",
      text: "Professional cleaners for homes, offices, and apartments.",
    },
    {
      id: 6,
      title: "Painter",
      img: "/img/painter.jpg",
      text: "Skilled painters for interior and exterior painting jobs.",
    },
    {
      id: 7,
      title: "AC Repair",
      img: "/img/ac.jfif",
      text: "Air-condition servicing and repair specialists available.",
    },
    {
      id: 8,
      title: "Moving Service",
      img: "/img/moving-service.jpg",
      text: "Reliable workers for house shifting and moving support.",
    },
    {
      id: 9,
      title: "Car Mechanic",
      img: "/img/car-mechanic.jpg",
      text: "Professional mechanics for car repair and maintenance.",
    },
    {
      id: 10,
      title: "Gardening",
      img: "/img/gardening.jpg",
      text: "Garden maintenance and landscaping workers near you.",
    },
    {
      id: 11,
      title: "Delivery Rider",
      img: "/img/delivery-rider.jpg",
      text: "Fast and trusted delivery workers for all services.",
    },
    {
      id: 12,
      title: "Security Guard",
      img: "/img/security-guard.jpg",
      text: "Hire trained security guards for homes and businesses.",
    },
    {
      id: 13,
      title: "Chef / Cook",
      img: "/img/chef.jpg",
      text: "Experienced cooks and chefs for events and homes.",
    },
    {
      id: 14,
      title: "Tailor",
      img: "/img/tailor.jpg",
      text: "Professional tailoring and clothing repair services.",
    },
    {
      id: 15,
      title: "Driver",
      img: "/img/driver.jpg",
      text: "Private and commercial drivers available anytime.",
    },
    {
      id: 16,
      title: "Decorator",
      img: "/img/deco.avif",
      text: "Professional decorators for home and office interior design.",
    },
  ];

  // FETCH worker counts from backend

  return (
    <div className="container mt-5 fade-in delay-12">

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Popular Services</h2>
        <p className="text-muted">
          Find skilled workers quickly and easily
        </p>
      </div>

      {/* Cards */}
      <Row className="g-3">

        {services.map((service) => (
          <Col key={service.id} xs={12} md={6} lg={4}>

            <Card
              className="shadow-sm border-0 h-100"
              style={{ borderRadius: "12px" }}
            >

              {/* Image */}
              <Card.Img
                src={service.img}
                loading="lazy"
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              {/* Body */}
              <Card.Body className="text-center">

                <Card.Title className="fw-bold">
                  {service.title}
                </Card.Title>

                <Card.Text className="text-muted">
                  {service.text}
                </Card.Text>

                {/* BUTTON WITH COUNT */}
                <Button onClick={() => navigate('/workers')} variant="primary" className="w-100 fade-in delay-12">
                 View Workers
                </Button>

              </Card.Body>

            </Card>

          </Col>
        ))}

      </Row>

    </div>
  );
}