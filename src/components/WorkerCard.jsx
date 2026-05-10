import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function WorkerCard({ worker, onHire }) {
  return (
    <Card
      className="shadow-sm border-0 h-100 fade-in delay-12"
      style={{
        fontSize: "12px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >

      {/* Image (smaller) */}
      <Card.Img
        variant="top"
        src={worker?.img}
        style={{
          height: "90px",
          objectFit: "cover",
        }}
      />

      <Card.Body className="p-2">

        {/* Name */}
        <Card.Title className="mb-1 fw-bold" style={{ fontSize: "13px" }}>
          {worker?.name}
        </Card.Title>

        {/* Role */}
        <div className="text-muted mb-1" style={{ fontSize: "11px" }}>
          {worker?.role}
        </div>

        {/* Rating */}
        <div className="mb-1" style={{ fontSize: "11px" }}>
          ⭐ {worker?.rating}
        </div>

        {/* Availability */}
        <div
          className={`mb-2`}
          style={{
            fontSize: "11px",
            color: worker?.available ? "green" : "red",
          }}
        >
          {worker?.available ? "Available" : "Busy"}
        </div>

        {/* Button */}
        <Button
          size="sm"
          variant="primary"
          className="w-100 py-0"
          style={{ fontSize: "11px" }}
          disabled={!worker?.available}
          onClick={() => onHire && onHire(worker)}
        >
          Hire
        </Button>

      </Card.Body>

    </Card>
  );
}